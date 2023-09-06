import "./product.css";
import QuantityPicker from '../components/quantityPicker';

function Product(){
    return(
        <div className="product">

            <img src="https://picsum.photos/200/220
" alt="random"></img>
            <h5> Title goes here </h5>
            <label>Price</label>
            <label>Total</label>

            {/*here we want to add the Qt-picker*/}
            <QuantityPicker/>

        </div>
    )

}

export default Product;
//create a Product component inside of the -- clear
//components folder (with a h5 for the title) -- clear
//render a <QuantityPicker/> inside of Product -- clear
//render the product component in the catalog - 5 times