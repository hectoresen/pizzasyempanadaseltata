import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { getData } from '../../../common/get-menu-content';
import FoodCard from '../../FoodCard/FoodCard';
import './Desserts.scss';


const Desserts = () => {

    const [dessertsList, setDessertsList] = useState(false);

    useEffect(() =>{
        setDessertsList(getData('dessertsList'))
    }, [dessertsList])


    return (
        <div className='dessertsmenu'>
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