import { Plus, Minus, Trash2 } from 'lucide-react';
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
        <button onClick={() => dispatch(decreaseQty(item.id))}>
            <Minus size={16} />
        </button> 
        <span> {item.quantity} </span> 
        <button onClick={() => dispatch(increaseQty(item.id))}>
            <Plus size={16} />
        </button> 
        <br /> 
        <button onClick={() => dispatch(removeFromCart(item.id))}> 
            <Trash2 size={16} />
            Remove 
        </button> 
        </div> 
        </div>
    );
}