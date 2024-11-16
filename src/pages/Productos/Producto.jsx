import "../../Product.css";
import { useNavigate } from "react-router-dom";
const Producto = (product) => {
  console.log(product);
  const navigate = useNavigate()

  const handleClick = ()=>{
    navigate(`/productos/${product.product.id}`)
  }

  return (
    <div className="card" onClick={handleClick}>
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
