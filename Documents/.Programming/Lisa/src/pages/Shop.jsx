import React from 'react'
import Footer from '../components/footer/Footer'
import ShopItem from '../components/shopItem/ShopItem'
import image1 from '../img/сережки.png'
import image2 from '../img/балалайка.png'
import image3 from '../img/домра рука.png'
import personal from '../img/individ.svg'

export default function Shop() {
   const shopList = [
      { id: 0, name: "Индивидуальный заказ", imageList: [{ id: 1, img: personal, alt: '' }], price: '', description: 'Выбрав индивидуальный заказ, Вы свяжитесь со мной, и вместе мы придумаем, что-то оригинальное. Любые Ваши идеи я постараюсь воплотить в неповториме вещи, которые будут радовать Вас или Ваших близких долгие годы.' },
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
         id: 2, name: 'Брошь', price: 1200, imageList: [
            { id: 1, img: image1, alt: '' },
            { id: 2, img: image2, alt: '' },
            { id: 3, img: image3, alt: '' },
         ], description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores ipsum ducimus deserunt saepe sint alias cumque in provident, quasi minima?', valute: 'р'
      },
   ]


   return (
      <div id='shop'>
         <div className="container">

            {
               shopList.map(shopItem =>
                  <ShopItem
                     key={shopItem.id}
                     name={shopItem.name}
                     description={shopItem.description}
                     image={shopItem.imageList[0].img}
                     price={shopItem.price}
                     valute={shopItem.valute}
                     imageList={shopItem.imageList}
                  />)
            }


         </div>
         <Footer />
      </div>
   )
}
