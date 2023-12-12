import "./ItemList.css"
import Item from "../Item/Item"

const ItemList = ({products}) => {
    return (
        <di className="ListGroup"> 
            {products.map(prod => <Item key={prod.id}{...prod}/>)}
        </di>
        )
}

export default ItemList