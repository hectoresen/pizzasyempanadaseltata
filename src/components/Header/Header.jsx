import React from 'react';
import { useState } from 'react';
import { whereweare, letter } from './nav';
import  {AiOutlineMenu } from 'react-icons/ai';
import { MdOutlineLocalOffer, MdOutlineFastfood } from 'react-icons/md';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import logoTata from '../../assets/pruebalogo.svg';
import { BiMap } from 'react-icons/bi';
import "animate.css";
import './Header.scss';
import Cart from '../Cart/Cart';

const Header = () => {
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    const [showCart, setShowCart] = useState(false);

    return (
    <div className='header'>
        <div className='header__logo'>
            <img src={logoTata} alt="eltatapizzasyempanadas"/>
        </div>
        <div className='header__nav'>
        <div className='header__nav__mobile' onClick={() => setShowMobileMenu(!showMobileMenu)}>
            <span className='header__nav__mobile-btn'><AiOutlineMenu /></span>
            <p>Menú</p>
        {showMobileMenu &&
            <div className='header__nav__mobile__items'>
                {/* <p className='animate__animated animate__fadeInLeft'><span><MdOutlineLocalOffer /></span> Ofertas</p> */}
                <p className='animate__animated animate__fadeInLeft'><span><MdOutlineFastfood /></span> Carta</p>
                <p className='animate__animated animate__fadeInLeft'><span><BiMap /></span> Dónde estamos</p>
                <p className='animate__animated animate__fadeInLeft'><span><AiOutlineShoppingCart /></span> Mi pedido</p>
            </div>
        }
        </div>
            <div className='header__nav-item'>
                <p onClick={letter}> <span><MdOutlineFastfood /></span> Carta</p>
            </div>
            <div className='header__nav-item'>
                <p onClick={whereweare}> <span><BiMap /></span> Dónde estamos</p>
            </div>
            <div className='header__nav-item'>
                <p onClick={() =>{setShowCart(!showCart)}}><span><AiOutlineShoppingCart /></span> Mi pedido</p>
                { (showCart) ? <Cart showContain={showCart} /> : '' }
            </div>
        </div>
    </div>
    )
}

export default Header;