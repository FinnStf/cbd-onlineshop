import React, {useReducer} from "react";

const CartContext = React.createContext({
    items: [],
    total: 0,
    addItem: () => {
    },
    removeItem: () => {
    }
})

const defaultCartState = {
    items: [],
    total: 0,
}
const cartStateReducer = (state, action) => {
    if (action.type === 'ADD') {
        const updatedTotal = state.total + action.item.amount * action.item.price
        const indexOfEqualItems = state.items.findIndex(element => element.id === action.item.id)
        let updatedItems;
        if (indexOfEqualItems >= 0) {
            const newAmount = state.items[indexOfEqualItems].amount + action.item.amount
            updatedItems = [...state.items]
            updatedItems[indexOfEqualItems].amount = newAmount
        } else {
            updatedItems = state.items.concat(action.item)
        }
        return {items: updatedItems, total: updatedTotal}

    } else if (action.type === 'REMOVE') {
        const existingItemIndex = state.items.findIndex((element) => element.id === action.id)
        const existingItem = state.items[existingItemIndex]
        const updatedTotal = state.total - existingItem.price
        let updatedItems;
        if (existingItem.amount === 1) {
            updatedItems = state.items.filter(element => element.id !== action.id)
        } else {
            let updatedItem = {...existingItem, amount: existingItem.amount - 1}
            updatedItems = [...state.items]
            updatedItems[existingItemIndex] = updatedItem
        }

        return {items: updatedItems, total: updatedTotal}
    }
    return defaultCartState;
}

export function CartContextProvider(props) {
    const [cartState, dispatchCartAction] = useReducer(cartStateReducer, defaultCartState)

    const addItem = (newItem) => {
        dispatchCartAction({type: 'ADD', item: newItem})
    }

    const removeItem = (id) => {
        dispatchCartAction({type: 'REMOVE', id: id})
    }

    const cartContext = {
        items: cartState.items,
        total: cartState.total,
        addItem: addItem,
        removeItem: removeItem,
    }
    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartContext;