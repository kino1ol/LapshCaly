import Link from 'next/link'
import Image from 'next/image'
import logo from '/public/logo.webp'
import style from  '../../styles/components/Logo.module.scss'

const Logo = () => {
    return (
        <div className={style.logo}>
            <Link href={'/'}>
                <Image
                    src={logo}
                    alt={'logo'}
                    placeholder={"blur"}
                />
            </Link>
        </div>
    );
};

export default Logo;