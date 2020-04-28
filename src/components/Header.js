import React from 'react';
import { Link } from 'react-router-dom';

function Header() {

    function clickMenuBurger()
    {
        var listMenu = document.getElementById("linkMenuBurger");
        var imgMenu = document.getElementById("imgMenu");

        if (listMenu.classList.contains('zeroOpacity')) {
            listMenu.classList.remove('zeroOpacity');
            imgMenu.classList.remove('imgMenu');
            listMenu.classList.add('oneOpacity');
            imgMenu.classList.add('imgMenuClosed');
        } else if (listMenu.classList.contains('oneOpacity')) {
            listMenu.classList.remove('oneOpacity');
            imgMenu.classList.remove('imgMenuClosed');
            listMenu.classList.add('zeroOpacity');
            imgMenu.classList.add('imgMenu');
        }
    }

    return (
        
        <header className="header">
                
        <Link to="/" className="logo">Henrique <span className="logoSeparadorSobrenome">Cavalcante Veiga</span></Link>

        <ul className="menuDesktop">
            <li className="listItem">
                <Link to="/">Home</Link>    
            </li>
            <li className="listItem">
                <Link to="/curriculum">Curriculum</Link>
            </li>
            <li>
                <Link to="/contacts">Contact</Link> 
            </li>
        </ul>

        {/* Menu DESKTOP */}

        <div onClick={clickMenuBurger} className="menuBurger"><span id="imgMenu" className="imgMenu" style={{width: '25px', height: '37px'}}></span></div>               

        <ul id="linkMenuBurger" className="displayNone zeroOpacity">
            <li id="firstListItem" className="">
                <Link to="/">Home</Link>    
            </li>
            <li className="">
                <Link to="/curriculum">Curriculum</Link>
            </li>
            <li>
                <Link to="/contacts">Contact</Link> 
            </li>
        </ul>
        
    </header>
    );
}

export default Header;