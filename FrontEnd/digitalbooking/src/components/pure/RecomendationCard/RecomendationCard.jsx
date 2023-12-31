import React from "react";
import styles from ".//recomendationCard.module.css";
import { Link } from "react-router-dom";
import { FaMapMarkerAlt } from "react-icons/fa";
import { BiSwim, BiWifi } from "react-icons/bi";
import Checkbox from '@mui/material/Checkbox';
import Favorite from '@mui/icons-material/Favorite'
import FavoriteBorder from '@mui/icons-material/FavoriteBorder'

const RecomendationCard = ({
    
    id,
    img,
    category,
    title,
    calification,
    review,
    direction,
    desciption,
    
}) => {
    
    return (
        <div className={styles.card}>
            <section className={styles.image}>
                <img className={styles.img} src={img[0]?.urlImagen} width="100%" height="100%" alt="imagen" />
                <div className={styles.likeButton}>
                <Checkbox icon={<FavoriteBorder style={{color: "white"}}/>} checkedIcon={<Favorite style={{color: "white"}} />}/>
                </div>
            </section>
            <section className={styles.rigth}>
                <section className={styles.top}>
                    <section className={styles.topLefth}>
                        <h6 className={styles.category}>{category.titulo}</h6>
                        <h3 className={styles.title}>{title}</h3>
                    </section>
                    <section className={styles.topRigth}>
                        <p className={styles.calification}>{calification}</p>
                        <p className={styles.review}>{review}</p>
                        <section />
                    </section>
                </section>
                    <p><span><FaMapMarkerAlt fontSize={'20px'} /></span><span>{direction}</span> <a href='/description' className={styles.a}>MOSTAR EN EL MAPA</a></p>
                    <p>{desciption.slice(0, 100)} <a href='/description' className={styles.a}>mas</a></p>
                    <section>
                    <BiSwim fontSize={'30px'} />
                    <BiWifi fontSize={'30px'} />
                    </section>          
                    <section className={styles.sectionBoton}>
                        <Link to={`/description/${id}`}><button className={styles.btn}>Ver mas</button></Link>
                    </section> 
            </section>             
        </div>
    );
};

export default RecomendationCard;
