import {useState,useEffect,useReducer} from "react"
import { Link,useNavigate } from "react-router-dom";
// import MensCard from "./MensCard"
// import { SimpleGrid,Box } from "@chakra-ui/react"
// import styles from "./Product.module.css"
//import module "./Product.css"

const initialState = {
    email:"",
    password:""
  };
  
  //should have the cases "name", "gender", "role", "maritalStatus", and "reset" along with the default cases
  const reducer = (state, action) => {
    switch (action.type) {
      case "email": {
        return { ...state, email: action.payload }
      }
      case "password": {
        return { ...state, password: action.payload }
      }
      case "reset": {
        return initialState
      }
      default: {
        return state
      }
    }
  };

const getData=async()=>{
    return fetch(
       `https://alok-verma-rct.onrender.com/signup`
    ).then((res)=>res.json())
}

const Login=()=>{
    const [banner,setBanner]=useState([])
    const [submittedData,setSubmittedData] = useState([]);
    const [state,dispatch] = useReducer(reducer,initialState)
//     const [email,setEmail]=useState("")
//    const [password,setPassword]=useState("")
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

    
    const handleChange = (e) => {
        const val = e.target.type === "checkbox" ? e.target.checked : e.target.value
       // console.log(val)
        dispatch({ type: e.target.name, payload: val })
        //console.log(submittedData)
    
      }

    const handleSubmit = (e) => {
        e.preventDefault()
        setSubmittedData([...submittedData,state])
        //console.log(submittedData)
        {for(let i=0;i<banner.length;i++){
          if(banner[i].email===submittedData[submittedData.length-1].email){
            alert("pass")
           { window.location.href = "/cart"}
          }
         }}
       
        dispatch({ type: "reset" })
    }
    
     
    console.log(submittedData)

    return (

        <div className="login-page" style={{width:"380px",margin:"auto",justifyContent:"center",padding:"10px",marginTop:"30px" , boxShadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px",borderRadius:"5px"}}>


      <form onSubmit={handleSubmit} className="form" >
      
        <div>
          <label>
           <b>Email</b><br></br>
            <input 
            style={{width:"280px",border:"1px solid black",padding:"10px",marginBottom:"10px",borderRadius:"5px" ,marginTop:"10px"}}
           
            name="email"
            value={state.email} onChange={handleChange} 
             type="email" placeholder="Email" />
          </label>
        </div>
        <div>
          <label>
           <b>Password</b><br></br>
            <input
            style={{width:"280px",border:"1px solid black",padding:"10px" ,marginBottom:"10px",borderRadius:"5px",marginTop:"10px"}}
            
             name="password"
             value={state.password} onChange={handleChange}           
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
 
    )
}

export default Login