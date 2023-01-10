import React from "react";
import DropDownPage from "./pages/DropDownPage";
import ButtonPage from "./pages/ButtonPage";
import AccordionPage from "./pages/AccordionPage";
import Route from "./components/Route";
import Sidebar from "./components/Sidebar";

function App() {
  const links = [
    { label: "Dropdown", path: "/" },
    { label: "Buttons", path: "/buttons" },
    { label: "Accordion", path: "/accordion" },
  ];

  return (
    <div>
      <Sidebar links={links} />
      <div>
        <Route path="/">
          <DropDownPage />
        </Route>
        <Route path="/buttons">
          <ButtonPage />
        </Route>
        <Route path="/accordion">
          <AccordionPage />
        </Route>
      </div>
    </div>
  );
}

export default App;
