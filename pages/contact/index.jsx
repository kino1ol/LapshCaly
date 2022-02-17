import style from '../../styles/pages/contact.module.scss'
import Header from "../../components/Header/Header.jsx";
import {Map, Placemark, YMaps} from "react-yandex-maps";

const Contact = ({h3, h4}) => {
    const mapData = {
        center: [55.205682, 30.208205],
        zoom: 16,
    };

    const coordinates = [
        [55.205682, 30.208205]
    ];

    const viewNamePage = () => {
        return h3 !== undefined
            ? h3
            : <h3>Контакты</h3>
    }

    const viewTime = () => {
        return h4 !== undefined
            ? h4
            : <h4>Время работы:<br/> ПН-ВС 09:00 - 03:00</h4>
    }

    return (
        <main className={`${style.main} _page`}>
            <Header/>
            <section>
                <div className={`_container`}>
                    <div className={`${style.main_items} _lessContainer`}>
                        {viewNamePage()}
                        <div className={style.main_items__timePhone}>
                            {viewTime()}
                            <h4>
                                Телефон:<br/>
                                +375 (29) 2-368-368
                            </h4>
                        </div>
                        <div className={style.main_items_map}>
                            <h4>
                                г.Витебск, ул. 1-я Краснобригадная, 1/2
                            </h4>
                            <YMaps preload={true}>
                                <Map
                                    className={style.main_items_map__map}
                                    defaultState={mapData}
                                >
                                    {coordinates
                                        .map(coordinate => <Placemark geometry={coordinate} />)
                                    }
                                </Map>
                            </YMaps>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Contact;