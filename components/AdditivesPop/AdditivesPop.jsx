import cross from '../../public/icons/Plus.png'
import Additive from "../Additive/Additive";
import style from '../../styles/components/AdditivesPop.module.scss'

const AdditivesPop = () => {
    return (
        <div className={`${style.stadditivesPop} ${style.additivesPop_visible_false}`}>
            <div className={style.additivesPop__container}>
                <div className={style.additivesPop__name}>
                    <h4>
                        Добавить
                    </h4>
                </div>
                <div className={style.additivesPop__items}>
                    <Additive className={'additivePop'} name={'Кукуруза'} pricePlus={0.90} weight={30}/>
                    <Additive className={'additivePop'} name={'Грибы “Шиитаке”'} pricePlus={1.30} weight={30}/>
                    <Additive className={'additivePop'} name={'Бекон'} pricePlus={1.90} weight={30}/>
                    <Additive className={'additivePop'} name={'Креветки тигровые'} pricePlus={7.50} weight={30}/>
                    <Additive className={'additivePop'} name={'Бобы'} pricePlus={1.50} weight={30}/>
                    <Additive className={'additivePop'} name={'Чили'} pricePlus={0} weight={1}/>
                </div>
                <div className={style.additivesPop__btn}>
                    <button>
                        В корзину
                    </button>
                </div>
            </div>
            <div className={style.additivesPop__cross}>
                <img
                    onClick={closePopAdditives}
                    src={cross}
                    alt={'cross'}
                />
            </div>
        </div>
    );
};

export default AdditivesPop;