import Page from "../../components/Page/Page";
import CardProduct from "../../components/CardProduct/CardProduct.jsx";
import ramenSmall from '../../public/ramen/ramenASmallPortion.webp'
import ramenBig from '../../public/ramen/ramenABigPortion.webp'

const Ramen = () => {


    return (
        <Page>
            <div className={'_products_items'}>
                <CardProduct
                    infoProduct={{
                        img: ramenSmall,
                        name: 'Рамен (маленькая порция)',
                        title: 'Лапша, бульон говяжий, золотистая курочка, нори, яйцо, лук порей, кунжут',
                        price: 4.90,
                        weight: 400
                    }}
                />
                <CardProduct
                    infoProduct={{
                        img: ramenBig,
                        name: 'Рамен (большая порция)',
                        title: 'Лапша, бульон говяжий, золотистая курочка, нори, яйцо, лук порей, кунжут',
                        price: 6.90,
                        weight: 700
                    }}
                />
            </div>
        </Page>
    );
};

export default Ramen;