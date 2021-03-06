import React from "react";
import style from './Header.module.scss';
import Nav from "../Nav/Nav";

function Header() {
    return (
       <div className={style.fix}>
           <div className={style.header}>
               <div className={style.navContainer}>
                   <Nav/>
               </div>
           </div>
       </div>
    );
}

export default Header;
