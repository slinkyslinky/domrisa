import React from 'react'
import Footer from '../components/footer/Footer'
import ShopItem from '../components/shopItem/ShopItem'
import image1 from '../img/сережки.png'
import image2 from '../img/балалайка.png'
import image3 from '../img/домра рука.png'
import personal from '../img/individ.svg'
import OrderButton from '../components/buttons/OrderButton'
import { useState } from 'react'
import { useEffect } from 'react'

export default function Shop() {
   const shopList = [
      { id: 0, name: "Индивидуальный заказ", imageList: [{ id: 1, img: personal, alt: '' }], price: 0, description: 'Выбрав индивидуальный заказ, Вы свяжитесь со мной, и вместе мы придумаем, что-то оригинальное. Любые Ваши идеи я постараюсь воплотить в неповториме вещи, которые будут радовать Вас или Ваших близких долгие годы.' },
      {
         id: 1, name: 'Брошь', price: 1200, imageList: [
            { id: 1, img: image1, alt: '' },
            { id: 2, img: image2, alt: '' },
            { id: 3, img: image3, alt: '' },
            { id: 4, img: image3, alt: '' },
            { id: 5, img: image3, alt: '' },
            { id: 6, img: image2, alt: '' },
            { id: 7, img: image1, alt: '' },
         ], description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores ipsum ducimus deserunt saepe sint alias cumque in provident, quasi minima?', valute: 'р'
      },
      {
         id: 2, name: 'Брошь', price: 1000, imageList: [
            { id: 1, img: image1, alt: '' },
            { id: 2, img: image2, alt: '' },
            { id: 3, img: image3, alt: '' },
         ], description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores ipsum ducimus deserunt saepe sint alias cumque in provident, quasi minima?', valute: 'р'
      },
   ]

   const [ordered, setOrdered] = useState(0)
   let showOrderButton = 0;
   if (ordered > 0) {
      showOrderButton = 1
   } else showOrderButton = 0


   let orders = 0;

   if (localStorage.length > 0) {

      for (let i = 0; i < localStorage.length; i++) {
         if (localStorage.key(i).substring(0, 5) == 'order') {
            orders++;
         }
      }
   }

   useEffect(() => {
      setOrdered(orders)
   }, [])


   return (
      <div id='shop'>
         <OrderButton link="/order/" text="Перейти к заказу" styles={{ textTransform: "none", position: "absolute", top: "4vh", right: "4vw", fontSize: "26px", opacity: showOrderButton, }} />
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
         <Footer />
      </div>
   )
}
