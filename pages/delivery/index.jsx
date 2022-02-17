import Contact from "../contact";

const Delivery = () => {
    return (
        <div>
            <Contact
                h3={<h3>Доставка</h3>}
                h4={<h4>Доставка с 10:00 до 3:00<br/>
                Бесплатная доставка при заказе от 15 BYN<br/>
                    При заказе до 15 BYN доставка стоит 3 BYN</h4>}
            />
        </div>
    );
};

export default Delivery;