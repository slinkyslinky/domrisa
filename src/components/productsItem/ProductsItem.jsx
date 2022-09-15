import React, { useEffect, useRef, useState } from 'react'
import './ProductsItem.scss'
import bant from '../../img/Bant2.png'
import ProductsItemInner from './ProductsItemInner';

export default function ProductsItem({ product, setopenedBox, openedBox }) {



   const [isOpen, setIsOpen] = useState(false)
   const classes = [];
   const coverClasses = [];
   classes[0] = 'products-item';
   coverClasses[0] = 'products-item__cover'
   const id = product.id
   let display = 'none'
   let delayOpen = '';
   let delayClose = '';

   let left = 0;
   let right = 0;
   const timeout = 500





   function shiftProduct() {

      switch (id) {
         case 1:

            switch (openedBox) {
               case 1:
                  left = -5;
                  break;
               case 2:

                  left = -18;
                  classes.push('products-item--hidden')


                  break;
               case 3:

                  left = -14;
                  classes.push('products-item--hidden')

                  break;
               default: return;
            }

            break;
         case 2:
            switch (openedBox) {
               case 1:

                  right = -14;
                  classes.push('products-item--hidden')

                  break;
               case 2:
                  left = -5;
                  break;
               case 3:

                  left = -14;
                  classes.push('products-item--hidden')

                  break;
               default: return;
            }
            break;
         case 3:
            switch (openedBox) {
               case 1:

                  right = -14;
                  classes.push('products-item--hidden')

                  break;
               case 2:

                  right = -18;
                  classes.push('products-item--hidden')

                  break;
               case 3:

                  right = -5;
                  classes.push('products-item--hidden')

                  break;
               default: return;
            }
            break;
         default: return;
      }

   }



   useEffect(() => {
      if (id !== openedBox) {
         classes.splice(1)

         setIsOpen(false)


      }


   }, [openedBox])


   function showProduct(e, color) {


      if (!isOpen) {
         setopenedBox(id)
         setIsOpen(true)
      } else {
         setIsOpen(false)
         setopenedBox(null)
      }






   }
   function hideProduct(e) {

      setIsOpen(false)
      setopenedBox(null)

   }

   // useEffect(() => {

   if (isOpen) {
      classes.push('products-item--open')
      delayOpen = '0.5s';
      display = 'flex'

   } else {
      // classes.push('products-item--animation-reversed')

      delayClose = '0.5s';
      coverClasses.splice(1)

      display = 'none'

   }
   shiftProduct()
   // }, [isOpen])


   return (
      <div className={classes.join(' ')} style={{ marginLeft: left + 'vw', marginRight: right + 'vw', }}  >


         <div className={coverClasses.join(' ')} style={{ backgroundColor: product.color, }}>
            <img className='products-item__bant' src={bant} alt="" onClick={(e) => showProduct(e, product.color)} />

         </div>
         <ProductsItemInner product={product} hideProduct={hideProduct} display={display} />


      </div>
   )



}
