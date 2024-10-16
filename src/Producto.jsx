import "./Product.css"
const Producto = (product) => {
  console.log(product)
  return (<div className="card">
    <h2>{product.product.title}</h2>
    <p>{product.product.price}</p>
  </div>);
};

export default Producto;
