import style from "../../styles/components/Box.module.scss";
import Image from "next/image";
import box from "../../public/ownBox/box.webp";
import Additive from "../Additive/Additive";
import {useContext, useEffect, useState} from "react";
import {ContextCart} from "../../cart/contextCart";
import {addBoxInCart} from "./Box.js";

const Box = () => {
    const [isChecked, setChecked] = useState(false)
    const [totalPrice, setTotalPrice] = useState(1.90)
    const cart = useContext(ContextCart)


    return (
        <div className={style.box}>
            <div className={style.container}>
                <div className={style.assembly}>
                    <Image
                        src={box}
                        alt={'box'}s
                        placeholder={"blur"}
                    />
                    <div className={style.collection}>
                        <div className={style.collection_first}>
                            <div className={style.yourself}>
                                <h3>
                                    Собери сам <span>150 г</span>
                                </h3>
                                <div className={style.yourself_additives}>
                                    <Additive totalPrice={totalPrice} setTotalPrice={setTotalPrice} name={'Курица и овощи'} weight={100} pricePlus={3.10} setChecked={setChecked}/>
                                    <Additive totalPrice={totalPrice} setTotalPrice={setTotalPrice} name={'Овощи (морковь; перец; лук-порей)'} weight={100} pricePlus={2.20} setChecked={setChecked}/>
                                </div>
                            </div>
                            <div className={style.sauce}>
                                <h3>
                                    Соус
                                </h3>
                                <Additive totalPrice={totalPrice} setTotalPrice={setTotalPrice} name={'Соус «Сливочный»'} weight={50} pricePlus={1.90} setChecked={setChecked}/>
                                <Additive totalPrice={totalPrice} setTotalPrice={setTotalPrice} name={'Соус «Терияки»'} weight={50} pricePlus={1.90} setChecked={setChecked}/>
                                <Additive totalPrice={totalPrice} setTotalPrice={setTotalPrice} name={'Соус «Кимчи»'} weight={50} pricePlus={2.30} setChecked={setChecked}/>
                                <Additive totalPrice={totalPrice} setTotalPrice={setTotalPrice} name={'Соус «Кисло-сладкий»'} weight={50} pricePlus={1.90} setChecked={setChecked}/>
                                <Additive totalPrice={totalPrice} setTotalPrice={setTotalPrice} name={'Соус «Карри фирменный»'} weight={50} pricePlus={1.90} setChecked={setChecked}/>
                                <Additive totalPrice={totalPrice} setTotalPrice={setTotalPrice} name={'Соус «Манго-Чили»'} weight={50} pricePlus={1.90} setChecked={setChecked}/>
                            </div>
                        </div>
                        <div className={style.collection_two}>
                            <h3>
                                1,90 р.
                            </h3>
                            <div className={style.toping}>
                                <h3>
                                    Топинг
                                </h3>
                                <Additive totalPrice={totalPrice} setTotalPrice={setTotalPrice} name={'Кукуруза'} weight={30} pricePlus={0.90} setChecked={setChecked}/>
                                <Additive totalPrice={totalPrice} setTotalPrice={setTotalPrice} name={'Грибы “Шиитаке”'} weight={30} pricePlus={1.30} setChecked={setChecked}/>
                                <Additive totalPrice={totalPrice} setTotalPrice={setTotalPrice} name={'Бекон'} weight={30} pricePlus={1.90} setChecked={setChecked}/>
                                <Additive totalPrice={totalPrice} setTotalPrice={setTotalPrice} name={'Креветки тигровые'} weight={30} pricePlus={7.50} setChecked={setChecked}/>
                                <Additive totalPrice={totalPrice} setTotalPrice={setTotalPrice} name={'Бобы'} weight={30} pricePlus={1.50} setChecked={setChecked}/>
                                <Additive totalPrice={totalPrice} setTotalPrice={setTotalPrice} name={'Сыр «Пармезан»'} weight={30} pricePlus={1.80} setChecked={setChecked}/>
                                <Additive totalPrice={totalPrice} setTotalPrice={setTotalPrice} name={'Чили'} weight={1} pricePlus={0} setChecked={setChecked}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={style.panel}>
                    <div></div>
                    <div className={style.panel_add}>
                        <div className={'price_total'}>
                            {totalPrice} р.
                        </div>
                        <button
                            className={isChecked ? style.panel_add__btn : style.panel_add__btn_unActive}
                            onClick={addBoxInCart.bind(cart, isChecked)}
                        >
                            В корзину
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Box;