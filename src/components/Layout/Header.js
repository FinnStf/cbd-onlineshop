import styles from './Header.module.css'
import {Fragment} from "react";
import mealsImage from "../../assets/cbd.jpg"
import HeaderCartButton from "./HeaderCartButton";

function Header(props){
    return(
        <Fragment>
            <header className={styles.header}>
                <h1>CBD Shop</h1>
                <HeaderCartButton setCartVisible={props.setCartVisible}/>
            </header>
            <div className={styles['main-image']}>
                <img src={mealsImage} alt="A table full of food!"/>
            </div>
        </Fragment>
    )
}
export default Header