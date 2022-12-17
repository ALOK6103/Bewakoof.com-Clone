
import { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
//import { AuthContext } from "../Context/AuthContext";

function Signup() {
    const [name,setName]=useState("")
   const [email,setEmail]=useState("")
   const [password,setPassword]=useState("")
   
   //const navigate=useNavigate()

   const handleformSubmit=(e)=>{
   
    e.preventDefault()
     fetch(`https://alok-verma-rct.onrender.com/signup`,{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({name,email,password})
     })
     .then((res)=>res.json())
     
   }


  return (
    <div className="login-page" style={{width:"380px",margin:"auto",justifyContent:"center",padding:"10px",marginTop:"30px" , boxShadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px",borderRadius:"5px"}}
    value={name}>
      <form onSubmit={handleformSubmit} className="form" >
      <div >
          <label>
           <b>Name</b><br></br>
            <input 
            style={{width:"280px",border:"1px solid black",padding:"10px",borderRadius:"5px",marginBottom:"10px",marginTop:"10px"}}
            value={name}
            onChange={e=>setName(e.target.value)}
            type="text" placeholder="Name" />
          </label>
        </div>
        <div>
          <label>
           <b>Email</b><br></br>
            <input 
            style={{width:"280px",border:"1px solid black",padding:"10px",marginBottom:"10px",borderRadius:"5px" ,marginTop:"10px"}}
            value={email}
            onChange={e=>setEmail(e.target.value)}
             type="email" placeholder="Email" />
          </label>
        </div>
        <div>
          <label>
           <b>Password</b><br></br>
            <input
            style={{width:"280px",border:"1px solid black",padding:"10px" ,marginBottom:"10px",borderRadius:"5px",marginTop:"10px"}}
             value={password}
             onChange={e=>setPassword(e.target.value)}            
              type="password"
              placeholder="Password"
            />
          </label>
        </div>
        <div>
          <button style={{width:"150px",border:"1px solid black",padding:"10px" ,marginBottom:"10px",borderRadius:"5px",marginTop:"10px"}}  type="submit">
           <b>SUBMIT</b> 
          </button>
        </div>
      </form>
      <div>
        <Link className="message" to="/">
          Go Back
        </Link>
      </div>
    </div>
  );
}
export default Signup