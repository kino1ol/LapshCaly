import '../styles/global.scss'
import reducerCart from "../cart/reducerCart";
import {ContextCart} from "../cart/contextCart";
import {useEffect, useReducer} from "react";

export default function MyApp({ Component, pageProps }) {
    const [state, dispatch] = useReducer(reducerCart, [])



    return (
        <ContextCart.Provider value={{state, dispatch}}>
            <Component {...pageProps} />
        </ContextCart.Provider>
    )
}