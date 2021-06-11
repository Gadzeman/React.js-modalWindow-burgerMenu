import React from 'react';
import "./NavMenu.css"

const NavMenu = ({setMenuActive, setActive}) => {
    return (
        <div className={"nav-menu"}>
            <h1 onClick={() => setMenuActive(true)}>Burger Menu</h1>
            <h1 onClick={() => setActive(true)}>Modal Window</h1>
        </div>
    );
};

export default NavMenu;