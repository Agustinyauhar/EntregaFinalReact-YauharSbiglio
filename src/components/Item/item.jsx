import { NavLink, Link } from "react-router-dom";
import "./Item.css";

const Item = ({id, name, img, price, stock}) => {
    return (
        <article className="card-item">
            <header className="header">
                <h2 className="item-header">
                    {name}
                </h2>
            </header>
            <picture>
                <img src={img} alt={name} className="Item-Img" />
            </picture>
            <section>
                <p className="Info">
                    Precio: ${price}
                </p>
                <p className="Info">
                    Stock disponible: {stock}
                </p>
            </section>
            <footer className="Item-Footer">
            <Link to={`/item/${id}`} className="option">Ver Detalles</Link>
            </footer> 
        </article>
    )
}

export default Item;