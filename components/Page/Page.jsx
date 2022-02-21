import style from '../../styles/components/Page.module.scss'
import Header from "../../components/Header/Header.jsx";
import NavBar from "../../components/NavBar/NavBar.jsx";
import {useRouter} from "next/router";
import {useBeforeunload} from "react-beforeunload";
import {useContext} from "react";
import {ContextCart} from "../../cart/contextCart";

const Page = ({children}) => {
    const {pathname} = useRouter();
    const cart = useContext(ContextCart)

    useBeforeunload(() => {
        localStorage.setItem('cartState', JSON.stringify(cart.state))
    })

    return (
        <main onLoad={() => {
            if (localStorage.getItem('cartState') !== null && cart.state.length === 0) {
                cart.dispatch({type: 'localStorage', payload: JSON.parse(localStorage.getItem('cartState'))})
            }
        }}
              className={`_page`}
        >
            <Header/>
            <section>
                <div className={`${style.container} _container`}>
                    {pathname !== '/cart' &&
                        <NavBar/>
                    }
                    {children}
                </div>
            </section>
        </main>
    );
};

export default Page;