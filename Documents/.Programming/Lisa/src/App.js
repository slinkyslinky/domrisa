import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./components/nav/Nav";
import Main from "./pages/Main";
import Shop from "./pages/Shop";
import About from "./pages/About";

function App() {
   return (
      <div>

         <BrowserRouter>
            <Nav />
            <Routes>
               <Route path='/' element={<Main />} />
               <Route path='/shop/' element={<Shop />} />
               <Route path='/about/' element={<About />} />

            </Routes>
         </BrowserRouter>



      </div>

   );
}

export default App;
