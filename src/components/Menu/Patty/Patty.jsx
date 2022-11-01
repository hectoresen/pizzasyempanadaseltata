import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { getData } from '../../../common/get-menu-content';
import FoodCard from '../../FoodCard/FoodCard';
import './Patty.scss';

const Patty = () => {
    const [pattyList, setPattyList] = useState(false)

    useEffect(() =>{
        setPattyList(getData('pattyList'))
    }, [pattyList])


    return (
        <div className='pattymenu'>
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