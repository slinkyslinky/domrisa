import React from 'react';
import './footer.scss';
import Logo from '../logo/Logo'
import title from '../../img/title.png'
import { Link } from 'react-router-dom';
import Contacts from '../contacts/Contacts';

export default function Footer({ style }) {

   let copyright;

   if (window.innerWidth < 540) {
      copyright = "© 2022 Elisa domrisa"
   } else { copyright = "© 2022 Elisa domrisa - изделия ручной работы" }

   return (
      <footer style={style}>
         <div className="footer__item footer__nav">
            <ul>
               <li><Link to="/shop/">Магазин</Link></li>
               <li><Link to="/">Заказать</Link></li>
               <li><Link to="/about/">Обо мне</Link></li>
            </ul>
         </div>
         <div className="footer__item">
            <p></p>
            <Contacts />
            <p>{copyright}</p>
         </div>
         <div className="footer__item">
            <a href="#main"><Logo /></a>
            <picture>
               <img src={title} alt="" />
            </picture>
         </div>
      </footer>
   )
}
