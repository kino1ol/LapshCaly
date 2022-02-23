const { TelegramClient } = require('messaging-api-telegram');

const client = new TelegramClient({
    accessToken: '5237645001:AAFkvG1JWm4Mc-M1mnaRgcifJAiSVm1lPzQ',
});


export default async function sendOrder(req, res) {

    const products = req.body.cart.map(el => {
        return `
Имя продукта: ${el.name}
Количество: ${el.number}
Цена: ${el.price}
Добавик: ${el.title.join('')}
Общая сумма заказа: ${el.totalPrice}
Вес: ${el.weight}
`
    })

    const data = `
Имя: ${req.body.data.name}
Телефон: ${req.body.data.phone}
Улица: ${req.body.data.street}
Дом: ${req.body.data.dom}
Корпус: ${req.body.data.corpus}
Квартира: ${req.body.data.flat}
Домофон: ${req.body.data.intercom}
Форма Оплаты: ${req.body.data.formPay}
Комментарий: ${req.body.data.comment} 
`

    const mess = `
Заказ: 
${products.join('\n\n')}

Данные: 
${data}
`

    try {

        client.sendMessage(-774438041, mess)

    } catch (e) {

        console.log('Error', e)

    }

}