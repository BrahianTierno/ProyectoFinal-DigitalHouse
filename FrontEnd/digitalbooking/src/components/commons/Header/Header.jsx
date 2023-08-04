import {useContext} from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import styles from './/header.module.css'
import Avatar from '../Avatar/Avatar';
import { AuthContex } from '../../../context/AuthContex';
import MenuMobile from '../MenuMobile/MenuMobile';



const Header = () => {

  //Contexto Global de Auth
  const {isLogged , setIsLogged} =  useContext(AuthContex);



  const location = useLocation();
  const navigator = useNavigate();

  return (
    <div className={styles.container}>
        <section className={styles.left} >
          <Link to="/"><img className={styles.logo} src="https://productosc3g5.s3.us-east-2.amazonaws.com/imagenes/logo.jpg" width='80px' height='60px' alt='logo' /></Link> 
            <a href='/' className={styles.title}>Sentite como en casa</a>
        </section>
        {isLogged ? 
        ( 
          <section  className={styles.avatarContainer}>
            <Avatar 
              name={"nameHeader"} 
              profile={"profileHeader"} 
              text={"pHeader"}
              logOut={"logOutHeader"}
            />
          </section>
        )  : 
        (
          <section className={styles.right} >   
          {location.pathname !== "/Login" ? 
            <Link to="Login"><button className={styles.btn}>Iniciar Sesión</button></Link> : "" }     
          {location.pathname !== "/Register" ? (
            <Link to="Register"><button className={styles.btn}>Crear cuenta</button></Link>) : ""}                 
          </section>
        )
      }
      <div className={styles.menuMobile}>
        <MenuMobile />
      </div>
    </div>
  )
}

export default Header 