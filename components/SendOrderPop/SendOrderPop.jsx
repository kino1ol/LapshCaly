import style from '../../styles/components/SendOrderPop.module.scss'
import Image from "next/image";
import cross from '../../public/icons/Plus.png'
import cash from '../../public/icons/cash.png'
import card from '../../public/icons/card.png'
import {changeFormPay, changeIntercomAnswer, sendOrder} from "./SendOrderPop.js";
import NumberFormat from 'react-number-format';
import {useContext, useState} from "react";
import {ContextCart} from "../../cart/contextCart";

const SendOrderPop = ({setOrderPop}) => {
    const cart = useContext(ContextCart);
    const [isOrderSended, setOrderSended] = useState(false)



    return (
        <div className={style.main}>
            <div className={style.container}>
                <div className={style.items}>
                    <input placeholder={'Имя'}/>
                    <NumberFormat placeholder={'Телефон'} format={'+375(##)###-##-##'} type={"tel"}/>
                    <input placeholder={'Улица'}/>
                    <div className={style.inputBlock}>
                        <NumberFormat placeholder={'Дом'}/>
                        <input placeholder={'Корпус'}/>
                        <NumberFormat placeholder={'Квартира'}/>
                    </div>
                    <div className={style.intercom}>
                        <h4>Домофон</h4>
                        <div className={style.intercom_answer}>
                            <div className={style.intercom_item}>
                                <div
                                    className={`${style.intercom__checkbox_active} ${style.intercom__checkbox}`}
                                    onClick={changeIntercomAnswer}
                                >
                                </div>
                                <p>Да</p>
                            </div>
                            <div className={style.intercom_item}>
                                <div
                                    className={style.intercom__checkbox}
                                    onClick={changeIntercomAnswer}
                                >
                                </div>
                                <p>Нет</p>
                            </div>
                        </div>
                    </div>
                    <div className={style.comment}>
                        <textarea placeholder={'Комментарий'}/>
                    </div>
                    <div className={style.formPay}>
                        <h4>
                            Форма оплаты
                        </h4>
                        <div className={`${style.formPay_item} ${style.formPay_item_active}`}
                             onClick={changeFormPay}
                        >
                            <Image
                                src={cash}
                                alt={'cash'}
                                placeholder={"blur"}
                            />
                            <p>
                                Наличными курьеру
                            </p>
                        </div>
                        <div className={style.formPay_item}
                             onClick={changeFormPay}
                        >
                            <Image
                                src={card}
                                alt={'card'}
                                placeholder={"blur"}
                            />
                            <p>
                                Картой курьеру
                            </p>
                        </div>
                    </div>
                    <div className={style.btn}>
                        <button onClick={sendOrder.bind(cart, setOrderPop, setOrderSended)}>
                            Заказать
                        </button>
                    </div>
                </div>
            </div>
            <div
                className={style.main__cross}
                onClick={() => setOrderPop(false)}
            >
                <Image
                    src={cross}
                    alt={'cross'}
                    placeholder={"blur"}
                    className={style.main__cross}
                />
            </div>
            {isOrderSended &&
                <div className={style.main}>
                    Заявка отправлена
                </div>
            }
        </div>
    );
};

export default SendOrderPop;