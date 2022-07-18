import React from 'react';
import logoTata from '../../assets/pruebalogo.svg';
import { MdOutlineLocalOffer, MdOutlineFastfood } from 'react-icons/md';
import { BiMap } from 'react-icons/bi';
import  {AiOutlineMenu } from 'react-icons/ai';
import './Header.scss';

const Header = () => {
    const showMobileMenu = ev =>{
        console.log('hola');
    }
    return (
    <div className='header'>
        <div className='header__logo'>
            <img src={logoTata} alt="eltatapizzasyempanadas"/>
        </div>
        <div className='header__nav'>
        <div className='header__nav__mobile' onClick={showMobileMenu}>
            <span className='header__nav__mobile-btn'><AiOutlineMenu /></span>
            <p>Menú</p>
        </div>
            <div className='header__nav-item'>
                <p> <span><MdOutlineLocalOffer /></span> Ofertas</p>
            </div>
            <div className='header__nav-item'>
                <p> <span><MdOutlineFastfood /></span> Carta</p>
            </div>
            <div className='header__nav-item'>
                <p> <span><BiMap /></span> Dónde estamos</p>
            </div>
        </div>
    </div>
    )
}

export default Header;