import styles from './Cart.module.css'
import Modal from "../UI/Modal";
import {Fragment, useContext} from "react";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";

function Cart(props) {
    const cartCtx = useContext(CartContext)
    const addItemHandler = (item) => {
        cartCtx.addItem({...item, amount:1})
    }
    const removeItemHandler = (id) => {
        cartCtx.removeItem(id)
    }
    const cardItems = <ul className={styles['cart-items']}>
        {cartCtx.items.map((item) =>
            <CartItem
                key={item.id}
                name={item.name}
                price={item.price}
                amount={item.amount}
                onAdd={()=>addItemHandler(item)}
                onRemove={()=>removeItemHandler(item.id)}/>)
        }
    </ul>

    return (
        <Fragment>
            <Modal handleClick={props.setIsNotVisible}>
                {cardItems}
                <div className={styles.total}>
                    <span>Total Amount</span>
                    <span>{cartCtx.total.toFixed(2)}€</span>
                </div>
                <div className={styles.actions}>
                    <button className={styles.buttonAlt} onClick={props.setIsNotVisible}>Close</button>
                    <button className={styles.button}>Order</button>
                </div>
            </Modal>}
        </Fragment>
    )
}

export default Cart;