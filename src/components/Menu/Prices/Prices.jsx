import React from 'react';
import './Prices.scss';

const Prices = (props) => {
        return props.productPrices.map((product, index) =>{
            return <div className='products__prices' key={index}>
                    <div className='products__prices-price'>
                        <p>{Object.keys(product)}: {Object.values(product)}</p>
                    </div>
            </div>
        })
    }

export default Prices;