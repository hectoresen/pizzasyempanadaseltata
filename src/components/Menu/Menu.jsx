import React from 'react';
import { useState } from 'react';
import Pizza from './Pizza/Pizza';
import navPizza from '../../assets/navPizza.svg';
import navDesserts from '../../assets/navPostre.svg';
import navPatty from '../../assets/navEmpanadillas.svg';
import navDrinks from '../../assets/navDrinks.svg';
import logoMenu from '../../assets/logoparacarta.svg';
import Patty from './Patty/Patty';
import Desserts from './Desserts/Desserts';
import {CgCloseO} from 'react-icons/cg';
import './Menu.scss';

const Menu = () => {
    const [showItems, setShowItems] = useState('pizza');
//menu__nav__items-item-selected
const test = ``
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
                    <div className={(showItems === 'pizza') ? 'menu__nav__items-item-selected' : 'menu__nav__items-item'} onClick={() =>{setShowItems('pizza')}}>
                        <img src={navPizza} alt='Pizza logo'></img>
                        Pizzas
                    </div>
                    <div className={(showItems === 'patty') ? 'menu__nav__items-item-selected' : 'menu__nav__items-item'}  onClick={() =>{setShowItems('patty')}}>
                        <img src={navPatty} alt='Empanadas logo'></img>
                        Empanadas
                    </div>
                    <div className={(showItems === 'desserts') ? 'menu__nav__items-item-selected' : 'menu__nav__items-item'} onClick={() =>{setShowItems('desserts')}}>
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
                {showItems.length >1 &&
                <span className='menu__foodmenu-close' onClick={() =>{setShowItems('')}}> <CgCloseO /></span>
                }
                
                {showItems === 'pizza' &&
                <div className='menu__foodmenu-pizza'>
                    <Pizza />
                </div>
                }
                {showItems === 'patty' &&
                <div className='menu__foodmenu-patty'>
                    <Patty />
                </div>
                }
                {showItems === 'desserts' &&
                <div className='menu__foodmenu-desserts'>
                    <Desserts />
                </div>
                }
            </div>
        </div>
    )
}

export default Menu;