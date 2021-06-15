import React, {useState} from 'react';
import "./NavMenu.css"
import "./NavMenuMedia.css"

const NavMenu = () => {
    const [active, setActive] = useState(false)
    return (
        <div className={"menu"}>
            <div className={active ? "nav-menu active" : "nav-menu"}>
                <h3>Home</h3>
                <h3>About us</h3>
                <h3>Contacts</h3>
            </div>
            <div className={active ? "burger-menu active" : "burger-menu"} onClick={() => setActive(!active)}>
                <span> </span>
            </div>
        </div>
    );
};

export default NavMenu;