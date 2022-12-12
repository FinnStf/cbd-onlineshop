import Header from "./components/Layout/Header";
import Products from "./components/Products/Products";
import Cart from "./components/Cart/Cart";
import {CartContextProvider} from "./store/cart-context";
import {useState} from "react";

function App() {
    const [cartIsVisible, setCartIsVisible] = useState(false)
    const setCartVisible = () =>{
        setCartIsVisible(true)
    }
    const setCartNotVisible = () =>{
        setCartIsVisible(false)
    }
    return (
        <CartContextProvider>
            {cartIsVisible && <Cart setIsNotVisible={setCartNotVisible}/>}
            <Header setCartVisible={setCartVisible}/>
            <main>
                <Products/>
            </main>
        </CartContextProvider>
    );
}

export default App;
