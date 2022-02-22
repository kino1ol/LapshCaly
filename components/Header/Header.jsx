import style from '../../styles/components/Header.module.scss'
import Logo from "../Logo/Logo.jsx";
import Adress from "../Adress/Adress.jsx";
import NavMenu from "../NavMenu/NavMenu.jsx";
import Image from 'next/image'
import phone from '../../public/icons/Calling.png'
import Cart from "../Cart/Cart.jsx";
import burgerPNG from "../../public/icons/burger.png";
import crossPNG from '../../public/icons/Plus.png'
import {slide as Menu} from "react-burger-menu";



const Header = () => {

    return (
        <header className={style.header}>
            <Menu
                className={style.burger}
                customBurgerIcon={<Image src={burgerPNG}/>}
                customCrossIcon={<Image src={crossPNG}/>}
            >
                <Logo/>
                <NavMenu/>
                <Adress/>
            </Menu>
            <div className={`${style.header__container} _container`}>
                <Logo/>
                <Adress/>
                <NavMenu/>
                <div className={style.phone}>
                    <a href={'tel:+375291111111'}>
                        <Image
                            src={phone}
                            className={style.phone__icon}
                            alt={'calling'}
                        />
                    </a>
                </div>
                <Cart/>
            </div>
        </header>
    );
};

export default Header;