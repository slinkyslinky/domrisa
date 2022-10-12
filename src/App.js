import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./components/nav/Nav";
import Main from "./pages/Main";
import Shop from "./pages/Shop";
import About from "./pages/About";

import Order from "./pages/Order";
import Reviews from "./components/reviews/Reviews";
import Admin from "./pages/Admin/Admin"
import ContactFormScreen from "./components/contactFormScreen/ContactFormScreen";
import Footer from "./components/footer/Footer";
import { server } from "./variables/variables";



function App() {

   // window.onresize = (e) => { e.preventDefault() }
   const [shopList, setShopList] = useState([])
   const [isFullfield, setIsFullfield] = useState(false)


   useEffect(()=> {
      fetch(server.URL + '/data/products')
      .then(response => response.json())
      .then(response => {setShopList(response); setIsFullfield(true)})
      
   }, [])

   return (


      <BrowserRouter>
         <Nav />
         <Routes>
           
            <Route path='/' element={<Main />} />
            <Route path='/contactform/' element={<ContactFormScreen />} />
            <Route path='/shop/' element={<Shop shopList={shopList} isFullfield={isFullfield}/>} />
            <Route path='/about/' element={<About />} />
            <Route path='/about/reviews' element={<Reviews />} />
            <Route path='/order/' element={<Order />} />
            <Route path='/admin/' element={<Admin shopList={shopList}/>} />

         </Routes>
         <Footer />
      </BrowserRouter>





   );
}

export default App;
