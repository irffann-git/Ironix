
import { Route, Routes } from "react-router-dom";
import HomePage from "./components/Home/HomePage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import NotFound from "./components/404/NotFount";
import About from "./components/About/About";
import ClassesPage from "./components/Classes/ClassesPage";
import PricingPage from "./components/Pricing/PricingPage";


function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="*" element={<NotFound/>}/>
        <Route path="/" element={<HomePage/>}/>
        <Route path="About" element={<About/>}/>
        <Route path="/Classes" element={<ClassesPage/>}/>
        <Route path="/Pricing" element={<PricingPage/>}/>
      </Routes>
      <Footer/>
      
      
    </div>
  );
}

export default App;