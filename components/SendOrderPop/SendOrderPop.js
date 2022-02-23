import style from '../../styles/components/SendOrderPop.module.scss'
import axios from "axios";
import isMobilePhone from "validator/lib/isMobilePhone";

function changeIntercomAnswer() {
    document.querySelectorAll(`.${style.intercom__checkbox}`)
        .forEach(checkbox => {
            if (!checkbox.classList.contains(style.intercom__checkbox_active)) {
                checkbox.classList.add(style.intercom__checkbox_active)
            } else {
                checkbox.classList.remove(style.intercom__checkbox_active)
            }
        })
}

function changeFormPay() {
   document.querySelectorAll(`.${style.formPay_item}`)
       .forEach(item => {
           if (!item.classList.contains(style.formPay_item_active)) {
               item.classList.add(style.formPay_item_active)
           } else {
               item.classList.remove(style.formPay_item_active)
           }
       })
}

async function sendOrder(setOrderPop, setOrderSended) {
    const element = (cl) => document.querySelector(`.${cl}`)
    console.log(this)

    const order = {
        cart: [...this.state],
        data: {}
    }

    let phoneValid = false



    document.querySelectorAll('input').forEach(el => {
        if (el.placeholder === 'Имя') {
            order.data.name = el.value
        }
        if (el.placeholder === 'Телефон') {

            if (isMobilePhone(el.value.split(/[-()]/g).join(''), 'be-BY')) {
                order.data.phone = el.value
                phoneValid = true

            } else {
                el.style.borderColor = 'red'
                setTimeout(() => el.style.borderColor = '#FBF9F9', 1000)
            }
        }
        if (el.placeholder === 'Улица') {
            order.data.street = el.value
        }
        if (el.placeholder === 'Дом') {
            order.data.dom = el.value
        }
        if (el.placeholder === 'Корпус') {
            order.data.corpus = el.value
        }
        if (el.placeholder === 'Квартира') {
            order.data.street = el.value
        }
        if (el.placeholder === 'Квартира') {
            order.data.flat = el.value
        }
    })

    if (phoneValid) {
        order.data.intercom = element(style.intercom__checkbox_active).nextSibling.innerText
        order.data.formPay = element(style.formPay_item_active).children[1].innerText
        order.data.comment = document.querySelector('textarea').value
        console.log(this)
        setOrderSended(true)
        setTimeout(() => {
            setOrderSended(false)
            setOrderPop(false)
        }, 1000)
        await axios.post('http://localhost:3000/api/orderSend', order)

    }
}

export {changeIntercomAnswer, changeFormPay, sendOrder}