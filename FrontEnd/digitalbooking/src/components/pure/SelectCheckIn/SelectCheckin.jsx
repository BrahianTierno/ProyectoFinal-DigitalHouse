import React from 'react'
import { AiOutlineCheckCircle } from "react-icons/ai";
import styles from ".//selectCheckin.module.css"


const SelectCheckin = () => {
    return (
        <div className={styles.container}>
            <p className={styles.description}> <AiOutlineCheckCircle /> Tu habitacián va a estar lista para el ceck-in entre las 10:00 AM  y a las 11:00 PM </p>
            <h6 className={styles.subTitle}> Indicá tu horario de llegada</h6>
            <select className={styles.select} placeholder="Selecionar hora de llegada">
                <option defaultValue={true} value="10:00">10:00</option>
                <option value="10:15">10:15</option>
                <option value="10:30">10:30</option>
                <option value="10:40">10:40</option>
            </select>
        </div>
    )
}

export default SelectCheckin