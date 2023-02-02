import React, { useEffect } from 'react'
import './CartIcon.css'
import { FaShoppingCart } from 'react-icons/fa'
import { useState } from 'react'
import Cart from '../Cart/Cart'
import { useContext } from 'react'
import { CountCartItemsContext } from '../../context/cart-items-count'

const CartIcon = () => {
    const [showContain, setShowContain] = useState(false)
    const [totalItems, setTotalItems] = useState(0)
    const [items] = useContext(CountCartItemsContext)

    useEffect(() => {
        setTotalItems(items)
    }, [items])

    return (
        <>
            <div class={(items < 1 ? "cart_none" : "cart")}>
                <span class="count">{items}</span>
                <i class="material-icons">
                    <FaShoppingCart
                        className="icon"
                        size="45px"
                        color="rgba(49,49,49, 1)"
                        onClick={() => { setShowContain(!showContain) }}
                    />
                </i>
            </div>
            <div className='cartModalicon'>
                {(showContain) ? <Cart showContain={showContain} /> : ''}
            </div>
        </>
    )
}

export default CartIcon