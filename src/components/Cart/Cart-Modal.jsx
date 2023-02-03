import React, { useContext, useEffect, useState } from "react"
import { Modal, Input, Checkbox, Button, Text, Card, Grid, Row } from "@nextui-org/react"
import { DeleteProduct } from "../DeleteProduct/DeleteProduct"
import { sendOrder } from "./order/order"
import { BsWhatsapp } from 'react-icons/bs'
import './Cart.scss'
import { CountCartItemsContext } from "../../context/cart-items-count"
import { height } from "@mui/system"


const CartModal = ({ showContain }) => {
    const [visible, setVisible] = React.useState(false)
    const [cartList, setCartList] = useState([]);
    const [orderOptions, setOrderOptions] = useState({ toSend: false, toPickUp: false, address: '' });
    const [items, setItems] = useContext(CountCartItemsContext)
    let totalPrice = 0;

    useEffect(() => {
        if (showContain === true) {
            setVisible(true)
        } else {
            setVisible(false)
        }

        let items = JSON.parse(localStorage.getItem('productsList'))
        setCartList(items)
    }, [showContain])

    const closeHandler = () => setVisible(false)

    const productToDelete = product => {
        DeleteProduct(product)
        setCartList(JSON.parse(localStorage.getItem('productsList')))
        setItems(items - 1)
    }

    const miniumShippingPrice = total => {
        if ((total < 8) && (orderOptions.toSend)) {
            return <div className="resume__card">
                <Text size={15} color='error'>
                    El pedido mínimo a domicilio es de 8 €
                </Text>
            </div>
        }
        if ((total == 0) && (orderOptions.toPickUp)) {
            return <div className="resume__card">
                <Text size={15} color='error'>
                    Debes añadir productos al carrito para hacer un pedido
                </Text>
            </div>

        }
    }

    const showProducts = () => {
        if (cartList.length == 0) {
            return <div className="resume__card">
                <Text size={15}>
                    No tienes productos añadidos
                </Text>
            </div>
        }

        if (cartList) {
            return cartList.map(element => {
                totalPrice += element.price;
                return <div className="resume__card" key={element.name}>
                    <Card style={{ 'marginTop': '10px' }} css={{ p: "$6", mw: "280px" }}>
                        <Card.Header>
                            <img
                                alt={element.name}
                                src={element.img}
                                width="80px"
                                height="80px"
                            />
                            <Grid.Container css={{ pl: "$6" }}>
                                <Grid xs={12}>
                                    <Text h5 css={{ lineHeight: "$xs" }}>
                                        {element.name}
                                    </Text>
                                </Grid>
                                <Grid xs={12}>
                                    <Text css={{ color: "$accents8" }}>
                                        {`Tamaño ${element.size} 
                                        Cantidad: ${element.quantity} `}
                                        {
                                            (element.selector) ? ` Relleno: ${element.selector}` : ''
                                        }
                                    </Text>
                                </Grid>
                            </Grid.Container>
                        </Card.Header>
                        <Card.Body css={{ py: "$2" }}>
                            <Text>
                                {element.ingredients}
                            </Text>
                        </Card.Body>
                        <Card.Footer style={{justifyContent: "center"}}>
                            <Button size="sm" color='secondary' onPress={() => productToDelete(element)}> Eliminar </Button>
                        </Card.Footer>
                    </Card>
                </div>
            })
        }
    }

    const sendDataOrder = order => {
        sendOrder(order)
        closeHandler()
    }

    const handleAddress = event => {
        setOrderOptions({
            ...orderOptions,
            address: event.target.value
        })
    }

    return (
        <div>
            <Modal
                closeButton
                blur
                aria-labelledby="modal-title"
                open={visible}
                onClose={closeHandler}
            >
                <Modal.Header>
                    <Text id="modal-title" size={18}>
                        Tu pedido
                        {/*                         <Text b size={20}>
                            <span><FaPizzaSlice /></span>
                        </Text> */}
                    </Text>
                </Modal.Header>
                <Modal.Body>
                    <div className="resume">
                        {
                            showProducts()
                        }
                        {
                            miniumShippingPrice(totalPrice)
                        }
                        <div className="resume__total">
                            <Card css={{ $$cardColor: '$colors$success', width: '200px', height: 'min-content' }}>
                                <Card.Body>
                                    <Row justify="center" align="center">
                                        <Text size={16} color="white">Total: {totalPrice} €</Text>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </div>

                    </div>
                    {
                        ((orderOptions.toSend) && (totalPrice > 8))
                            ?
                            <div>
                                <div style={{ 'marginBottom': '20px' }}>
                                    <Input
                                        clearable
                                        bordered
                                        fullWidth
                                        color="secondary"
                                        size="lg"
                                        placeholder="Calle, piso, puerta y letra si es necesario"
                                        onChange={handleAddress}
                                    />
                                </div>
                                <div>
                                    <Input
                                        clearable
                                        bordered
                                        fullWidth
                                        color="secondary"
                                        size="lg"
                                        placeholder="¿Algún comentario adicional?"
                                    />
                                </div>
                            </div>
                            :
                            <Input
                                clearable
                                bordered
                                fullWidth
                                color="primary"
                                size="lg"
                                placeholder="¿Algún comentario adicional?"
                            />
                    }
                    <Checkbox onChange={() => { setOrderOptions({ ...orderOptions, toSend: !orderOptions.toSend }) }}>A domicilio</Checkbox>
                    <Checkbox onChange={() => { setOrderOptions({ ...orderOptions, toPickUp: !orderOptions.toPickUp }) }}>Para recoger</Checkbox>
                </Modal.Body>
                <Modal.Footer justify="center">
                    <Button auto flat color="error" onClick={closeHandler}>
                        Volver atrás
                    </Button>
                    <Button auto
                        onClick={() => sendDataOrder({ options: orderOptions, products: cartList })}
                        color='success'
                        disabled={
                            (!orderOptions.toSend && !orderOptions.toPickUp) || ((totalPrice < 8 && orderOptions.toSend) || (orderOptions.toSend && orderOptions.address.length < 6) || ((totalPrice == 0) && (orderOptions.toPickUp)))
                        }>
                        <Text>Pedir ya &nbsp; </Text>
                        <BsWhatsapp />
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
};

export default CartModal;
