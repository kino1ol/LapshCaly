import style from '../../styles/components/Basket.module.scss'
import Image from "next/image";
import cross from '../../public/icons/Plus.png'
import {useContext, useEffect, useState} from "react";
import {ContextCart} from "../../cart/contextCart";
import deleteProductFromCart from "./Basket";

const Basket = ({infoProduct}) => {
    const {img, name, title, weight, price, totalPrice} = infoProduct
    const cart = useContext(ContextCart)
    const [numberProduct, setNumberProduct] = useState(1)

    useEffect(() => {

        if (numberProduct < 1) {
            setNumberProduct(1)
        }

        cart.dispatch({type: 'changeNumberProduct', payload: [name, numberProduct]})

    }, [numberProduct])

    return (
        <div key={name} className={`${style.basket}`}>
            <Image
                src={img}
                placeholder={"blur"}
                alt={'cardProduct'}
            />
            <div className={style.basket_items}>
                <div className={style.basket_title}>
                    <h4>
                        {name}
                    </h4>
                    <p>
                        {title.join(', ')}
                    </p>
                    <p>
                        {weight} г
                    </p>
                </div>
                <div className={style.basket_pricePanel}>
                    <div className={style.basket_pricePanel__price}>
                        {price} р.
                    </div>
                    <div className={style.basket_pricePanel_number}>
                        <div
                            className={style.basket_pricePanel_number__minus}
                            onClick={() => setNumberProduct(numberProduct - 1)}
                        >
                            −
                        </div>
                        <div className={style.basket_pricePanel_number__product}>
                            {numberProduct}
                        </div>
                        <div
                            className={style.basket_pricePanel_number__plus}
                            onClick={() => setNumberProduct(numberProduct + 1)}
                        >
                            +
                        </div>
                    </div>
                    <div className={`${style.basket_pricePanel__totalPrice} price_total`}>
                        {totalPrice} р.
                    </div>
                </div>
                <div className={style.basket__cross}>
                    <Image
                        src={cross}
                        placeholder={"blur"}
                        alt={'cross'}
                        onClick={deleteProductFromCart.bind(name, cart)}
                    />
                </div>
            </div>
        </div>
    );
};

export default Basket;