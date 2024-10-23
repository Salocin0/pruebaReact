import { useEffect, useState } from 'react'
import BotonCategoria from './BotonCategoria'
import './App.css'
import Producto from './Producto'

function Productos() {
  const [products, setProducts] = useState([])
  const [categoria, setCategoria] = useState("Todas")

  const handleCategoria= (categoria)=>{
    setCategoria(categoria)
  }

  useEffect(()=>{
    let url = ""
    if(categoria==="Todas"){
      url= "https://fakestoreapi.com/products/"
    }else{
      url= `https://fakestoreapi.com/products/category/${categoria}`
    }

    async function fetchBack() {
      const response = await fetch(url)
      const data= await response.json()
      setProducts(data)
    }
    fetchBack()
  },[categoria])

  return (
    <div>
      <h2>Productos</h2>
      <h3>filtros</h3>
      <BotonCategoria text={"electronica"} valor={"electronics"} functionPadre={handleCategoria}></BotonCategoria>
      <BotonCategoria text={"joyeria"} valor={"jewelery"} functionPadre={handleCategoria}></BotonCategoria>
      <BotonCategoria text={"ropa hombre"} valor={"men's clothing"} functionPadre={handleCategoria}></BotonCategoria>
      <BotonCategoria text={"ropa mujer"} valor={"women's clothing"} functionPadre={handleCategoria}></BotonCategoria>
      {products.map((product)=>(<Producto key={product.id} product={product}/>))}
    </div>
  )
}

export default Productos
