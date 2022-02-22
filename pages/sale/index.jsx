import style from '../../styles/pages/sale.module.scss'
import Header from "../../components/Header/Header.jsx";
import Image from "next/image";
import sale1 from '../../public/sale/sale1.webp'
import sale1mobile from '../../public/sale/sale1mob.png'

const Sale = () => {
    return (
        <main className={`${style.main} _page`}>
            <Header/>
            <section className={style.main_section}>
                <div className={`${style.main_container} _container`}>
                    <h3>
                        Акции
                    </h3>
                    <div className={style.main_items}>
                        <div className={style.main_items__sale1}>
                            <div className={'desktopImg'}>
                                <Image
                                    src={sale1}
                                    alt={'sale1'}
                                    placeholder={"blur"}
                                />
                            </div>
                            <div className={'mobileImg'}>
                                <Image
                                    className={'mobileImg'}
                                    src={sale1mobile}
                                    alt={'sale1'}
                                    placeholder={"blur"}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Sale;