import React from 'react'
import ShopItem from '../components/shopItem/ShopItem'

import { useEffect, useState } from 'react'
import OrderButton from '../components/buttons/OrderButton'
import Preloader from '../components/preloader/Preloader'
import ScrollToTop from '../utils/scrollToTop'

export default function Shop({ shopList, isFullfield }) {

   const [isLoaded, setIsLoaded] = useState(false);
   const [ordered, setOrdered] = useState(0);

   let showOrderButton = 0;
   let orders = 0;
   let orderButtonText;

   window.addEventListener('load', () => {
      setIsLoaded(true)
   })

   if (ordered > 0) {
      showOrderButton = 1
   } else showOrderButton = 0

   if (sessionStorage.length > 0) {
      for (let i = 0; i < sessionStorage.length; i++) {
         if (sessionStorage.key(i).substring(0, 5) === 'order') {
            orders++;
         }
      }
   }

   useEffect(() => {
      setOrdered(orders)
   }, [])

   if (window.innerWidth > 540) {
      orderButtonText = 'Перейти к заказу'
   } else {
      orderButtonText = 'К заказу'
   }

   return (
      <ScrollToTop>
         <div id='shop' className='shop'>
            <Preloader isFullfield={isFullfield} isLoaded={isLoaded} />
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
