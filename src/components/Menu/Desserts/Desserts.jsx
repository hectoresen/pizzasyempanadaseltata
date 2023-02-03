import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { getData } from '../../../common/get-menu-content';
import FoodCard from '../../FoodCard/FoodCard';
import { Card, Row, Text } from '@nextui-org/react';
import './Desserts.scss';


const Desserts = () => {

    const [dessertsList, setDessertsList] = useState(false);

    useEffect(() => {
        setDessertsList(getData('dessertsList'))
    }, [dessertsList])


    return (
        <div className='dessertsmenu'>
            <Card css={{ $$cardColor: '$colors$warning', width: 'auto' }}>
                <Card.Body>
                    <Row justify="center" align="center">
                        <Text h6 size={15} color="white" css={{ m: 0 }}>
                            Todas los postres excepto filloas y alfajores funcionan por encargo, puedes encargarlas o hacer un pedido, nosotros te confirmaremos las unidades disponibles
                        </Text>
                    </Row>
                </Card.Body>
            </Card>
            {
                (dessertsList.length > 1)
                    ?
                    <FoodCard food={dessertsList} />
                    :
                    ''
            }
        </div>
    )
}

export default Desserts;