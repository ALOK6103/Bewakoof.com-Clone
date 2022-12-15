//import Product from "./Product"
//import { Link } from "react-router-dom"
//import "./Product.css"
import {Button} from "@chakra-ui/react"
const MensCard=({image,title,price})=>{
    
    

    return (

    <span style={{ }} >
        <img src={image} alt="pic" style={{height:"300px" , width:"250px" , boxShadow: "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px" }}   />
        <p style={{marginLeft:"-30px"}}>{title}</p>
       <b><h4 style={{marginLeft:"-30px"}}>₹{price}</h4></b> 
        <Button colorScheme='blue' style={{marginLeft:"-30px",width:"100px",height:"30px"}}>Add To Cart</Button>
    </span>
    
    )
}

export default MensCard