const CartItem = (data, removeToCart) => {
    let {id, name, price, quantity} = data;
    return(
        <div Style = {{borderBottom: "thin solid gray"}}>
            <h4>{name}</h4>
            <h4>${price} x {quantity} = ${price * quantity} </h4>
            <button onClick={() => removeToCart(id, true)}>Eliminar Todo</button>
            <br/>
            <button onClick={() => removeToCart(id)}>Quitar Uno</button>
        </div>
    )
}

export default CartItem;