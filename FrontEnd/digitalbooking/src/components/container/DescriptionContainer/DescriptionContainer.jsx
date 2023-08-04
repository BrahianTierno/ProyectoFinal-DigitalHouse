import React, { useEffect, useContext} from 'react'
import { Link, useParams,useNavigate, useLocation  } from 'react-router-dom'
import { MdOutlineArrowBackIos, MdStarOutline, MdStar, MdLocationOn, MdFavoriteBorder, MdFavorite } from 'react-icons/md'
import { AiOutlineShareAlt } from 'react-icons/ai'
import { BsWhatsapp, BsInstagram, BsPaperclip } from 'react-icons/bs'
import { Checkbox, Menu, MenuItem } from '@mui/material'
import MapView from '../../utils/Map/MapView'
import StandardImageList from '../../pure/ListImages/ListImages'
import styles from './descriptionContainer.module.css'
import Carrusel from '../../utils/Carrusel/Carrusel'
import { ProductContex } from '../../../context/ProductContex'
import Caracteristicas from '../../pure/Caracteristicas/Caracteristicas'
import Calendar from '../../pure/DatePicker/Calendar'
import PoliciesContainer from '../Policies Container/PoliciesContainer'
import Favorite from '@mui/icons-material/Favorite'
import FavoriteBorder from '@mui/icons-material/FavoriteBorder'


const DescriptionContainer = () => {

    let { id } = useParams(); 

    const navigator = useNavigate(); 
    const { pathname } = useLocation(); 

    useEffect(() => {        
        description(id)  
    }, [id])

    const {description,selectedData} =  useContext(ProductContex);  

    const [anchorEl, setAnchorEl] = React.useState(null);

    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const verifyLogin = () =>{

        if(localStorage.getItem("JWT")){
            navigator(`/description/${id}/booking`)
        }else{
            
            navigator(`/Login`,{ state: { previousPath: pathname } })
        }

    }


    return (
        <div className={styles.container} >
        {
            selectedData && (
                <div>
                    <section className={styles.top}>                 
                <div className={styles.titleDesc}>
                    <h6>{selectedData.categoria?.titulo}</h6>
                    <h1>{selectedData.nombre}</h1>
                    <Link to="/home"><MdOutlineArrowBackIos /></Link>
                </div>
                <div className={styles.divDesc}>
                    <p className={styles.ubication}><MdLocationOn /> {selectedData.ciudad?.nombre}, Argentina</p> 
                    <div className={styles.puntaje}>
                        <p style={{width:"120px"}}>{selectedData.valoracion}<span style={{marginLeft:"10PX"}}>{selectedData.calificacion}</span></p>                      
                    </div>
                </div>
            </section>
            <section>
                <div className={styles.likeAndShare}>
                    <i onClick={handleClick}><AiOutlineShareAlt /></i>
                    <Menu
                        id="demo-positioned-menu"
                        aria-labelledby="demo-positioned-button"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                        }}
                    >
                        <MenuItem onClick={handleClose}><a href='/description' style={{ textDecoration: "none", color: "black" }}>Copiar enlace <BsPaperclip style={{ color: "grey" }} /></a></MenuItem>
                        <MenuItem onClick={handleClose}><a href="https://whatsapp.com" style={{ textDecoration: "none", color: "black" }}>Compartir <BsWhatsapp style={{ color: "green" }} /></a></MenuItem>
                        <MenuItem onClick={handleClose}><a href="https://instagram.com" style={{ textDecoration: "none", color: "black" }}>Compartir <BsInstagram style={{ color: "orange" }} /></a></MenuItem>
                    </Menu>
                    <div className={styles.likeButton}>
                        <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite style={{color: "#df2b2b"}} />}/>
                    </div>
                </div>
                <div className={styles.images}>
                    <StandardImageList img={selectedData.imagenes} />
                </div>
                <Carrusel img={selectedData.imagenes} />
            </section>
            <br />
            <section className={styles.services}>
                <h4>Alojate en el corazón de "{"La ciudad"}"</h4>
                <br />
                <p>
                    {selectedData.description}
                </p>
                <br />
                <p>
                    Nuestros clientes dicen que esta parte de Buenos Aires es su favorita, según los comentarios independientes.
                </p>
                <br />
                <p>
                    El Hotel es un hotel sofisticado de 4 estrellas que goza de una ubicación tranquila, a poca distancia de prestigiosas galerías de arte, teatros, museos y zonas comerciales. Además, hay WiFi gratuita.
                </p>
                <br />
                <p>
                    El establecimiento sirve un desayuno variado de 07:00 a 10:30.
                </p>
                <br />
                <h4>¿Qué ofrece este lugar?</h4>
                <hr /> 
                
                <div className={styles.iconList}>
                    <ul className={styles.iconServices}>                        
                        {selectedData?.caracteristicas?.map((item)=>{
                        return <Caracteristicas key={item.id} description={item.descripcion} icon={item.icono} />
                        })}
                    </ul>       
                </div>
                <br />
            </section>
            <section className={styles.dateDisponible}>
                <h4>Fechas disponibles</h4>
                <Calendar clase={"oneCalendar"} clase2={"calendarDescription"} />
                <div className={styles.divCalendar}>
                    <p className={styles.textCalendar}>Agregá tus fechas de viaje para obtener precios exactos</p>
                    <button onClick={verifyLogin} className={styles.btnCalendar}>Iniciar reserva</button>             
                </div>
            </section>
            <br />
            <section className={styles.mapaContainer}>
                <h4 style={{marginLeft: "1%"}}>¿Dónde vas a estar?</h4>
                <hr />
                <div className={styles.mapa}>
                    <MapView latitud={selectedData.latitud} longitud={selectedData.longitud} />
                </div>
            </section>
            <br />
            <section className={styles.listNormas}>                  
                <PoliciesContainer data={selectedData} />              
            </section>
            </div>
            )
        }
            <br /><br /><br />
        </div> 
    )
}

export default DescriptionContainer