import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { getData } from '../../../common/get-menu-content';
import FoodCard from '../../FoodCard/FoodCard';
import { Card, Row, Text } from '@nextui-org/react';
import './Patty.scss';

const Patty = () => {
    const [pattyList, setPattyList] = useState(false)

    useEffect(() =>{
        setPattyList(getData('pattyList'))
    }, [pattyList])


    return (
        <div className='pattymenu'>
            <Card css={{ $$cardColor: '$colors$warning', width: 'auto'}}>
            <Card.Body>
          <Row justify="center" align="center">
            <Text h6 size={15} color="white" css={{ m: 0 }}>
            Todas las empanadas funcionan por encargo, puedes encargarlas o hacer un pedido, nosotros te confirmaremos las unidades disponibles
            </Text>
          </Row>
        </Card.Body>
            </Card>
            {
                (pattyList.length > 1)
                ?
                <FoodCard food={pattyList} />
                :
                ''
            }
        </div>
    )
}

export default Patty;