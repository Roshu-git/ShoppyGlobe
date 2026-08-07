import { useDispatch } from 'react-redux'; 
import { removeFromCart, increaseQty, decreaseQty, } from '../redux/Cartslice'; 
export default function CartItem({ item }) { 
    const dispatch = useDispatch(); 
    return (
    <div className="cart-item"> 
    <img src={item.thumbnail} width="80" /> 
    <div> 
        <h4>{item.title}</h4> 
        <p>₹{item.price}</p> 
        <button onClick={() => dispatch(decreaseQty(item.id))}>-</button> 
        <span> {item.quantity} </span> 
        <button onClick={() => dispatch(increaseQty(item.id))}>+</button> 
        <br /> 
        <button onClick={() => dispatch(removeFromCart(item.id))}> Remove </button> 
        </div> 
        </div>
    );
}