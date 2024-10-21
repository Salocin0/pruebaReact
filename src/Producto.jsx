import "./Product.css";
const Producto = (product) => {
  return (
    <div className="card">
      <img
        className="img"
        src={product.product.image}
        alt={product.product.description}
      />
      <div className="contenido">
        <h2 className="titulo">{product.product.title}</h2>

        <h3>{product.product.price}</h3>
      </div>
    </div>
  );
};

export default Producto;
