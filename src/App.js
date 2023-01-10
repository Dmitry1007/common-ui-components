import React from "react";
import ButtonPage from "./pages/ButtonPage";
import DropDownPage from "./pages/DropDownPage";
import AccordionPage from "./pages/AccordionPage";
import Link from "./components/Link";
import Route from "./components/Route";

function App() {
  return (
    <div>
      <Link to="/buttons">Buttons</Link>
      <Link to="/dropdown">DropDowns</Link>
      <Link to="/accordion">Accordion</Link>
      <div>
        <Route path="/buttons">
          <ButtonPage />
        </Route>
        <Route path="/dropdown">
          <DropDownPage />
        </Route>
        <Route path="/accordion">
          <AccordionPage />
        </Route>
      </div>
    </div>
  );
}

export default App;
