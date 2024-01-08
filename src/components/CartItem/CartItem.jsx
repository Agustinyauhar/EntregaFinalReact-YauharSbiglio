import { useContext } from "react"
import { CartContext } from "../../context/CartContex"
import "./CartItem.css";


const CartItem = ({ name, price, id, img , quantity }) => {

  const { removeItem, } = useContext(CartContext)
  
  return (
    <div className="CartItem">

      <h2 className="productoFin"> Producto: {name}</h2>
      <img src={img} alt={`product${name}`} className="image" />
      <p>Cantidad: {quantity}</p>
      <p>Subtotal: ${price * quantity}</p>
      <button onClick={() => removeItem(id)}>Eliminar</button>
    </div>
  )
}


export default CartItem;