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
   let leftPos;
   const timeout = 500
   let minShift;
   let midShift;
   let maxShift;
   let centerShift;


   if (window.innerWidth < 992) {
      minShift = -12;
      centerShift = 0;
      midShift = 12;
      maxShift = 4;

   } else {
      minShift = 5;
      centerShift = 5;
      midShift = 14;
      maxShift = 18;
   }


   function posProduct(center, leftest, lefter, righter, rightest) {

      switch (id) {
         case 1:

            switch (openedBox) {
               case 1:
                  leftPos = center
                  break;
               case 2:

                  leftPos = lefter;
                  classes.push('products-item--hidden')


                  break;
               case 3:

                  leftPos = leftest;
                  classes.push('products-item--hidden')

                  break;
               default: return;
            }

            break;
         case 2:
            switch (openedBox) {
               case 1:

                  leftPos = righter;
                  classes.push('products-item--hidden')

                  break;
               case 2:
                  leftPos = center;
                  break;
               case 3:

                  leftPos = lefter;
                  classes.push('products-item--hidden')

                  break;
               default: return;
            }
            break;
         case 3:
            switch (openedBox) {
               case 1:

                  leftPos = rightest;
                  classes.push('products-item--hidden')

                  break;
               case 2:

                  leftPos = righter;
                  classes.push('products-item--hidden')

                  break;
               case 3:

                  leftPos = center;
                  classes.push('products-item--hidden')

                  break;
               default: return;
            }
            break;
         default: return;
      }

   }

   function shiftProduct(min, mid, max, center) {

      switch (id) {
         case 1:

            switch (openedBox) {
               case 1:
                  left = -min;
                  break;
               case 2:

                  left = -max;
                  classes.push('products-item--hidden')


                  break;
               case 3:

                  left = -mid;
                  classes.push('products-item--hidden')

                  break;
               default: return;
            }

            break;
         case 2:
            switch (openedBox) {
               case 1:

                  right = -mid;
                  classes.push('products-item--hidden')

                  break;
               case 2:
                  left = -center;
                  break;
               case 3:

                  left = -mid;
                  classes.push('products-item--hidden')

                  break;
               default: return;
            }
            break;
         case 3:
            switch (openedBox) {
               case 1:

                  right = -mid;
                  classes.push('products-item--hidden')

                  break;
               case 2:

                  right = -max;
                  classes.push('products-item--hidden')

                  break;
               case 3:

                  right = -min;
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

   if (window.innerWidth < 360) {
      posProduct("calc(50% - 75px)", "-50%", "-40%", "calc(140% - 150px)", "calc(150% - 150px)")
   } 
      else
         if (window.innerWidth < 454) {
            posProduct("calc(50% - 100px)", "-60%", "-50%", "calc(150% - 200px)", "calc(160% - 200px)")
         } else
            if (window.innerWidth < 500) {
               posProduct("calc(50% - 135px)", "-70%", "-55%", "calc(155% - 270px)", "calc(170% - 270px)")
            } else
               if (window.innerWidth < 565) {
                  posProduct("calc(50% - 135px)", "-55%", "-44%", "calc(144% - 270px)", "calc(155% - 270px)")
               } else
                  if (window.innerWidth < 630) {
                     posProduct("calc(50% - 135px)", "-44%", "-34%", "calc(134% - 270px)", "calc(144% - 270px)")
                  } else
                     if (window.innerWidth < 992) {
                        posProduct("calc(50% - 135px)", "-35%", "-25%", "calc(125% - 270px)", "calc(135% - 270px)")

                     } else shiftProduct(minShift, midShift, maxShift, centerShift)



   return (
      <div className={classes.join(' ')} style={{ marginLeft: left + 'vw', marginRight: right + 'vw', left: leftPos }}  >


         <div className={coverClasses.join(' ')} style={{ backgroundColor: product.color, }}>
            <img className='products-item__bant' src={bant} alt="" onClick={(e) => showProduct(e, product.color)} />

         </div>
         <ProductsItemInner product={product} hideProduct={hideProduct} display={display} />


      </div>
   )



}
