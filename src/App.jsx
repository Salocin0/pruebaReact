import "./App.css";
import Productos from "./Productos";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./Home";
import DetalleProducto from "./DetalleProducto";

function App() {
  //return <Productos />;
  return(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/Productos" element={<Productos/>}></Route>
      <Route path="/Productos/:id" element={<DetalleProducto/>}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App;
