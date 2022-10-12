import React from 'react'
import Footer from '../components/footer/Footer'
import ShopItem from '../components/shopItem/ShopItem'

import OrderButton from '../components/buttons/OrderButton'
import { useState } from 'react'
import { useEffect } from 'react'
import ScrollToTop from '../utils/scrollToTop'
import { server } from '../variables/variables'
import Preloader from '../components/preloader/Preloader'

export default function Shop({shopList, isFullfield}) {


 
   
   

 
   const [isLoaded, setIsLoaded] = useState(false)
   window.addEventListener('load', () => {
      setIsLoaded(true)
   })

   const [ordered, setOrdered] = useState(0)
   let showOrderButton = 0;
   if (ordered > 0) {
      showOrderButton = 1
   } else showOrderButton = 0


   let orders = 0;

   if (sessionStorage.length > 0) {

      for (let i = 0; i < sessionStorage.length; i++) {
         if (sessionStorage.key(i).substring(0, 5) == 'order') {
            orders++;
         }
      }
   }

   useEffect(() => {
      setOrdered(orders)
   }, [])
   let orderButtonText
   if (window.innerWidth >540) {
      orderButtonText = 'Перейти к заказу'
   } else {
      orderButtonText = 'К заказу'
   }

 

   return (
      <ScrollToTop>
<div id='shop' className='shop'>
         <Preloader isFullfield={isFullfield} isLoaded={isLoaded}/>
         <OrderButton link="/order/" text={orderButtonText} styles={{ opacity: showOrderButton, }} />
         <div className="container">

            {
               shopList.map(shopItem =>
                  <ShopItem
                     key={shopItem.id}
                     id={shopItem.id}
                     name={shopItem.name}
                     description={shopItem.description}
                     image={shopItem.imageList[0].img}
                     price={shopItem.price}
                     valute={shopItem.valute}
                     imageList={shopItem.imageList}
                     ordered={ordered}
                     getOrdered={setOrdered}
                  />)
            }


         </div>

      </div>
      </ScrollToTop>
      
   )
}
