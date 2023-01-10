import React from "react";
// import AccordionPage from './pages/AccordionPage';
// import ButtonPage from './pages/ButtonPage';
// import DropDownPage from "./pages/DropDownPage";
import Link from "./components/Link";

function App() {
  return (
    <div>
      <Link to="/dropdown">Dropdown</Link>
      <Link to="/accordion">Accordion</Link>
    </div>
  );
}

export default App;
