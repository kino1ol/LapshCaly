import style from '../../styles/components/SendOrderPop.module.scss'
import Image from "next/image";
import cross from '../../public/icons/Plus.png'
import cash from '../../public/icons/cash.png'
import card from '../../public/icons/card.png'

const SendOrderPop = ({setOrderPop}) => {
    return (
        <div className={style.main}>
            <div className={style.container}>
                <div className={style.items}>
                    <input placeholder={'Имя'}/>
                    <input placeholder={'Телефон'}/>
                    <input placeholder={'Улица'}/>
                    <div className={style.inputBlock}>
                        <input placeholder={'Дом'}/>
                        <input placeholder={'Корпус'}/>
                        <input placeholder={'Квартира'}/>
                    </div>
                    <div className={style.intercom}>
                        <h4>Домофон</h4>
                        <div className={style.intercom_answer}>
                            <div className={style.intercom_item}>
                                <div className={style.intercom__checkbox}>
                                </div>
                                <p>Да</p>
                            </div>
                            <div className={style.intercom_item}>
                                <div className={style.intercom__checkbox}>
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
                        <div className={style.formPay_cash}>
                            <Image
                                src={cash}
                                alt={'cash'}
                                placeholder={"blur"}
                            />
                            <p>
                                Наличными курьеру
                            </p>
                        </div>
                        <div className={style.formPay_card}>
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
                        <button>
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
        </div>
    );
};

export default SendOrderPop;