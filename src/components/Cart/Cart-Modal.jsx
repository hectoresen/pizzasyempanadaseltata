import React, { useEffect, useState } from "react";
import { Modal, Input, Row, Checkbox, Button, Text, Card } from "@nextui-org/react";
import { FaPizzaSlice } from 'react-icons/fa';
import { BsWhatsapp } from 'react-icons/bs';
import { MdOutlineDelete } from 'react-icons/md';
import './Cart.scss'


const CartModal = ({ showContain }) => {
    const [visible, setVisible] = React.useState(false);
    const [cartList, setCartList] = useState([]);
    const [productMessage, setProductMessage] = useState()
    const [orderToShip, setOrderToShip] = useState(false)
    let totalPrice = 0;

    useEffect(() => {
        if (showContain === true) {
            setVisible(true)
        } else {
            setVisible(false)
        }

    }, [showContain])

    useEffect(() => {
        let items = JSON.parse(localStorage.getItem('productsList'))
        setCartList(items)
    }, [])

    const handler = () => setVisible(true);
    const closeHandler = () => {
        setVisible(false);
        console.log("closed");
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
                        <Text b size={18}>
                            <span><FaPizzaSlice /></span>
                        </Text>
                    </Text>
                </Modal.Header>
                <Modal.Body>
                    <div className="resume">
                        {
                            (cartList.length)
                                ?
                                cartList.map(element => {
                                    totalPrice += element.price;
                                    return <div className="resume__card" key={element.name}>
                                        <Card isHoverable variant="bordered" style={{'marginTop': '10px', 'padding': '1%', 'alignItems': 'center',}}>
                                            <Text size={15}>
                                                <span style={{ 'color': 'orange' }}>{element.name}</span>, Tamaño: <span style={{ 'color': 'orange' }}>{element.size}</span>, Cantidad: <span style={{ 'color': 'orange' }}>{element.quantity}</span>
                                            </Text>
                                            <Button size="xs" color='secondary'> Eliminar </Button>
                                        </Card>
                                    </div>
                                })
                                :
                                ''
                        }
                        <Text size={14}>Total: {totalPrice} €</Text>
                    </div>
                    {
                        (orderToShip)
                            ?
                            <div>
                                <div style={{'marginBottom': '20px'}}>
                                <Input
                                    clearable
                                    bordered
                                    fullWidth
                                    color="primary"
                                    size="lg"
                                    placeholder="Calle, piso, puerta y letra si es necesario"
                                />
                                </div>
                                <div>
                                <Input
                                    clearable
                                    bordered
                                    fullWidth
                                    color="primary"
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
                    <Checkbox onChange={() => { setOrderToShip(!orderToShip) }}>A domicilio</Checkbox>
                    <Checkbox>Para recoger</Checkbox>
                </Modal.Body>
                <Modal.Footer>
                    <Button auto flat color="error" onClick={closeHandler}>
                        Volver atrás
                    </Button>
                    <Button auto onClick={closeHandler} color='success'>
                        <Text>Pedir ya &nbsp; </Text>
                        <BsWhatsapp />
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
};

export default CartModal;
