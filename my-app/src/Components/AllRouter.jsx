
import {Routes,Route} from "react-router-dom"
import Mens from "./Mens"
import Home from "./Home"
import Womens from "./Womens"

const AllRouter=()=>{
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/mens" element={<Mens />} />
            <Route path="/womens" element={<Womens />} />
        
            
    </Routes>
    )
}

export default AllRouter