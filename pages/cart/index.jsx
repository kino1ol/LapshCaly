import Page from "../../components/Page/Page";
import style from '../../styles/pages/cart.module.scss'
import {useContext, useEffect, useState} from "react";
import {ContextCart} from "../../cart/contextCart";
import Basket from "../../components/Basket/Basket.jsx";
import SendOrderPop from "../../components/SendOrderPop/SendOrderPop.jsx";

const PageCart = () => {
    const [isDelivery, setDelivery] = useState(false)
    const [containsProduct, setContainsProduct] = useState(false)
    const [isOpenOrderPop, setOrderPop] = useState(false)
    const cart = useContext(ContextCart)
    const productsInCart = cart.state[0] !== undefined ?
        cart.state.map(el => <Basket infoProduct={el}/>) : []

    useEffect(() => {

        if (productsInCart.length > 2) {
            document.querySelector(`.${style.items_products}`)
                .classList.add(style.items_products_scroll_true)
        } else {
            document.querySelector(`.${style.items_products}`)
                .classList.remove(style.items_products_scroll_true)
        }

        cart.state.length > 0 ? setContainsProduct(true) : setContainsProduct(false)

    }, [cart.state])


    return (
        <Page>
            <div className={style.items}>
                <div className={style.items_products}>
                    {productsInCart}
                </div>
                <div className={style.items_panelBooking}>
                    <div className={style.items_panelBooking__delivery}>
                        <button
                            className={isDelivery ? style.items_panelBooking__delivery_active : null}
                            onClick={() => setDelivery(false)}
                        >
                            Курьер
                        </button>
                        <button
                            className={!isDelivery ? style.items_panelBooking__delivery_active : null}
                            onClick={() => setDelivery(true)}
                        >
                            Самовывоз
                        </button>
                    </div>
                    <div className={style.items_panelBooking_releaseBooking}>
                        <div className={style.items_panelBooking__totalPrice}>
                            <h4>К оплате:</h4>
                            <h3>
                                {cart.state.length !== 0 ? cart.state.reduce((acc, el) => {
                                return +(el.totalPrice + acc).toFixed(1)
                            }, 0) : 0} р.
                            </h3>
                        </div>
                        <button
                            className={!containsProduct ? style.items_panelBooking__btn_unActive : null}
                            onClick={() => setOrderPop(true)}
                        >
                            Оформить заказ
                        </button>
                    </div>
                </div>
                {isOpenOrderPop && cart.state.length !== 0 &&
                    <SendOrderPop setOrderPop={setOrderPop}/>
                }
            </div>
        </Page>
    );
};

export default PageCart;