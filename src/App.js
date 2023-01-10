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
    <div className="container mx-auto grid grid-cols-6 gap-4 mt-4">
      <Sidebar links={links} />
      <div className="col-span-5">
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
