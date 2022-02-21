import Link from "next/link";
import Image from "next/image";
import cartPng from "../../public/icons/Buy.png";
import style from '../../styles/components/Cart.module.scss'
import {useContext, useEffect, useState} from "react";
import {ContextCart} from "../../cart/contextCart";

const Cart = () => {
    const cart = useContext(ContextCart)
    const [numberProducts, setNumberProducts] = useState(cart.state.length)

    useEffect(() => {

        setNumberProducts(cart.state.length)
    }, [cart.state.length])

    return (
        <div className={style.cart}>
            <Link href={'/cart'}>
                <Image
                    src={cartPng}
                    alt={'cart'}
                    className={style.cart__icon}
                    placeholder={'blur'}
                />
            </Link>
            {numberProducts > 0 &&
            <div className={style.cart__numberProducts}>
                {numberProducts}
            </div>
            }
        </div>
    );
};

export default Cart;