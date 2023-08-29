import PropTypes from "prop-types";

const ItemDetail = ({ item, isLoading }) => {
  if (isLoading) {
    return <h2>Cargando productos</h2>;
  }

  if (!item) {
    return <h2>Pagina no encontrada</h2>;
  }

  return (
    <div>
      <h1>{item.name}</h1>
      <p>${item.price}</p>
      <p>{item.category}</p>
    </div>
  );
};

ItemDetail.propTypes = {
  item: PropTypes.object,
  isLoading: PropTypes.bool,
};

export default ItemDetail;