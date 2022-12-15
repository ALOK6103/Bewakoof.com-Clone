import {useState,useEffect} from "react"
import WomensCard from "./WomensCard"
const getData=async()=>{
    return fetch(
       `https://alok-verma-rct.onrender.com/womentshirt`
    ).then((res)=>res.json())
}

const Mens=()=>{
    const [banner,setBanner]=useState([])
    
    useEffect(()=>{
       getApiData()
    },[])

    async function getApiData(){
        try {
           let data=await getData()
           console.log(data)
           setBanner(data)  
        } catch (error) {
           console.log(error) 
        }
    }

    
   
    return (

        <div style={{overflow:"hidden" , marginTop:"30px" ,marginLeft:"20px" }}>
        <h1 style={{marginLeft:"-1200px"  , color:"#30363C" , fontFamily:"sans-serif" , fontSize:"26px"}}>Shop by Categories</h1>

       
        

        <div style={{ overflow:"auto",display:"grid",gridTemplateColumns:"repeat(5,1fr)", width:"95%", margin:"auto" , gap:"20px" , marginTop:"20px" ,  }} >
         
            {banner.map((el,i)=>{
         

                return (
                    
                <WomensCard  key={i+1} image={el.image} title={el.title} price={el.price}></WomensCard>
                
                )
               
            })}
            </div>
        </div>
        
       
        
    )
}

export default Mens