import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div>
      <h1>HOME</h1>
      <Link to={"/productos"}>ir a productos</Link>
    </div>
  );
};

export default Home