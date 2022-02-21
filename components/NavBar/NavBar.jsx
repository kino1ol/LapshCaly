import style from '../../styles/components/NavBar.module.scss'
import Link from 'next/link'
import {useRouter} from "next/router";

const NavBar = () => {
    const {pathname} = useRouter();

    return (
        <nav className={style.navBar}>
            <ul className={style.navBar_items}>
                <li className={pathname !== '/ramen'
                ? style.navBar__item
                    : style.navBar__item_active}
                >
                    <Link href={'/ramen'}>
                        Рамен
                    </Link>
                </li>
                <li className={pathname !== '/wok'
                    ? style.navBar__item
                    : style.navBar__item_active}
                >
                    <Link href={'/wok'}>
                        Wok
                    </Link>
                </li>
                <li className={pathname !== '/gezda'
                    ? style.navBar__item
                    : style.navBar__item_active}
                >
                    <Link href={'/gezda'}>
                        Гёдза
                    </Link>
                </li>
                <li className={pathname !== '/box'
                    ? style.navBar__item
                    : style.navBar__item_active}
                >
                    <Link href={'/box'}>
                        Собери свою коробочку
                    </Link>
                </li>
                <li className={pathname !== '/drinks'
                    ? style.navBar__item
                    : style.navBar__item_active}
                >
                    <Link href={'/drinks'}>
                        Bar menu
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;