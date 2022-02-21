import style from '../../styles/components/AdditivesPop.module.scss'
import styleAdditive from '../../styles/components/Additive.module.scss'


function closePopAdditives() {
    const popVisible = document.querySelector(`.${style.additivesPop_visible_true}`)

    popVisible &&
    popVisible
        .classList
        .replace(
            style.additivesPop_visible_true,
            style.additivesPop_visible_false
        )
    document.querySelectorAll(`.${styleAdditive.additive__checkbox_checked}`)
        .forEach(el => el.classList.remove(styleAdditive.additive__checkbox_checked))
}

function addAdditivesInProduct(name, isChecked) {
    if (isChecked) {
        const checkedItems = document.querySelectorAll(`.${styleAdditive.additive__checkbox_checked}`)
        checkedItems.length !== 0 && checkedItems.forEach(el => {
            const dataAdditive = el.attributes.props.value.split(',')
            this.dispatch({type: 'addProductAdditives', payload: {name: name, dataAdditive: dataAdditive}})
        })
        closePopAdditives()
    }
}

export {closePopAdditives,addAdditivesInProduct}