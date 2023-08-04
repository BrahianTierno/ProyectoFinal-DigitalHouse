import React from 'react'
import { Link } from 'react-router-dom'
import styles from './succesAlert.module.css'

export default function SuccesAlert () {
    

    return(
        <div className={styles.succesCard}>
            <img className={styles.imgSucces} src="https://productosc3g5.s3.us-east-2.amazonaws.com/iconos/check.svg" alt="check" />
            <h1 className={styles.titleSucces}>¡Muchas Gracias!</h1>
            <h4 className={styles.textSucces}>Su reserva se ha realizado con éxito</h4>
            <Link to="/"><button className={styles.btnSucces}>Ok</button></Link>
        </div>
    )
}
