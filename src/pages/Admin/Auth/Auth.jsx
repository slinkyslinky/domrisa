import React, { useRef } from 'react'
import OrderButton from '../../../components/buttons/OrderButton'
import './Auth.scss'


export default function Auth({getIsAuth}) {
const ref = useRef(null)

    function logIn() {
        if (ref.current.value === "123") {
            getIsAuth(true)
        }
        else {
            getIsAuth(false)
        }
    }


   return (
     <form className='auth'>
        <input ref={ref} type="password" />
        <OrderButton  text='LogIn' link='' form='' onClick={() => logIn() } />
     </form>

   )
}
