import styles from './MealItem.module.css'
import MealItemForm from "./MealItemForm";
import {useContext} from "react";
import CartContext from "../../store/cart-context";

function MealItem(props) {
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
                <div className={styles.price}>{props.price.toFixed(2)}€</div>
            </div>
            <div>
                <MealItemForm id={props.id} addItemHadler={addItemHandler}/>
            </div>
        </li>
    )
}

export default MealItem