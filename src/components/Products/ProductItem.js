import styles from './ProductItem.module.css'
import ProductItemForm from "./ProductItemForm";
import {useContext} from "react";
import CartContext from "../../store/cart-context";

function ProductItem(props) {
    const cartCtx = useContext(CartContext)
    const addItemHandler = (amount) =>{
        cartCtx.addItem({
            id: props.id,
            name: props.name,
            amount: amount,
            price: +props.price})
    }
    return (
        <li id={props.id} className={styles.meal}>
            <div>
                <h3>{props.name}</h3>
                <div className={styles.description}>{props.description}</div>
                <div className={styles.price}>{props.price}€</div>
            </div>
            <div>
                <ProductItemForm id={props.id} addItemHadler={addItemHandler}/>
            </div>
        </li>
    )
}

export default ProductItem