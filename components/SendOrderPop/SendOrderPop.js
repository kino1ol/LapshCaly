import style from '../../styles/components/SendOrderPop.module.scss'

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

export {changeIntercomAnswer, changeFormPay}