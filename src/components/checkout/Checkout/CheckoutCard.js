import {useReducer} from 'react';
import { TYPES } from '../Actions/Actions';
import {ShoppingReducer, ShoppingInitialState } from '../Actions/ShoppingReducer'
import ProductItem from './ProductItem';
import CartItem from '../../CartItem';

const ShoppingCart = () => {
    const  [state, dispatch] = useReducer(ShoppingReducer, ShoppingInitialState)
    const {products, cart} = state

    const addToCart = (id) => {
        dispatch({type: TYPES.ADD_TO_CART, payload:id})
    };
    
    const removeToCart = (id, all=false) => {
        if (all) {
            dispatch({type: TYPES.REMOVE_ALL_FROM_CART,payload:id})
        }else {
            dispatch({type: TYPES.REMOVE_ONE_FROM_CART, payload:id})
        }
    };
    
    const clearToCart = () => {
        dispatch({type: TYPES.CLEAR_CART})
    };

    return(
        <div>
            <h2>shoppingCart</h2>
            <article className="box grid-responsive">
                {products.map(product =><ProductItem key={product.id} data={product} addToCart={addToCart}/>)}
            </article>
            <h3>Carrito</h3>
            <article className="box">
                <button onClick={clearToCart}>Vaciar Carrito</button>
                {
                    cart.map((item, index) =><CartItem key={index.id} data={item} removeToCart={removeToCart}/>)
                }           
            </article>
        </div>
    )
}

export default ShoppingCart