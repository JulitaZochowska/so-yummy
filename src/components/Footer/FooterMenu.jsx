import './Footer.styled.css';
import { Link } from 'react-router-dom';

export const FooterMenu = () => {
  return (
    <div className="MenuItems">
      <Link to="/search?query=&type=ingredients" style={{ color: "white", textDecoration: 'none' }}>
        <span className="Item">Ingredients</span>
      </Link>

      <Link to="/add" style={{ color: "white", textDecoration: 'none' }}>
        <span className="Item">Add recipes</span>
      </Link>

      <Link to="/my" style={{ color: "white", textDecoration: 'none' }}>
        <span className="Item">My recipes</span>
      </Link>

      <Link to="/favorite" style={{ color: "white", textDecoration: 'none' }}>
        <span className="Item">Favorite</span>
      </Link>

      <Link to="/shopping-list" style={{ color: "white", textDecoration: 'none' }}>
        <span className="Item">Shopping list</span>
      </Link>
    </div>
  );
};

export default FooterMenu;
