// import {
//     Alert,
//     AlertIcon,
//     AlertTitle,
//     AlertDescription,
// } from '@chakra-ui/react'
import {Button} from "@chakra-ui/react"
let i=0
const MensCard=({id,image,title,price})=>{
    
    const handleClick=()=>{
       //{<Alert status='success'><AlertIcon />added</Alert>}
      let toy=JSON.parse(localStorage.getItem("products4")) ||[] 
      i=i+1
      id=i
      toy.push({id,price,title,image}) 
      localStorage.setItem(("products4"),JSON.stringify(toy))
      //alert("Added")
      
    }

    return (

    <span >
        <img  src={image} alt="pic" style={{height:"300px" , width:"250px" ,boxShadow: "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px" }} />
        <p style={{marginLeft:"-30px",marginTop:"10px"}}>{title}</p>
       
       <b><h4 style={{marginLeft:"-30px"}}>₹{price}</h4></b> 
        <Button colorScheme='blue' onClick={handleClick} style={{marginLeft:"-30px",width:"100px",height:"30px"}}>Add To Cart</Button>
    </span>
    
    )
}

export default MensCard