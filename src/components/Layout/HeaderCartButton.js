import CartIcon from "../Cart/CartIcon";
import styles from "./HeaderCartButton.module.css"
import {useContext, useEffect, useState} from "react";
import CartContext from "../../store/cart-context";
function HeaderCartButton(props) {
    const cartCtx = useContext(CartContext)
    const [buttonIsHighlighted, setButtonIsHighlighted] = useState(false)

    useEffect(()=>{
        if(cartCtx.items.length===0){
            return
        }
        setButtonIsHighlighted(true)
        const timer = setTimeout(()=> {
            setButtonIsHighlighted(false)
        },300)
        return () => {
            clearTimeout(timer)
        }
    },[cartCtx])
    const cartItemCounter = cartCtx.items.reduce((accmulator, currentValue)=>accmulator+currentValue.amount,0)
    const btnStyles = `${styles.button} ${buttonIsHighlighted && styles.bump}`
    return (
        <button onClick={props.setCartVisible} className={btnStyles}>
            <span className={styles.icon}>
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span></span>
            <span className={styles.badge}>{cartItemCounter}</span>
        </button>
    )
}

export default HeaderCartButton;