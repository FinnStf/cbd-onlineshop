import styles from './AvailableProducts.module.css'
import Card from "../UI/Card";
import ProductItem from "./ProductItem";
import {useCallback, useEffect, useState} from "react";


function AvailableProducts() {
    const [products, setProducts] = useState([])

    const fetchProductsHandler = useCallback(async () => {
        try {
            const url = 'http://localhost:8080/products'
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error('Something went wrong!');
            }

            const data = await response.json();

            const productData = data.results.map((productData) => {
                return {
                    key: productData.name,
                    id: productData.id,
                    name: productData.name,
                    description: productData.description,
                    price: productData.price,
                };
            });
            setProducts(productData);
        } catch (error) {
            console.log(error.message)
        }
    }, []);

    useEffect(() => {
        fetchProductsHandler();
    }, [fetchProductsHandler]);

    return (
        <section className={styles.meals}>
            <Card>
                <ul>
                    {products.map((product) => {
                        return (<ProductItem key={product.id}
                                             id={product.id}
                                             name={product.name}
                                             description={product.description}
                                             price={product.price}
                        />)
                    })}
                </ul>
            </Card>
        </section>
    )
}

export default AvailableProducts;