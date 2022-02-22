import style from '../../styles/components/Burger.module.scss'
import Image from "next/image";
import burgerPNG from '../../public/icons/burger.png'
import crossPNG from '../../public/icons/Plus.png'
import Logo from "../Logo/Logo.jsx";
import Adress from "../Adress/Adress.jsx";
import NavMenu from "../NavMenu/NavMenu.jsx";

const Burger = () => {
    return (
        <div className={style.burger}>
            <Image src={burgerPNG}/>
            <div className={style.page}>
                <Image src={crossPNG}/>
                <Logo/>
                <Adress/>
                <NavMenu/>
            </div>
        </div>
    );
};

export default Burger;