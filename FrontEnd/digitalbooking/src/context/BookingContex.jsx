import React from 'react'

export const BookingContex = createContext();



const BookingContexProvider = () => {


    const postBooking = ( startDate, endDate, idProduct  ) =>{

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
    <div>BookingContex</div>
  )
}

export default BookingContexProvider