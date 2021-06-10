import React, {useState} from 'react';
import "./App.css"
import NavMenu from "./components/NavMenu/NavMenu";
import ModalWindow from "./components/ModalWindow/ModalWindow";

const App = () => {
  const [modalActive, setModalActive] = useState(false)
  return (
      <div>
          <NavMenu setActive={setModalActive} />
          <ModalWindow active={modalActive} setActive={setModalActive} />
      </div>
  );
};

export default App;
