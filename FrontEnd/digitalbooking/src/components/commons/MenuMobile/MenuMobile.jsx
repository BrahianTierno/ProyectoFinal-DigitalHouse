import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { BsLinkedin, BsInstagram, BsFacebook, BsTwitter } from "react-icons/bs";
import { FiMenu, FiX } from 'react-icons/fi'
import "./mobileMenu.css"
import Avatar from '../Avatar/Avatar';
import { AuthContex } from '../../../context/AuthContex';

const MenuMobile = () => {

  const [click, setClick] = useState(false);
  
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const {isLogged , setIsLogged} =  useContext(AuthContex);
    
  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <div className='menu-icon' onClick={handleClick}>
            <FiMenu /> 
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <div className='topMenu'>
              <i className='close' onClick={closeMobileMenu}><FiX /></i>
            </div>
              {isLogged ? (
                <div>
                  <div className='avatarMobile'>
                    <Avatar 
                      name={"nameMenu"} 
                      profile={"profileMenu"} 
                      text={"pMenu"}
                      logOut={"logOutMenu"}
                    />
                  </div>
                  <div className='cerrarSesion'>
                    <p className='pCSesion'>¿Quieres <a href='/' className='aCSesion'>cerrar sesión</a>?</p>
                    <hr className='hrLogged'/>
                  </div>
                </div>
              ) : (
                <div>
                  <h5 className='h5'>MENÚ</h5>
                  <Link to="/Login" onClick={closeMobileMenu} className='btnMenu1'> Ingresar</Link>
                  <hr className='hrNoLogged'/>
                  <Link to="/Register" onClick={closeMobileMenu} className='btnMenu2'>Crear cuenta</Link>
                </div>
              )}
            <div className='redes' onClick={closeMobileMenu}>
            <li>
              <a href="https://facebook.com" className='nav-links'><BsFacebook /></a>
            </li>
            <li>
              <a href="https://linkedin.com" className='nav-links'><BsLinkedin /></a>
            </li>
            <li>
              <a href="https://twitter.com" className='nav-links'><BsTwitter /></a>
            </li>
            <li>
              <a href="https://instagram.com"className='nav-links'><BsInstagram /></a>
            </li>
            </div>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default MenuMobile