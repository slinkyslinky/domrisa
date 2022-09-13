import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/footer/Footer'
import OrderBox from '../components/orderBox/OrderBox'

export default function Order() {

   const [screen, setScreen] = useState(0)

   if (screen === 0) {
      return (
         <div id='order'>
            <div className="container">
               <OrderBox setScreen={setScreen} />
            </div>
            <Footer />
         </div>
      )
   }

   else return (


      <div id='order'>
         <div className="container">
            <div className="order__second-screen">
               <span>Заявка успешно отправлена!</span><br />
               <span className='order-second-text'> В ближайшее время я свяжусь с вами чтобы подтвердить заказ:)</span><br />
               <Link to="/shop" >Назад</Link>
            </div>

         </div>
         <Footer style={{ position: "absolute", bottom: 0, left: 0 }} />
      </div>
   )
}
