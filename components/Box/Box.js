import style from '../../styles/components/Additive.module.scss'
import boxImg from '../../public/ownBox/box.webp'

function addBoxInCart(isChecked) {
    if (isChecked) {
        const box = {
            img: boxImg,
            name: 'Собери сам',
            title: [],
            weight: 150,
            price: 1.9,
            number: 1,
            totalPrice: 1.9
        }

        if (this.state.filter(el => el.name === 'Собери сам')) {
            box.name = 'Собери сам ' + (this.state.map(el => el.name === 'Собери сам').length + 1)
        }

        document.querySelectorAll(`.${style.additive__checkbox_checked}`)
            .forEach(el => {
                const dataAdditive = el.attributes.props.value.split(',')
                box.title.push(dataAdditive[0])
                box.weight = box.weight + +dataAdditive[1]
                box.price = +(box.price + +dataAdditive[2]).toFixed(1)
                box.totalPrice = +(box.totalPrice + +dataAdditive[2]).toFixed(1)
            })

        this.dispatch({type: 'addProduct', payload: box})
    }
}


export {addBoxInCart}