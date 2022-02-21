import Page from "../../components/Page/Page";
import CardProduct from "../../components/CardProduct/CardProduct.jsx";
import drinks from '../../public/barMenu/kompot.webp'

const Drinks = () => {
    return (
        <Page>
            <div className={'_products_items'}>
                <CardProduct
                    infoProduct={{
                        img: drinks,
                        name: 'Морс',
                        title: 'Ягоды, вода, сахар',
                        price: 1.90,
                        weight: 300
                    }}
                    ml={true}
                />
                <CardProduct
                    infoProduct={{
                        img: drinks,
                        name: 'Компот',
                        title: 'Сухофрукты, вода, сахар, лимонная кислота',
                        price: 1.90,
                        weight: 300
                    }}
                    ml={true}
                />
            </div>
        </Page>
    );
};

export default Drinks;