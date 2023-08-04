import React, {useContext} from 'react'
import styles from ".//cardBooking.module.css"
import { Link } from 'react-router-dom'
import axios from 'axios';

const CardBooking = ({dataProductos, startDate, endDate}) => {






  const handleBooking = () =>{      
            
    axios.post('http://18.117.8.179/reservas', {
      horaReserva: "10:10:30",
      fechaInicio: startDate,
      fechaFin: endDate,
      producto: { id: dataProductos?.id },
      user: { id: 2 }
    }, {
                                             
      headers: {
        Authorization: `Bearer ${JSON.parse(localStorage.getItem("JWT"))}`
      }
    })
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error(error);
      });
    
  }
  


  



  return (    
    <div className={styles.container}>
        <section className={styles.lefth}>
        <h4  className={styles.title} >Detalle de la reserva</h4>        
        <img className={styles.img} src={dataProductos?.imagenes?.[0].urlImagen} width="100%" />
        </section>
        <section className={styles.right}>
        <h6 className={styles.category} >{dataProductos?.categoria?.titulo}</h6>
        <h4 className={styles.title}>{dataProductos?.nombre}</h4>
        <p>{dataProductos?.descripcion}</p>
        <hr></hr>
        <section className={styles.date}>
            <h6 className={styles.checkin}> Check in</h6>
            <p>{startDate}</p>
        </section>
        <hr></hr>
        <section className={styles.date}>
            <h6 className={styles.checkout}> Check Out</h6>
            <p>{endDate}</p>
        </section>
        <hr></hr>
        <Link to="/succesfully"><button onClick={handleBooking} className={styles.btnConf}>Confirmar reserva</button></Link>
      </section>
    </div>
  )
}

export default CardBooking