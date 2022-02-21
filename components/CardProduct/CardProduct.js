import style from '../../styles/components/AdditivesPop.module.scss'

export default function openPopAdditivesAndAddCart(cart) {
    const popUnVisible = document.querySelector(`.${style.additivesPop_visible_false}`)
    popUnVisible &&
    popUnVisible.classList.replace(
        style.additivesPop_visible_false,
        style.additivesPop_visible_true
        )

    let contains = false

    if (cart.state[0] !== undefined) {
        cart.state.forEach(el => {
            if (el.name === name) {
                contains = true

            }
        })
    }

    !contains && cart.dispatch({type: 'addProduct', payload: this})
}