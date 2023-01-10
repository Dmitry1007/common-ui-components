import React from "react";
import ButtonPage from './pages/ButtonPage';
import DropDownPage from "./pages/DropDownPage";
import AccordionPage from './pages/AccordionPage';
// import Link from "./components/Link";
import Route from "./components/Route";

function App() {
  return (
    <div>
      <Route path="/buttonspage">
        <ButtonPage />
      </Route>
      <Route path="/dropdown">
        <DropDownPage />
      </Route>
      <Route path="/accordion">
        <AccordionPage />
      </Route>
    </div>
  );
}

export default App;
