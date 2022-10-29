import React, { useEffect } from "react";
import { Modal, Input, Row, Checkbox, Button, Text } from "@nextui-org/react";
import { FaPizzaSlice } from 'react-icons/fa';
import { BsWhatsapp } from 'react-icons/bs';


const CartModal = ({showContain}) => {
    const [visible, setVisible] = React.useState(false);

    useEffect(() =>{
        console.log(showContain)
        if(showContain === true){
            setVisible(true)
        }else{
            setVisible(false)
        }

    }, [showContain])

    
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
                    <Input
                        clearable
                        bordered
                        fullWidth
                        color="primary"
                        size="lg"
                        placeholder="Calle, piso, puerta y letra si es necesario"

                    />
                    <Input
                        clearable
                        bordered
                        fullWidth
                        color="primary"
                        size="lg"
                        placeholder="¿Algún comentario adicional?"

                    />
{/*                     <Row justify="space-between">
                        <Checkbox>
                            <Text size={14}>Remember me</Text>
                        </Checkbox>
                        <Text size={14}>Forgot password?</Text>
                    </Row> */}
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
