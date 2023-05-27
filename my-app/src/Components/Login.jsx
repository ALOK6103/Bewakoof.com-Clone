import {useState,useEffect,useReducer} from "react"
import { Link,useNavigate } from "react-router-dom";
// import MensCard from "./MensCard"
// import { SimpleGrid,Box } from "@chakra-ui/react"
// import styles from "./Product.module.css"
//import module "./Product.css"
import { Button } from "@chakra-ui/react";

  
  //should have the cases "name", "gender", "role", "maritalStatus", and "reset" along with the default cases
  

const getData=async()=>{
    return fetch(
       `https://alok-verma-rct.onrender.com/signup`
    ).then((res)=>res.json())
}

const Login=()=>{
    const [banner,setBanner]=useState([])
    
    const [email,setEmail]=useState("")
   const [password,setPassword]=useState("")
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

    

    const handleSubmit = (e) => {
       e.preventDefault()
       let p=false
        for(let i=0;i<banner.length;i++){
          if(banner[i].email==email && banner[i].password==password ){
           p=true
           let payload={email,password}
            localStorage.setItem("bewakoof",JSON.stringify(payload))
            console.log("matched")
            window.location.href="/cart"
          }
        }   
       if(p==false){
        alert("Wrong Credential")
        window.location.href="/signup"
       }
        
    }
    
     
   
    return (

        <div className="login-page" style={{width:"auto",margin:"auto",justifyContent:"center",padding:"10px",marginTop:"30px" ,borderRadius:"5px",marginBottom:"70px"}}>


      <form  className="form" >
      
        <div>
          <label>
           <b>Email</b><br></br>
            <input 
            style={{width:"280px",border:"1px solid black",padding:"10px",marginBottom:"10px",borderRadius:"5px" ,marginTop:"10px"}}
           
            name="email"
            value={email} onChange={(e)=>setEmail(e.target.value)} 
             type="email" placeholder="Email" />
          </label>
        </div>
        <div>
          <label>
           <b>Password</b><br></br>
            <input
            style={{width:"280px",border:"1px solid black",padding:"10px" ,marginBottom:"10px",borderRadius:"5px",marginTop:"10px"}}
            
             name="password"
             value={password} onChange={(e)=>setPassword(e.target.value)}           
              type="password"
              placeholder="Password"
            />
          </label>
        </div>
        <div>
          <Button style={{width:"150px",border:"1px solid black",padding:"10px" ,marginBottom:"10px",borderRadius:"5px",marginTop:"10px"}} onClick={handleSubmit}  type="submit">
           <b>SUBMIT</b> 
          </Button>
        </div>
      </form>
      <div>
        <Link className="message" to="/">
          Go Back
        </Link>
      </div>
    </div>
 
    )
}

export default Login