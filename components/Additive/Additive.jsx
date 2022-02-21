import style from '../../styles/components/Additive.module.scss'

const Additive = ({totalPrice, setTotalPrice,setChecked,name, weight, pricePlus}) => {

    return (
        <div className={`${style.additive}`}>
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
                    +{pricePlus}0 р.
                </p>
            </div>
            <div onClick={(e) => {
                if (e.target.classList.contains(style.additive__checkbox_checked)) {
                    e.target.classList.remove(style.additive__checkbox_checked)
                    document.querySelectorAll(`.${style.additive__checkbox_checked}`).length === 0 ?
                        setChecked(false) : null
                    totalPrice && setTotalPrice(+(totalPrice - pricePlus).toFixed(1))
                } else {
                    e.target.classList.add(style.additive__checkbox_checked)
                    setTotalPrice && setTotalPrice(+(totalPrice + pricePlus).toFixed(1))
                    setChecked(true)
                }
            }}
                className={style.additive__checkbox}
                 props={[name, weight, pricePlus]}
            >
            </div>
        </div>
    );
};

export default Additive;