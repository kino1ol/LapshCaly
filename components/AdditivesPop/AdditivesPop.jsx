import cross from '../../public/icons/Plus.png'
import Additive from "../Additive/Additive";
import style from '../../styles/components/AdditivesPop.module.scss'
import Image from 'next/image'
import {closePopAdditives, addAdditivesInProduct} from "./AdditivesPop.js";
import {useContext, useRef, useState} from "react";
import {ContextCart} from "../../cart/contextCart";

const AdditivesPop = ({name}) => {
    const cart = useContext(ContextCart)
    const [isChecked, setChecked] = useState(false)
    const ref = useRef()


    return (
        <div ref={ref} className={`${style.additivesPop} ${style.additivesPop_visible_false}`}>
            <div className={style.additivesPop__container}>
                <div className={style.additivesPop__name}>
                    <h4>
                        Добавить
                    </h4>
                </div>
                <div className={style.additivesPop__items}>
                    <Additive setChecked={setChecked} name={'Кукуруза'} pricePlus={0.90} weight={30}/>
                    <Additive setChecked={setChecked} name={'Грибы “Шиитаке”'} pricePlus={1.30} weight={30}/>
                    <Additive setChecked={setChecked} name={'Бекон'} pricePlus={1.90} weight={30}/>
                    <Additive setChecked={setChecked} name={'Креветки тигровые'} pricePlus={7.50} weight={30}/>
                    <Additive setChecked={setChecked} name={'Бобы'} pricePlus={1.50} weight={30}/>
                    <Additive setChecked={setChecked} name={'Чили'} pricePlus={0} weight={1}/>
                </div>
                <div className={style.additivesPop__btn}>
                    <button
                        className={isChecked ? null : style.additivesPop__btn_noActive}
                        onClick={addAdditivesInProduct.bind(cart, name, isChecked)}
                    >
                        В корзину
                    </button>
                </div>
            </div>
            <div className={style.additivesPop__cross}>
                <Image
                    onClick={closePopAdditives}
                    src={cross}
                    alt={'cross'}
                />
            </div>
        </div>
    );
};

export default AdditivesPop;