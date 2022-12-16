//import { json } from "react-router-dom"
import {Button} from "@chakra-ui/react"
const CartCard = ({dlt,id, image,title,price }) => {
    //let toy=JSON.parse(localStorage.getItem("products4")) ||[] 
    
    

    const handleClick=(id)=>{
       // console.log(id)
       dlt(id)


        
        
    }

    return <div  >
        <img src={image} alt="pic" style={{height:"300px" , width:"250px" ,boxShadow: "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px" }}  />
        <p style={{marginLeft:"-30px"}}>{title}</p>
       <b><h4 style={{marginLeft:"-30px"}}>₹{price}</h4></b> 
        <Button colorScheme='blue' onClick={()=>handleClick(id)}  style={{marginLeft:"-30px",width:"100px",height:"30px"}}>Deleted</Button>


    </div>
}

export default CartCard