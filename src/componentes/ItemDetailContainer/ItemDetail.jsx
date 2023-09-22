
import PropTypes from "prop-types";

const ItemDetail = ({ item, isLoading, addItem }) => {
  if (isLoading) {
    return <h2>Cargando productos</h2>;
  }

  if (!item) {
    return <h2>Pagina no encontrada</h2>;
  }

  return (
    <div>
      <h1>{item.title}</h1>
      <p>${item.price}</p>
      <p>Stock: {item.stock}</p>
      <p>Categoria: {item.categoryId}</p>
      <button onClick={() => addItem(item, 1)}>Agregar al carrito</button>
      
    </div>
  );
};

ItemDetail.propTypes = {
  item: PropTypes.object,
  isLoading: PropTypes.bool,
  addItem: PropTypes.func,
};

export default ItemDetail;