import Page from "../../components/Page/Page";
import CardProduct from "../../components/CardProduct/CardProduct.jsx";
import gezda from "../../public/gezda/gezda.webp";

const Gezda = () => {
    return (
        <Page>
            <div className={'_products_items'}>
                <CardProduct
                    infoProduct={{
                        img: gezda,
                        name: 'Гёдза',
                        title: 'Фарш мясной, пекинская капуста, чеснок, лук, имбирь, рисовый уксус',
                        price: 7.90,
                        weight: 300
                    }}
                />
            </div>
        </Page>
    );
};

export default Gezda;