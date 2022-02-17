import {useContext} from "react";
import add from '../../public/icons/add.png'
import style from '../../styles/components/CardProduct.module.scss'

const CardProduct = (infoProduct) => {
    const {img, name, title, price, weight} = infoProduct
    const cart = useContext(ContextCart)

    openPopAdditivesAndAddCart.bind(this, cart)

    return (
        <div className={style.cardProduct}>
            <div className={style.cardProduct__container}>
                <div className={style.cardProduct__picture}>
                    <img src={img} alt={name}/>
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
                                {weight}
                            </p>
                        </div>
                    </div>
                    <div className={style.priceAdd}>
                        <div className={`${style.priceAdd__price} ${style.price_total}`}>
                            {price} р.
                        </div>
                        <div className={`${style.priceAdd__add}`}>
                            <img
                                onClick={openPopAdditivesAndAddCart}
                                src={add}
                                alt='add'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardProduct;