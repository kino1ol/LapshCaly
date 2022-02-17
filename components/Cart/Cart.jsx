import Link from "next/link";
import Image from "next/image";
import cart from "../../public/icons/Buy.png";
import style from '../../styles/components/Cart.module.scss'

const Cart = () => {
    return (
        <div className={style.cart}>
            <Link href={'/cart'}>
                <Image
                    src={cart}
                    alt={'cart'}
                    className={style.cart__icon}
                    placeholder={'blur'}
                />
            </Link>
        </div>
    );
};

export default Cart;