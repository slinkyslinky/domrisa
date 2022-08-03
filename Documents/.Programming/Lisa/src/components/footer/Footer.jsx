import React from 'react';
import './footer.scss';
import { Link } from 'react-router-dom';

import Contacts from '../contacts/Contacts';

export default function Footer() {
   return (
      <footer>
         <div className="footer__item footer__nav">
            <ul>
               <li><Link to="/shop/">Магазин</Link></li>
               <li><Link to="/">Заказать</Link></li>
               <li><Link to="/about/">Обо мне</Link></li>
            </ul>
         </div>
         <div className="footer__item">
            <Contacts />
            <p>© 2022 Elisa domrisa - изделия ручной работы</p>
         </div>
         <div className="footer__item">
            <picture>
               <img src="" alt="" />
            </picture>
            <picture>
               <img src="" alt="" />
            </picture>
         </div>
      </footer>
   )
}
