import { Plus, Minus, Trash2 } from 'lucide-react';
import { useDispatch } from 'react-redux'; 
import { removeFromCart, increaseQty, decreaseQty, } from '../redux/Cartslice'; 
export default function CartItem({ item }) { 
    const dispatch = useDispatch(); 
    return (
    // <div className="cart-item"> 
    // <img src={item.thumbnail} width="80" /> 
    // <div> 
    <>
        <tr>
            <td><img src={item.thumbnail} width="100"  /></td>
            <td title={item.title}>{item.title}</td>
            <td> 
                 <button onClick={() => dispatch(decreaseQty(item.id))}>
                    <Minus size={16} />
                </button> 
                <span> {item.quantity} </span> 
                    <button onClick={() => dispatch(increaseQty(item.id))}>
                        <Plus size={16} />
                    </button> 
                    <br /> 
                    
            </td>
            <td>₹{item.price}</td>
            <td>₹{(item.price * item.quantity).toFixed(2)}</td>
            <td> <button onClick={() => dispatch(removeFromCart(item.id))} style={{ background: 'red', color: 'white' }} > Remove </button></td>
        </tr>
        {/* <h4>{item.title}</h4> 
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
        </button>  */}
        {/* </div> 
        </div> */}
        </>
    );
}