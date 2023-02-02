import { createContext, useState } from "react";

export const CountCartItemsContext = createContext();

export const CountCartItemsProvider = ({children}) => {
    const [items, setItems] = useState(0);
    const [handleItems, setHandleItems] = useState(false);

    return(
        <CountCartItemsContext.Provider value = {[items, setItems]}>
            {children}
        </CountCartItemsContext.Provider>
    )
}