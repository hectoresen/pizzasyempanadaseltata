import React from 'react';
import logoMenu from '../../assets/logoparacarta.svg';
import './Menu.scss';

const Menu = () => {
    return (
        <div className='menu'>
            <div className='menu__header'>
                <hr />
                <div className='menu__header-logo'><img src={logoMenu} alt="Logo Carta" /></div>
                <hr />
            </div>
        </div>
    )
}

export default Menu;