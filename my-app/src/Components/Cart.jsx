import React, { useState } from "react"
import CartCard from "./CartCard"
//import {Button} from "@chakra-ui/react"
let total = 0
const Cart = () => {
    // const [toy,setToy]=useState()
    let [toy,setToy] =useState(JSON.parse(localStorage.getItem("products4")) || [])
    console.log(toy)
    // setToy(data)
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
        let newToy = toy.filter(function (el, i) {
            return id !== el.id
        })

        //console.log(newToy)
        localStorage.setItem("products4", JSON.stringify(newToy))
       setToy(newToy)

    }


    toy = JSON.parse(localStorage.getItem("products4")) || []

    return (
        <div style={{ overflow: "hidden", marginTop: "30px", marginLeft: "20px" }}>
            <h1 style={{ marginLeft: "-1200px", color: "#30363C", fontFamily: "sans-serif", fontSize: "26px" }}>Shop by Categories</h1>




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