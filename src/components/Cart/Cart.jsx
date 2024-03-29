import React from 'react'
import CartModal from './Cart-Modal'
import './Cart.scss'

const Cart = ({showContain}) => {

    return (
        <div className='cart'>
            {(showContain)
            ?
            <div className='cart__contain'>
                <CartModal showContain={showContain} />
            </div>
            :
            ''
            }
        </div>
    )
}

export default Cart;