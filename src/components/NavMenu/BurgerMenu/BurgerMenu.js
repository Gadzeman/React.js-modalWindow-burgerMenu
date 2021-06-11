import React from 'react';
import "./BurgerMenu.css"

const BurgerMenu = ({active, setActive}) => {
    return (
        <div className={active ? "menu menu-active" : "menu"} onClick={() => setActive(false)}>
            <div className={"blur"} />
            <div className={"menu-content"} onClick={e => e.stopPropagation()}>
                {/*  content  */}
            </div>
        </div>
    );
};

export default BurgerMenu;