import {Fragment} from "react";
import ShopSummary from "./ShopSummary";
import AvailableProducts from "./AvailableProducts";

function Products() {
    return (
    <Fragment>
        <ShopSummary />
        <AvailableProducts />
    </Fragment>
    )
}

export default Products;