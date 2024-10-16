import "./Product.css"
const Producto = (product) => {
  console.log(product)
  return (<div className="card">
    <h2>{product.product.title}</h2>
  </div>);
};

export default Producto;
