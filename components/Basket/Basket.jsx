import style from '../../styles/components/Basket.module.scss'

const Basket = ({img, name, title, price}) => {
    return (
        <div key={name} className={style.basket}>
            <img src={img} alt={name}/>
            <div className={style.basket_items}>
                <div className={style.basket_title}>
                    <h4>
                        {name}
                    </h4>
                    <p>
                        {title}
                    </p>
                </div>
                <div className={style.basket_price}>

                </div>
            </div>
        </div>
    );
};

export default Basket;