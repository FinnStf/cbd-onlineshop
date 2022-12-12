import styles from './ProductItemForm.module.css'
import Input from "../UI/Input";
import {useRef} from "react";

function ProductItemForm(props){
    const amountInputRef = useRef()
    const handleFormSubmit = (event) =>{
        event.preventDefault()
        props.addItemHadler(+amountInputRef.current.value)
    }

    return (
        <form className={styles.form} onSubmit={handleFormSubmit}>
            <Input label="Amount" input={{
                id: 'amount_'+props.id,
                type:'number',
                min:'1',
                max:'5',
                step:'1',
                defaultValue:'1',
                ref: amountInputRef
            }}/>
            <button type='submit'>+ Add</button>
        </form>
    );
}
export default ProductItemForm;