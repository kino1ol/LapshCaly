import style from '../../styles/components/Basket.module.scss'

export default function deleteProductFromCart(cart) {
    cart.state.forEach((el, i)=> {
        if (el.name === this) {
            document.querySelectorAll(`.${style.basket}`)[i].style.height = '0'
            document.querySelectorAll(`.${style.basket}`)[i].style.opacity = '0%'
            document.querySelectorAll(`.${style.basket}`)[i].style.padding = '0'
        }
    })

    setTimeout(() => {
        cart.dispatch({type: 'deleteProduct', payload: this})
    }, 500)
}