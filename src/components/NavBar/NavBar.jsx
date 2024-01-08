import { Link, NavLink } from 'react-router-dom';
import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";


const NavBar = () => {
    return (
        <nav id="nav">
            <Link to="/">
                <h3> ZoneStrikeBoots </h3>
            </Link>
            <div className='categories'>
                <NavLink to="/category/Nike" className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Nike</NavLink>
                <NavLink to="/category/Adidas" className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Adidas</NavLink>
                <NavLink to="/category/Puma" className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Puma</NavLink>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar;