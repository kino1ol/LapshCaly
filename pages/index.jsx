import Header from "../components/Header/Header.jsx";
import style from '../styles/home.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import box from '../public/mainPage/korobochka.webp'
import gezdaBig from '../public/mainPage/gezdaBig.webp'
import gezdaLittle from '../public/mainPage/gezdaLittleSmall.webp'
import gezdaSmall from '../public/mainPage/gezdaSmall.webp'
import gezda from '../public/mainPage/gezda.webp'
import ramen from '../public/mainPage/Ramen.webp'
import wok from '../public/mainPage/wok.webp'
import drinks from '../public/mainPage/beverages.webp'


const Home = () => {

    return (
        <main className={`${style.main} _page`}>
            <Header/>
            <section className={style.main_section}>
                <Link href={'/box'}>
                    <div className={style.main_ownBox}>
                        <h2>
                            Собери свою коробочку
                        </h2>
                        <div className={style.main_ownBox__img}>
                            <Image
                                src={box}
                                placeholder={"blur"}
                                alt={'box'}
                            />
                        </div>
                    </div>
                </Link>
                <Link href={'/gezda'}>
                    <div className={style.main_gezda}>
                        <h2>
                            гёдза
                        </h2>
                        <div className={style.main_gezda__gezdaMain}>
                            <Image
                                src={gezda}
                                placeholder={"blur"}
                                alt={'box'}
                            />
                        </div>
                        <div className={style.main_gezda__gezdaBig}>
                            <Image
                                src={gezdaBig}
                                placeholder={"blur"}
                                alt={'box'}
                            />
                        </div>
                        <div className={style.main_gezda__gezdaLittle}>
                            <Image
                                src={gezdaLittle}
                                placeholder={"blur"}
                                alt={'box'}
                            />
                        </div>
                        <div className={style.main_gezda__gezdaSmall}>
                            <Image
                                src={gezdaSmall}
                                placeholder={"blur"}
                                alt={'box'}
                            />
                        </div>
                    </div>
                </Link>
                <Link href={'/ramen'}>
                    <div className={style.main_ramen}>
                        <h2>
                            Рамен
                        </h2>
                        <div className={style.main_ramen__img}>
                            <Image
                                src={ramen}
                                placeholder={"blur"}
                                alt={'box'}
                            />
                        </div>
                    </div>
                </Link>
                <Link href={'/wok'}>
                    <div className={style.main_wok}>
                        <h2>
                            WOK
                        </h2>
                        <div className={style.main_wok__img}>
                            <Image
                                src={wok}
                                placeholder={"blur"}
                                alt={'box'}
                            />
                        </div>
                    </div>
                </Link>
                <Link href={'/drinks'}>
                    <div className={style.main_drinks}>
                        <h2>
                            Напитки
                        </h2>
                        <div className={style.main_drinks__img}>
                            <Image
                                src={drinks}
                                placeholder={"blur"}
                                alt={'box'}
                            />
                        </div>
                    </div>
                </Link>
            </section>
        </main>
    );
};

export default Home;