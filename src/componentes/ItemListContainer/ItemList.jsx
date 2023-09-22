import propTypes from "prop-types";
import { Link } from "react-router-dom";

const ItemList = ({ items, isLoading }) => {
  if (isLoading) {
    return <h2>Cargando productos...</h2>;
  }

  return (
    <div>
      <h1 className="text-center">Productos</h1>

      <ul className="text-center classPropia">
        {items.map((item) => (
          <li className="text-decoration-none" key={item.id}>
            <Link className="classPropia" to={`/item/${item.id}`}>
              <h3 className="className">{item.title}</h3>
              <p className="classPrice">${item.price}</p>
              <p className="classCategory">{item.categoryId}</p>
              <p className="classCategory">Stock:{item.stock}</p>
              <hr />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

ItemList.propTypes = {
  items: propTypes.array.isRequired,
  isLoading: propTypes.bool,
};

export default ItemList;