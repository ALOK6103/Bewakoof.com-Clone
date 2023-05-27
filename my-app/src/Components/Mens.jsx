import {useState,useEffect} from "react"
import MensCard from "./MensCard"
import { SimpleGrid,Box, Skeleton } from "@chakra-ui/react"
import styles from "./Product.module.css"
import axios from "axios"
//import module "./Product.css"

const getData=async()=>{
    return fetch(
       `https://alok-verma-rct.onrender.com/menstshirt`
    ).then((res)=>res.json())
}

const Mens=()=>{
    const [banner,setBanner]=useState([])
    const [sort,setSort]=useState("")
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

    useEffect(()=>{
        myData()
    },[banner])

function myData(){
    if(sort==="asc"){

        axios.get(`https://alok-verma-rct.onrender.com/menstshirt?_sort=price&_order=asc`)
        .then((res)=>{
           
            console.log(res.data)
            setBanner(res.data)
        })
        .catch((error)=>{
            console.log(error)
        })
       
    }else if(sort==="desc"){
        axios.get(`https://alok-verma-rct.onrender.com/menstshirt?_sort=price&_order=desc`)
        .then((res)=>{
           
            console.log(res.data)
            setBanner(res.data)
        })
        .catch((error)=>{
            console.log(error)
        })
    }else{
        axios.get(`https://alok-verma-rct.onrender.com/menstshirt`)
        .then((res)=>{
           
            console.log(res.data)
            setBanner(res.data)
        })
        .catch((error)=>{
            console.log(error)
        })
    }
}
   // console.log(sort)
   
    return (

        <div  style={{overflow:"hidden" , marginTop:"30px" ,marginLeft:"40px" }}>

           <h1 style={{fontFamily:"sans-serif",fontSize:"20px",marginBottom:"7px"}}>Sorting</h1>
           <div style={{ margin:"auto",display:"flex",justifyContent:"center",width:"200px",border:"1px solid black",backgroundColor:"orange"}}>
           
           
           <select style={{backgroundColor:"orange",height:"30px"}} value={sort} onChange={(e)=>setSort(e.target.value)}>
            <option style={{backgroundColor:"orange"}}  value="" >Sort By Price</option>
            <option style={{backgroundColor:"orange"}} value="asc">Ascending</option>
            <option style={{backgroundColor:"orange"}} value="desc">Descending</option>
           </select>

           </div>

        <h1 style={{  display:"flex", justifyContent:"left",color:"#30363C" , fontFamily:"sans-serif" , fontSize:"26px",marginBottom:"20px"}}>Shop by Categories</h1>

       
        {
       banner.length==0 && <Box display="grid" gridTemplateColumns={{
          base:"repeat(1,1fr)",
          sm: "repeat(2,1fr)",
          md: "repeat(3,1fr)",
          lg: "repeat(3,1fr)",
          xl:"repeat(4,1fr)"
        }} gap="20px" >
         {[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20].map((box)=>{
          return <Skeleton h="250px" w="300px" key={box} >hi</Skeleton>
         })}
         </Box>
        }

        <div   >
         <SimpleGrid minChildWidth={"250px"} >
            {banner.map((el,i)=>{
         

                return  <Box className={styles.container} style={{marginBottom:"20px"}}>
                <MensCard  key={i+1} image={el.image} title={el.title} price={el.price}></MensCard>
                </Box>
                
               
            })}
        </SimpleGrid>
        </div>
        </div>
        
       
        
    )
}

export default Mens

