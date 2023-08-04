import React,{useEffect,useState,useContext} from "react";
import DatePicker from "../DatePicker/DatePicker";
import styles from ".//searchFilter.module.css";
import axios from 'axios';
import { GrLocation } from "react-icons/gr";
import { ProductContex } from "../../../context/ProductContex";

const SearchFilter = () => {

  const {filterByCity} =  useContext(ProductContex);  

  const [cities, setCities] = useState([]);

  const [selectedCity, setSelectedCity] = useState()

  useEffect(() => {    

    axios.get("http://18.117.8.179/ciudades")
    .then(function (response) {      
      setCities(response.data)           
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });    
  }, []) 

  //Obtener valor selecionado
  const showSelected = () =>{
    let combo = document.getElementById("cities");
    let selected = combo.options[combo.selectedIndex].value;
    setSelectedCity(selected)
    
  }  

  return (
    <div className={styles.container}>
      <h2 className={styles.title} >Busca ofertas en hoteles, casas y mucho mas</h2>
      <section className={styles.mainSection}>
      <select id="cities" onChange={showSelected} className={styles.select}>
        <option defaultValue={true}>{" ¿A dónde vamos?"}</option>
       {cities.map((city)=>{
          return <option key={city.id} value={city.id} >{city.nombre}</option>
        })}          
        </select>       
        <DatePicker></DatePicker>        
        <button  onClick={()=>{filterByCity(selectedCity)}} className={styles.btn}> Buscar</button>
      </section>
    </div>
  );
};

export default SearchFilter;
