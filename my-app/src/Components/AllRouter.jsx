
import {Routes,Route} from "react-router-dom"
import Mens from "./Mens"
import Home from "./Home"

const AllRouter=()=>{
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/mens" element={<Mens />} />
        
            
    </Routes>
    )
}

export default AllRouter