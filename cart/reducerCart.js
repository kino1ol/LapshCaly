
export default function reducerCart(state, action) {
    switch (action.type) {
        case 'addProduct':
            console.log('reduceraddProduct', state)
            return [
                ...state,
                {
                    img: action.payload.img,
                    name: action.payload.name,
                    title: [action.payload.title],
                    weight: action.payload.weight,
                    price: action.payload.price,
                    number: 1,
                    totalPrice: action.payload.price
                }
            ]
        case 'addProductAdditives':
            console.log('reduceraddProductAdditives', state)
            return state.map(el => {
                if (el.name === action.payload.name) {
                    el.title.push(action.payload.dataAdditive[0])
                    el.weight = el.weight + +action.payload.dataAdditive[1]
                    el.price = +(el.price + +action.payload.dataAdditive[2]).toFixed(1)
                    return el
                }
                return el
            })

        case 'changeNumberProduct':
            return state.map(el => {
                    if (el.name === action.payload[0]) {
                        el.number = action.payload[1]
                        el.totalPrice = +(el.number * el.price).toFixed(1)
                    }
                    return el
                })
        case 'deleteProduct':
            state.forEach((el, i, arr) => {
                if (action.payload === el.name) {
                    arr.splice(i, 1)
                }
            })

            localStorage.setItem('cartState', JSON.stringify(state))

            return [...state]
        case 'localStorage':
            console.log('localStorage', action.payload)
            return action.payload
    }
}