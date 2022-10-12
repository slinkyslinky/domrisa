import React from 'react'
import './Admin.scss'


import { useState } from 'react'
import { useEffect } from 'react'
import ScrollToTop from '../../utils/scrollToTop'
import Auth from './Auth/Auth'
import Control from './Control/Control'

export default function Admin({shopList}) {

    const [isAuth, setIsAuth] = useState(false)

    function getIsAuth(value) {
        setIsAuth(value)
    }

    if (!isAuth) {
        return (
            <ScrollToTop>
              <div className="admin" >
                 <div className="container">
                    <Auth getIsAuth={getIsAuth} />
                 </div>
               
              </div>
              </ScrollToTop>
        
           )
    } else {
        return (
        
                <ScrollToTop>
                  <div className="admin" >
                     <div className="container">
                        <Control shopList = {shopList}/>
                     </div>
                   
                  </div>
                  </ScrollToTop>
            
              
        )
    }
  
}
