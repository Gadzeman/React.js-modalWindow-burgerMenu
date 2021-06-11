import React, {useState} from 'react';
import "./App.css"
import NavMenu from "./components/NavMenu/NavMenu";
import ModalWindow from "./components/NavMenu/ModalWindow/ModalWindow";
import BurgerMenu from "./components/NavMenu/BurgerMenu/BurgerMenu";

const App = () => {
  const [modalActive, setModalActive] = useState(false)
  const [menuActive, setMenuActive] = useState(false)
  return (
      <div>
          <NavMenu setMenuActive={setMenuActive} setActive={setModalActive} />
          <ModalWindow active={modalActive} setActive={setModalActive} />
          <BurgerMenu active={menuActive} setActive={setMenuActive} />
      </div>
  );
};

export default App;
