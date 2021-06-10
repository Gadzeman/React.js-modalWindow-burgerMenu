import React from 'react';
import "./NavMenu.css"

const NavMenu = ({setActive}) => {
    return (
        <div className={"nav-menu"}>
            <h1>Burger Menu</h1>
            <h1 onClick={() => setActive(true)}>Modal Window</h1>
        </div>
    );
};

export default NavMenu;