import { createContext, useState, useEffect } from "react";
import axios from 'axios';


export const ProductContex = createContext()


const ProductContexProvider = ({ children }) => {

  //Todos los producto
  const [products, setProducts] = useState([])

  //Producto selecionado
  const [selectedData, setSelectedData] = useState([])
  


  useEffect(() => {
    
    const url = "http://18.117.8.179/productos"
    axios.get(url)
      .then(function (response) {
        setProducts(response.data)

      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, [])


  //Funcion para la descripcion
  const description = (id) => {

    axios.get(`http://18.117.8.179/productos/${id}`)
      .then(function (response) {
        setSelectedData(response.data)        
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }


  const filterByCategoria = (id) => { 

    axios.get(`http://18.117.8.179/productos?categoria=${id}`)
      .then(function (response) {
        setProducts(response.data)
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }

  const filterByCity = (cityId) => {  
      
    axios.get(`http://18.117.8.179/productos?ciudad=${cityId}`)
      .then(function (response) {
        setProducts(response.data)
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }

  const data = {
    products,
    setProducts,
    description,
    selectedData,
    filterByCategoria,
    filterByCity,   


  }

  return (
    <ProductContex.Provider value={data}>
      {children}
    </ProductContex.Provider>
  )
}

export default ProductContexProvider