import React, {useState} from 'react';
import "./Menu.css"
import "./MenuMedia.css"

const Menu = () => {
    const [burgerActive, setBurgerActive] = useState(false)
    return (
        <div className={"menu-wrap"}>
            <div className={burgerActive ? "menu-burger burger-active" : "menu-burger"} onClick={() => setBurgerActive(!burgerActive)}>
                <span>{/*burger menu for media*/}</span>
            </div>
            <div className={burgerActive ? "menu-nav burger-active" : "menu-nav"}>
                <h3>Home</h3>
                <h3>About</h3>
                <h3>Contacts</h3>
            </div>
            <div className={"menu-logo"}>
                <h1>Modal Window</h1>
            </div>
        </div>
    );
};

export default Menu;