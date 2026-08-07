// Represents a single row in the cart table

import { Plus, Minus, Trash2 } from 'lucide-react';
import { useDispatch } from 'react-redux'; 
import { removeFromCart, increaseQty, decreaseQty, } from '../redux/Cartslice'; 
export default function CartItem({ item }) { 
    const dispatch = useDispatch(); 
    return (
    <>
        <tr>
            <td><img src={item.thumbnail} width="100"  /></td>
            <td title={item.title}>{item.title}</td>
            <td>
                {/* // Increase quantity */}
                 <button onClick={() => dispatch(decreaseQty(item.id))}>
                    <Minus size={16} />
                </button> 
                <span> {item.quantity} </span>
                {/* Decrease quantity  */}
                    <button onClick={() => dispatch(increaseQty(item.id))}>
                        <Plus size={16} />
                    </button> 
                    <br /> 
                    
            </td>
            <td>₹{item.price}</td>
            <td>₹{(item.price * item.quantity).toFixed(2)}</td>
            {/* // Remove item from cart */}
            <td> <button onClick={() => dispatch(removeFromCart(item.id))} style={{ background: 'red', color: 'white' }} > Remove </button></td>
        </tr>
    </>
    );
}