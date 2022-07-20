import React from 'react';
import './Prices.scss';

const Prices = (props) => {
    console.log(props);
    if(props.pizzaPrices){
        return props.pizzaPrices.map((pizza, index) =>{
            return <div className='products__prices' key={index}>
                    <div className='products__prices-price'>
                        <p>{Object.keys(pizza)}: {Object.values(pizza)}</p>
                    </div>
            </div>
        })
    }
    if(props.pattyPrices){
        /* RETURN PATTY */
        console.log(2);
    }
}

export default Prices;