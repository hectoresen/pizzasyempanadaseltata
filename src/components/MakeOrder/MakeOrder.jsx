import React from 'react';
import makeOrderQr from '../../assets/makeorderqr.svg';
import './MakeOrder.scss';

const MakeOrder = () => {
  return (
    <div className='makeorder'>
        <div className='makeorder__qr'>
            <img src={makeOrderQr} alt='qrorder'></img>
        </div>
    </div>
  )
}

export default MakeOrder;