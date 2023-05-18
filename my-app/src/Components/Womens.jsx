import {useState,useEffect} from "react"
import WomensCard from "./WomensCard"
import { SimpleGrid,Box, Skeleton } from "@chakra-ui/react"
import styles from "./Product.module.css"
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

        <div style={{overflow:"hidden" , marginTop:"30px" ,marginLeft:"40px" }}>
        <h1 style={{marginLeft:"-1200px"  , color:"#30363C" , fontFamily:"sans-serif" , fontSize:"26px",marginBottom:"20px"}}>Shop by Categories</h1>


        {
       banner.length==0 && <Box display="grid" gridTemplateColumns={{
          base:"repeat(1,1fr)",
          sm: "repeat(2,1fr)",
          md: "repeat(3,1fr)",
          lg: "repeat(3,1fr)",
          xl:"repeat(4,1fr)"
        }} gap="20px" >
         {[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20].map((box)=>{
          return <Skeleton h="250px" key={box} >hi</Skeleton>
         })}
         </Box>
        }

        <div   >
         <SimpleGrid minChildWidth={"250px"} >
            {banner.map((el,i)=>{
         

                return  <Box style={{marginBottom:"20px"}} className={styles.container}>
                <WomensCard  key={i+1} image={el.image} title={el.title} price={el.price}></WomensCard>
                </Box>
                
               
            })}
        </SimpleGrid>
        </div>
        </div>
     
    )
}

export default Mens