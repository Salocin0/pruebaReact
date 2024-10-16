import "./Product.css";
const Producto = (product) => {
  console.log(product);
  return (
    <div className="card">
      <img
        className="img"
        src={product.product.image}
        alt={product.product.description}
      />
      <div className="contenido">
        <h2 className="titulo">{product.product.title}</h2>

        <p>{product.product.price}</p>
      </div>
    </div>
  );
};

export default Producto;
