import React from 'react';
import { useState } from 'react';
import Pizza from './Pizza/Pizza';
import navPizza from '../../assets/navPizza.svg';
import navDesserts from '../../assets/navPostre.svg';
import navPatty from '../../assets/navEmpanadillas.svg';
import navDrinks from '../../assets/navDrinks.svg';
import logoMenu from '../../assets/logoparacarta.svg';
import './Menu.scss';

const Menu = () => {
    const [showItems, setShowItems] = useState('');

    return (
        <div className='menu'>
            <div className='menu__header'>
                <hr />
                <div className='menu__header-logo'><img src={logoMenu} alt="Logo Carta" /></div>
                <hr />
            </div>
            <div className='menu__intro'>¿Qué te apetece hoy?</div>
            <div className='menu__nav'>
                <div className='menu__nav__items'>
                    <div className='menu__nav__items-item' onClick={() =>{setShowItems('pizza')}}>
                        <img src={navPizza} alt='Pizza logo'></img>
                        Pizzas
                    </div>
                    <div className='menu__nav__items-item'>
                        <img src={navPatty} alt='Empanadas logo' onClick={() =>{setShowItems('desserts')}}></img>
                        Empanadas
                    </div>
                    <div className='menu__nav__items-item'>
                        <img src={navDesserts} alt='Postres logo'></img>
                        Postres
                    </div>
                    <div className='menu__nav__items-item'>
                        <img src={navDrinks} alt='Bedidas logo'></img>
                        Bebidas
                    </div>
                </div>
            </div>
            <div className='menu__foodmenu'>
                {showItems === 'pizza' &&
                <div className='menu__foodmenu-pizza'>
                    <Pizza />
                </div>
                }
            </div>
        </div>
    )
}

export default Menu;