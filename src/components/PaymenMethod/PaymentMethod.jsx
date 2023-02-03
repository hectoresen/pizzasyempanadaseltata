import React, { useContext } from 'react'
import { Dropdown } from "@nextui-org/react";
import { CreditCardIcon, CashIcon } from './icon-methods';
import { PaymenMethodContext } from '../../context/payment-method';
import './PaymentMethod.scss';

const PaymentMethod = () => {
    const [paymentMethods, setPaymentmethods] = useContext(PaymenMethodContext)

    return (
        <div className='paymentmethod'>
            <Dropdown>
                <Dropdown.Button flat color="secondary">
                    {paymentMethods}
                </Dropdown.Button>
                <Dropdown.Menu
                    color="secondary"
                    aria-label="Single selection actions"
                    selectionMode="single"
                    onSelectionChange={(data) => {setPaymentmethods(data.currentKey)}}
                    css={{ $$dropdownMenuWidth: "200px" }}>
                        <Dropdown.Item
                            key="Tarjeta de crédito"
                            description='Tarjeta de crédito'
                            icon={<CreditCardIcon size={22} fill="var(--nextui-colors-secondary)" />}
                        >
                            Tarjeta de crédito
                        </Dropdown.Item>
                        <Dropdown.Item
                            key="Efectivo"
                            description='Efectivo'
                            icon={<CashIcon size={22} fill="var(--nextui-colors-secondary)" />}
                        >
                            Efectivo
                        </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>

    )
}

export default PaymentMethod