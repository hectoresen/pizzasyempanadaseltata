import React, { useContext, useEffect, useState } from "react"
import { Modal, Input, Checkbox, Button, Text, Card, Grid, Row, Badge } from "@nextui-org/react"
import { DeleteProduct } from "../DeleteProduct/DeleteProduct"
import { sendOrder } from "./order/order"
import { BsWhatsapp } from 'react-icons/bs'
import { CountCartItemsContext } from "../../context/cart-items-count"
import PaymentMethod from "../PaymenMethod/PaymentMethod"
import { PaymenMethodContext } from "../../context/payment-method"
import { calcScheduleLimit } from "./order/schedule-limit"
import './Cart.scss'


const CartModal = ({ showContain }) => {
    const [visible, setVisible] = React.useState(false)
    const [cartList, setCartList] = useState([]);
    const [orderOptions, setOrderOptions] = useState({ toSend: false, toPickUp: false, address: ''});
    const [items, setItems] = useContext(CountCartItemsContext)
    const [paymentMethods, setPaymentMethods] = useContext(PaymenMethodContext)
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
                <Badge color="error" variant="flat">El pedido mínimo a domicilio es de 8 €</Badge>
            </div>
        }
        if ((total == 0) && (orderOptions.toPickUp)) {
            return <div className="resume__card">
                <Badge color="error" variant="flat">Debes añadir productos al carrito para hacer un pedido</Badge>
            </div>

        }
    }

    const showProducts = () => {

        if ((!cartList) || (cartList.length == 0)) {
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
                        <Card.Footer style={{ justifyContent: "center" }}>
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
            address: event.target.value,
            paymentMethod: paymentMethods
        })
    }
    const handleComments = event => {
        setOrderOptions({
            ...orderOptions,
            comments: event.target.value
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
                        {
                            (!calcScheduleLimit()
                                ?
                                <div className="resume__card">
                                        <Badge color="error" variant="flat">{`Nuestro horario es de Martes a Domingo`}</Badge>
                                        <Badge color="error" variant="flat">{`10:00 a 14:00 y de 19:30 a 22:00`}</Badge>
                                </div>
                                :
                                ''
                            )
                        }
                        <div className="resume__total">
                            <Badge color="success" variant="flat" size="lg" >Total: {totalPrice} €</Badge>
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
                                        onChange={handleComments}
                                    />
                                </div>
                                <div>
                                    <PaymentMethod />
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
                        onClick={() => sendDataOrder({ options: orderOptions, products: cartList, paymentMethod: paymentMethods })}
                        color='success'
                        disabled={
                            (!orderOptions.toSend && !orderOptions.toPickUp) || (paymentMethods === 'Método de pago' && orderOptions.toSend) || ((totalPrice < 8 && orderOptions.toSend) || (orderOptions.toSend && orderOptions.address.length < 6) || ((totalPrice == 0) && (orderOptions.toPickUp)))
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
