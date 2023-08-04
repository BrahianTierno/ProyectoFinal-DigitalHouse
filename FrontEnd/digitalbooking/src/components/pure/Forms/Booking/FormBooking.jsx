import React, {useContext} from 'react'
import { AuthContex } from '../../../../context/AuthContex';
import ".//formBooking.css"
const FormBooking = () => {

    const { userData} =  useContext(AuthContex);
    return (
        <div className="container">
            <form>
                <div className="form-group">
                    <label htmlFor="nombre">Nombre:</label>
                    <input type="text" id="nombre" name="nombre" value={userData?.name} disabled />
                </div>
                <div className="form-group">
                    <label htmlFor="apellido">Apellido:</label>
                    <input type="text" id="apellido" name="apellido" value={userData?.lastName} disabled />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email"  value={userData?.email} disabled/>
                </div>
                <div className="form-group">
                    <label htmlFor="telefono">Teléfono:</label>
                    <input type="tel" id="telefono" name="telefono" />
                </div>
            </form>
        </div>
    )
}

export default FormBooking