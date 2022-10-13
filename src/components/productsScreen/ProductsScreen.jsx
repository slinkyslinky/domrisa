import React, { useEffect, useRef, useState, } from 'react'
import ProductsItem from '../productsItem/ProductsItem'
import './productsScreen.scss'
import { colors } from '../../variables/variables.js'
import firstImg from '../../img/boxes/firstBox.png'
import secondImg from '../../img/boxes/secondBox.png'
import thirdImg from '../../img/boxes/thirdBox.png'
import bant1 from '../../img/boxes/bant2.png'
import bant2 from '../../img/boxes/bant2.png'
import bant3 from '../../img/boxes/bant2.png'
import { Link } from 'react-router-dom'
export default function ProductsScreen() {

   const [openedBox, setopenedBox] = useState(0);
   const article = useRef(null)

   const productsList = [
      { id: 1, title: "Брошь из полимерной глины", text: "Полимерная глина — это пластичный материал, который после запекания становится похож на пластик. Поэтому изделия из нее достаточно прочные. Создание из полимерной глины музыкальным инструментов достаточно трудное дело. На первом этапе, вручную создается форма, прикрепляются лады, подставка и прочее. На втором, изделие запекается и шлифуется. Третий этап — покраска и финалный — лакировка.", img: firstImg, bant: bant1, color: colors.green, },
      { id: 2, title: "Украшения из бисера", text: "Такие украшения прекрансо вписываются в любой образ, тем более если они сделаны специально для Вас. Я делаю украшения из разнообразного бисера, но главное, что их отличает — использование полимерной глины. Это дает огромные возможности. Можно сделать любой инструмент, слова, знаки и всё, на что хватит фантазии.", img: secondImg, bant: bant2, color: colors.violet, },
      { id: 3, title: "Роспись по ткани", text: "Роспись по ткани производиться специальными красками, которые закрепляются термообработкой. При правильном уходе такие принты живут долгие годы. Я осуществляю роспись различных вещей: футболок, джинсовых курток, джинс, шопперов, свитшотов, тканивой обуви и др. Чтобы узнать руководство по уходу свяжитесь со мной.", img: thirdImg, bant: bant3, color: colors.yellow, },

   ]


   // setRandomAnimation()
   useEffect(() => {
      if (window.innerWidth < 993) {
         article.current.style.opacity = 0;
         setTimeout(() => {
            if ((openedBox)) {
               article.current.classList.add('article-of-product')
               article.current.innerText = productsList[openedBox - 1].text

            }
            if ((openedBox == null)) {
               article.current.classList.remove('article-of-product')
               article.current.innerText = "Любое из этих изделий станет замечательным подарком для близких или для себя. для тех кто дорожит деталями и уникальнотью"
            }
            article.current.style.opacity = 1;
         }, 500)
      }


   }, [openedBox])






   return (

      <div id='productsScreen' className='products-screen screen' >
         <div className="container ">
            <h2>Отличные подарки</h2>
            <div className="products-container" id='productsContainer'>
               {productsList.map(product =>

                  <ProductsItem
                     key={product.id}
                     product={product}
                     bant={product.bant}
                     setopenedBox={setopenedBox}
                     openedBox={openedBox}
                  />
               )}
            </div>
            <article ref={article} className='products-article'>
               Любое из этих изделий станет замечательным подарком для близких или для себя. для тех кто дорожит деталями и уникальнотью

            </article>
            <span>Посмотрите <Link to="/about/reviews">отзывы</Link></span>


         </div>


      </div>

   )
}
