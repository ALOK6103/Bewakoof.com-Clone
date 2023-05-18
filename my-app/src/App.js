//import logo from './logo.svg';
import './App.css';
import AllRouter from './Components/AllRouter';
import  { Navbar } from './Components/Home';
import MobileNav from "./Components/MobileNav"
import LargeWithNewsletter from "./Components/Footer"
//import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">
      
      <MobileNav />
      {/* <Navbar /> */}
      <AllRouter />
      <LargeWithNewsletter />
      
    </div>
  );
}

export default App;
