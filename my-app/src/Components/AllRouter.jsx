
import {Routes,Route} from "react-router-dom"
import Mens from "./Mens"
import Home from "./Home"
import Womens from "./Womens"
import Cart from "./Cart"
import Signup from "./Signup"
import Login from "./Login"
const AllRouter=()=>{
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/mens" element={<Mens />} />
            <Route path="/womens" element={<Womens />} />
            <Route path="/cart" element={<Cart />}/>
            <Route path="/signup" element={<Signup />}/>
            <Route path="/login" element={<Login />}/>     
        </Routes>
    )
}

export default AllRouter