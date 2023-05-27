import React, { useEffect, useState } from "react"
import CartCard from "./CartCard"
//import {Button} from "@chakra-ui/react"
import Login from "./Login"
import axios from "axios"

let loc=JSON.parse(localStorage.getItem("bewakoof"))





const getData=()=>{
    return axios.get("https://alok-verma-rct.onrender.com/bewakoofCart")
}



let total = 0
const Cart = () => {
    
    let [toy,setToy] =useState([])
    console.log(toy)
   
        useEffect(()=>{
          handleData()
        },[])

        const handleData=()=>{
            getData().then((res)=>{
                console.log(res.data)
                setToy(res.data)
              })
        }

    function Display(Data) {

        total = 0
        Data.forEach(function (elem, index) {

            total = total + elem.price


        })
    }
    Display(toy)
    console.log(total)

    

    const dltData = (id) => {
        console.log(id)

      axios.delete(`https://alok-verma-rct.onrender.com/bewakoofCart/${id}`)
      .then((res)=>{
        handleData()
      })

    }
       
    
    if(!loc){
        alert("Login First")
        // window.location.href = "/login"
       return
    }

    return (
        <div style={{ overflow: "hidden", marginTop: "30px", marginLeft: "20px" }}>
            <h1 style={{ display:"flex", justifyContent:"left", color: "#30363C", fontFamily: "sans-serif", fontSize: "26px" }}>Cart Items</h1>

            <div style={{ overflow: "auto", display: "grid", gridTemplateColumns: "repeat(5,1fr)", width: "95%", margin: "auto", gap: "20px", marginTop: "20px", }} >

                {toy.map((el, i) => {


                    return (
                        <>
                            <CartCard dlt={dltData} id={el.id} key={i + 1} image={el.image} title={el.title} price={el.price}></CartCard>

                        </>
                    )

                })}
            </div>
            <div style={{ marginBottom: "600px" }}>
                <b> Total Amount - {total}</b>
            </div>
        </div>

    )


}

export default Cart