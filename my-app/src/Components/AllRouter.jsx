
import {Routes,Route} from "react-router-dom"
import Mens from "./Mens"
import Home from "./Home"
import Womens from "./Womens"
import Cart from "./Cart"
const AllRouter=()=>{
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/mens" element={<Mens />} />
            <Route path="/womens" element={<Womens />} />
            <Route path="/cart" element={<Cart />}/>
        
            
    </Routes>
    )
}

export default AllRouter