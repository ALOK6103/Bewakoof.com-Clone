import React from 'react'
import { Navigate } from 'react-router-dom'

const PrivateRoute = () => {

    let obj=JSON.parse(localStorage.getItem("bewakoof"))

    console.log(obj)

    if(obj.email){
        <Navigate to="/cart" />
    }
  return (
    <div>

    </div>
  )
}

export default PrivateRoute