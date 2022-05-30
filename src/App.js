import React from "react";
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Yoga from "./components/Yoga";
import Meditation from "./components/Meditation";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { AuthContextProvider } from "./context/AuthContext";
import ProctectedRoute from "./components/ProctectedRoute";


function App() {
  return (
    <BrowserRouter>
    <AuthContextProvider>
      <Navbar />
      
      <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/yoga' element={<ProctectedRoute><Yoga/></ProctectedRoute>} />
      <Route path='/meditation' element={<ProctectedRoute><Meditation /></ProctectedRoute>} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
      </Routes>
      <Footer />
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
