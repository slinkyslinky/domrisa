import React from 'react'

import './shopModal.scss'
import SliderWrapper from '../slider/SliderWrapper';


export default function ShopModal({ isVisible = false, setIsModalVisible, imageList }) {




   if (isVisible) {

      document.querySelector('body').style = 'overflow: hidden'

      return (
         <div className='modal' >
           <div className='close-button' onClick={() => { setIsModalVisible(false) }} />
            <div className="modal__content">
            
               <SliderWrapper imageList={imageList} hasPreview={true} />
               


            </div>
            <div className="modal__back" onClick={() => { setIsModalVisible(false) }}></div>
         </div>
      )
   } else { document.querySelector('body').style = ''; return };
}
