import {contextProduct} from "./contextProduct";

export default function reducerCart(state, action) {
    switch (action.type) {
        case 'addProduct':
            if (state
                    .filter(
                        el => el.name === action.name
                    ).length !== 0
            ) {
                return state
            }

            const product = {
                ...contextProduct,
                name: action.name,
                title: [action.title],
                weight: action.weight,
                price: action.price,
            }

            return [
                ...state,
                product
            ]
        case 'addProductAdditives':
            const newState = [...state]
            const [foundProduct] = state
                .filter((el,i) => {
                    if (el.name === action.name) {
                        newState.splice(i, 1)
                        return
                    }
                })

            foundProduct.title.push(action.additives)
            foundProduct.weight = foundProduct.weight + action.weight
            foundProduct.price = foundProduct.price + action.price

            return [
                ...newState,
                foundProduct
            ]
    }
}