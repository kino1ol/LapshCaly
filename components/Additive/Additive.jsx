import style from '../../styles/components/Additive.module.scss'

const Additive = ({name, weight, pricePlus, className}) => {
    return (
        <div className={`${style.additive} ${style[className]}`}>
            <div className={style.additive__name}>
                <p>
                    {name}
                </p>
            </div>
            <div className={style.additive__weight}>
                <p>
                    {weight} г
                </p>
            </div>
            <div className={style.additive__pricePlus}>
                <p>
                    +{pricePlus} р.
                </p>
            </div>
            <div className={style.additive__radioBtn}>
                <input type={"checkbox"}/>
            </div>
        </div>
    );
};

export default Additive;