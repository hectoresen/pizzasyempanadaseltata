import React, { useEffect, useState } from 'react';
import { getData } from '../../../common/get-menu-content';
import FoodCard from '../../FoodCard/FoodCard';

const Pizza = () => {

    const [pizzaList, setPizzaList] = useState(false)
    useEffect(() =>{
        setPizzaList(getData('pizzaList'))
    },[pizzaList])


    return (
        <div className='pizzamenu'>
            {
                (pizzaList.length > 1)
                ?
                    <FoodCard food={pizzaList} />
                :
                ''
            }
        </div>
    )
}

export default Pizza