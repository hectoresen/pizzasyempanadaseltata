import { createContext, useState } from "react";

export const PaymenMethodContext = createContext();

export const PaymentMethodProvider = ({children}) => {
    const [paymentMethods, setPaymentmethods] = useState('Método de pago');

    return(
        <PaymenMethodContext.Provider value = {[paymentMethods, setPaymentmethods]}>
            {children}
        </PaymenMethodContext.Provider>
    )
}