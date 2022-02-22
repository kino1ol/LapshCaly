import Link from 'next/link'
import style from '../../styles/components/NavMenu.module.scss'
import {useRouter} from "next/router";

const Menu = () => {
    const {pathname} = useRouter();

    return (
        <nav className={style.navMenu}>
            <ul className={style.navMenu_items}>
                <li className={pathname === '/sale' ? style.navMenu_link_color_active : style.navMenu_link}>
                    <Link href={'/sale'}>
                        Акция
                    </Link>
                </li>
                <li className={pathname === '/contact' ? style.navMenu_link_color_active : style.navMenu_link}>
                    <Link href={'/contact'}>
                        Контакты
                    </Link>
                </li>
                <li className={pathname === '/delivery' ? style.navMenu_link_color_active : style.navMenu_link}>
                    <Link href={'/delivery'}>
                        Доставка
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Menu;