import { useParams,Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Product.css"
const DetalleProducto = () => {
  const { id } = useParams();
  const [producto, setProducto] = useState({});
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    let url = `https://fakestoreapi.com/products/${id}`;
    async function fetchBack() {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      setProducto(data);
      setIsLoading(false)
    }
    fetchBack();
  }, []);

  /*if (isLoading){
    return(<p>Cargando</p>)
  }*/

  return (
    <div className="card">
      <img src={producto.image} alt="" className="img" />

      <div>
        <h1>{producto.title}</h1>
        <p>{producto.description}</p>
      </div>
    <Link to={"/productos"}>seguir comprando</Link>
    </div>
  );
};

export default DetalleProducto;
