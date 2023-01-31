import React, { useEffect, useState } from "react"
import { Modal, Input, Checkbox, Button, Text, Card } from "@nextui-org/react"
import { DeleteProduct } from "../DeleteProduct/DeleteProduct"
import { sendOrder } from "./order/order"
import { BsWhatsapp } from 'react-icons/bs'
import './Cart.scss'


const CartModal = ({ showContain }) => {
    const [visible, setVisible] = React.useState(false)
    const [cartList, setCartList] = useState([]);
    const [orderOptions, setOrderOptions] = useState({ toSend: false, toPickUp: false, address: '' });

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
                    <Card isHoverable variant="bordered" style={{ 'marginTop': '10px', 'padding': '1%', 'alignItems': 'center', }}>
                        <Text size={15}>
                            <span style={{ 'color': 'orange' }}>{element.name}</span>, Tamaño: <span style={{ 'color': 'orange' }}>{element.size}</span>, Cantidad: <span style={{ 'color': 'orange' }}>{element.quantity}</span>
                        </Text>
                        <Button size="xs" color='secondary' onPress={() => productToDelete(element)}> Eliminar </Button>
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
                        <Text size={14}>Total: {totalPrice} €</Text>
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
                <Modal.Footer>
                    <Button auto flat color="error" onClick={closeHandler}>
                        Volver atrás
                    </Button>
                    <Button auto
                        onClick={() => sendDataOrder({options: orderOptions, products: cartList})}
                        color='success'
                        disabled={
                            (!orderOptions.toSend && !orderOptions.toPickUp) || ((totalPrice < 8 && orderOptions.toSend) || (orderOptions.toSend && orderOptions.address.length <6) || ((totalPrice == 0) && (orderOptions.toPickUp)))
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
