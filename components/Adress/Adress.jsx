import style from '../../styles/components/Adress.module.scss'

const Adress = () => {
    return (
        <div className={style.adress}>
            <div className={style.adress__city}>
                <h4>
                    г. Витебск
                </h4>
            </div>
            <div className={style.adress__time}>
                <h4>
                    пн-вс:<br/>
                    09:00–03:00
                </h4>
            </div>
        </div>
    );
};

export default Adress;