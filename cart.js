import {restaurant} from "./data";
import {useSelector} from "react-redux";

let Cart = () => 
    {
        let restaurant_name = useSelector((store)=>store.cart.restaurant_name);
        
        return (
            <div id="container5">
                <div id="slip">
                    <div id="card">
                        <img></img>
                        <h2>{restaurant_name}</h2>
                    </div>
                </div>
            </div>
        );
    }

export default Cart;