import {useContext, useEffect, useState} from "react";
import add from '../../public/icons/add.png'
import style from '../../styles/components/CardProduct.module.scss'
import {ContextCart} from "../../cart/contextCart";
import openPopAdditivesAndAddCart from './CardProduct.js'
import Image from 'next/image'
import AdditivesPop from "../AdditivesPop/AdditivesPop.jsx";
import {useRouter} from "next/router";


const CardProduct = ({infoProduct, ml}) => {
    const {img, name, title, price, weight} = infoProduct
    const {pathname} = useRouter();
    const cart = useContext(ContextCart)
    const [isAddInCart, setAddInCart] = useState(false)

    useEffect(() => {
        let containsInCart = false

        cart.state[0] !== undefined && cart.state.forEach(el => {
            if (el.name === name) {
                containsInCart = true
            }
        })

        if (containsInCart) {
            setAddInCart(true)
        } else {
            setAddInCart(false)
        }


    }, [cart.state.length])

    return (
        <div className={style.cardProduct}>
            <div className={style.cardProduct__container}>
                <div className={style.cardProduct__picture}>
                    <Image
                        layout={"responsive"}
                        src={img}
                        alt={'cardImg'}
                        placeholder={"blur"}
                    />
                </div>
                <div className={style.cardProduct__items}>
                    <div className={style.description}>
                        <div className={style.description__name}>
                            <h4>
                                {name}
                            </h4>
                        </div>
                        <div className={style.description__title}>
                            <p>
                                {title}
                            </p>
                        </div>
                        <div className={style.description__weight}>
                            <p>
                                {weight} {ml !== undefined ? 'мл' : 'г'}
                            </p>
                        </div>
                    </div>
                    <div className={style.priceAdd}>
                        <div className={`${style.priceAdd__price} price_total`}>
                            {price} р.
                        </div>
                        <div className={`${style.priceAdd__add}`}>
                            {!isAddInCart &&
                            <Image
                                onClick={openPopAdditivesAndAddCart.bind(infoProduct, cart)}
                                src={add}
                                alt={'add'}
                                placeholder={"blur"}
                            />
                            }
                            {isAddInCart &&
                                'В Корзине'
                            }
                        </div>
                    </div>
                </div>
            </div>
            {pathname !== '/drinks' &&
                <AdditivesPop name={name}/>
            }
        </div>
    );
};

export default CardProduct;