import React from 'react'
import Slider from '../slider/Slider';
import SliderPreview from '../slider/SliderPreview';
import './shopModal.scss'

export default function ShopModal({ isVisible = false, setIsModalVisible, imageList }) {

   if (isVisible) {
      return (
         <div className='modal' >
            <div className="modal__content">
               <Slider itemList={imageList} isPreviewOn={true} />
               <SliderPreview itemList={imageList} />
            </div>
            <div className="modal__back" onClick={() => { setIsModalVisible(false) }}></div>
         </div>
      )
   } else return;
}
