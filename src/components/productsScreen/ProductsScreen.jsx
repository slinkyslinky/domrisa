import React, { useEffect, useState, } from 'react'
import ProductsItem from '../productsItem/ProductsItem'
import './productsScreen.scss'
import { colors } from '../../variables/variables.js'
import firstImg from '../../img/балалайка.png'
import secondImg from '../../img/py4u3x9Z--Y.jpg'
import thirdImg from '../../img/шоппер.png'
import { Link } from 'react-router-dom'
export default function ProductsScreen() {

   const [openedBox, setopenedBox] = useState(0);


   const productsList = [
      { id: 1, title: "Брошь из полимерной глины", text: "Полимерная глина — это пластичный материал, который после запекания становится похож на пластик. Поэтому изделия из нее достаточно прочные. Создание из полимерной глины музыкальным инструментов достаточно трудное дело. На первом этапе, вручную создается форма, прикрепляются лады, подставка и прочее. На втором, изделие запекается и шлифуется. Третий этап — покраска и финалный — лакировка.", img: firstImg, color: colors.green, },
      { id: 2, title: "Украшения из бисера", text: "Такие украшения прекрансо вписываются в любой образ, тем более если они сделаны специально для Вас. Я делаю украшения из разнообразного бисера, но главное, что их отличает — использование полимерной глины. Это дает огромные возможности. Можно сделать любой инструмент, слова, знаки и всё, на что хватит фантазии.", img: secondImg, color: colors.violet, },
      { id: 3, title: "Роспись по ткани", text: "Роспись по ткани производиться специальными красками, которые закрепляются термообработкой. При правильном уходе такие принты живут долгие годы. Я осуществляю роспись различных вещей: футболок, джинсовых курток, джинс, шопперов, свитшотов, тканивой обуви и др. Чтобы узнать руководство по уходу свяжитесь со мной.", img: thirdImg, color: colors.yellow, },

   ]


   // setRandomAnimation()





   return (

      <div id='productsScreen' className='products-screen screen' >
         <div className="container ">
            <h2>Отличные подарки</h2>
            <div className="products-container" id='productsContainer'>
               {productsList.map(product =>

                  <ProductsItem
                     key={product.id}
                     product={product}

                     setopenedBox={setopenedBox}
                     openedBox={openedBox}
                  />
               )}
            </div>
            <article className='products-article'>
               <p> Любое из этих изделий станет замечательным подарком для близких или для себя. для тех кто дорожит деталями и уникальнотью</p>

            </article>
            <span>Посмотрите <Link to="/about/reviews">отзывы</Link></span>


         </div>


      </div>

   )
}
