import Page from "../../components/Page/Page";
import CardProduct from "../../components/CardProduct/CardProduct.jsx";
import wok1 from '../../public/wok/wok1.webp'
import wok2 from '../../public/wok/wok2.webp'
import wok3 from '../../public/wok/wok3.webp'
import wok4 from '../../public/wok/wok4.webp'
import wok5 from '../../public/wok/wok5.webp'

const Wok = () => {
    return (
        <Page>
            <div className={'_products_items'}>
                <CardProduct
                    infoProduct={{
                        img: wok1,
                        name: 'Wok №1',
                        title: 'Лапша, колбаски «Охотничьи», фасоль, морковь, красный лук, соус «Кисло-сладкий»',
                        price: 6.90,
                        weight: 300
                    }}
                />
                <CardProduct
                    infoProduct={{
                        img: wok2,
                        name: 'Wok №2',
                        title: 'Лапша, бекон, ветчина, грибы, лук-порей, сыр«Пармезан», соус «Сливочно-чесночный»',
                        price: 7.90,
                        weight: 300
                    }}
                />
                <CardProduct
                    infoProduct={{
                        img: wok3,
                        name: 'Wok №3',
                        title: 'Лапша, куриные сердечки, морковь, перец болгарский, лук-порей, соус «Терияки»',
                        price: 7.50,
                        weight: 300
                    }}
                />
                <CardProduct
                    infoProduct={{
                        img: wok4,
                        name: 'Wok №4',
                        title: 'Лапша, японский омлет, тамаго, фасоль, кукуруза, грибы «Шиитаке», красный лук, соус «Кисло-сладкий»',
                        price: 6.90,
                        weight: 300
                    }}
                />
                <CardProduct
                    infoProduct={{
                        img: wok5,
                        name: 'Wok №5',
                        title: 'Лапша, филе куриное, морковь, грибы, красный лук, сыр «Пармезан», соус «Карри» фирменный',
                        price: 7.90,
                        weight: 300
                    }}
                />
            </div>
        </Page>
    );
};

export default Wok;