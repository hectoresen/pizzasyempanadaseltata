import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { getData } from '../../../common/get-menu-content';
import FoodCard from '../../FoodCard/FoodCard';

const Drinks = () => {
    const [drinksList, setDrinksList] = useState(false);

    useEffect(() => {
        setDrinksList(getData('drinksList'))
    }, [drinksList])

  return (
    <div className='drinksmenu'>
        {
            (drinksList.length > 1)
            ?
            <FoodCard food={drinksList} />
            :
            ''
        }
    </div>
  )
}

export default Drinks