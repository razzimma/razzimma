
import './App.css';
import { About } from './component/about';
import { Home } from './component/home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Pricing } from './component/pricing';
import AOS from 'aos';
import 'aos/dist/aos.css';




function App() {
  AOS.init();
  return (
  <div>
    <BrowserRouter>
    <Routes>

     <Route path="/" element= {<Home></Home>}></Route> 
     <Route path="/about" element= {<About></About>}></Route>
     <Route path="/pricing" element= {<Pricing></Pricing>}></Route>
    
    </Routes>  
    
    </BrowserRouter>
  </div>
  );
}

export default App;
