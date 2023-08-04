import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css'
import Home from './components/container/Home/Home'
import Login from './components/pure/Forms/Login/Login'
import Register from './components/pure/Forms/Register/Registre'
import DescriptionContainer from './components/container/DescriptionContainer/DescriptionContainer'
import AuthContexProvider from './context/AuthContex'
import ProductContexProvider from './context/ProductContex'
import BookingContainer from './components/container/BookingContainer/BookingContainer'
import SuccesContainer from './components/container/SuccesContainer/SuccesContainer'

ReactDOM.createRoot(document.getElementById('root')).render(

    <BrowserRouter>
     <AuthContexProvider>
       <ProductContexProvider>
      <Routes>
        <Route element={<App />}>
            <Route index path='/' element={<Home/>} />
            <Route index path='/Home' element={<Home/>} />
            <Route path="/Login" element={<Login/>} />
            <Route path="/Register" element={<Register/>} />  
            <Route path="/description/:id" element={<DescriptionContainer />} /> 
            <Route path="/description/:id/booking" element={<BookingContainer/>} />    
            <Route path='/succesfully' element={<SuccesContainer />} />    
        </Route>
      </Routes>
      </ProductContexProvider>
      </AuthContexProvider>  
    </BrowserRouter>
  
)
