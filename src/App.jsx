
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import NotFound from "./components/404/NotFount";
import About from "./pages/About";
import Classes from "./pages/Classes";
import Home from "./pages/Home";
import Pricing from "./pages/Pricing";
import Blog from "./pages/Blog";
import Article from "./pages/Article";
import ScrollToTop from "./components/ScrollToTop";
import Contact from "./pages/Contact";
import Class_content from "./pages/Class-content";





function App() {
  return (
    <div>
      <Navbar/>
      <ScrollToTop/>
      <Routes>
        <Route path="*" element={<NotFound/>}/>
        <Route path="/" element={<Home/>}/>
        <Route path="About" element={<About/>}/>
        <Route path="/Classes" element={<Classes/>}/>
        <Route path="/Pricing" element={<Pricing/>}/>
        <Route path="/blog" element={<Blog/>}/>
        <Route path="/blog/:id" element={<Article/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/Class_content" element={<Class_content/>}/>
      </Routes>
      <Footer/>
      
      
    </div>
  );
}

export default App;