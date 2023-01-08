import { useState, useEffect, useRef } from "react";
import { GoChevronDown } from "react-icons/go";
import Panel from "./Panel";

function DropDown({ options, onChange, value }) {
  const [open, setOpen] = useState(false);
  const divEl = useRef();

  useEffect(() => {
    const handler = (event) => {
      if (!divEl.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("click", handler, true);
    return () => {
      document.removeEventListener("click", handler, true);
    };
  }, []);

  const handleOptionClick = (option) => {
    onChange(option);
    setOpen(false);
  };

  const renderedOptions = options.map((option, index) => {
    return (
      <div
        className="hover:bg-sky-100 rounded cursor-pointer p-1"
        onClick={() => handleOptionClick(option)}
        key={index}
      >
        {option.label}
      </div>
    );
  });

  return (
    <div ref={divEl} className="w-48 relative">
      <Panel
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        {value?.label || "Select Color"}
        <GoChevronDown className="text-lg" />
      </Panel>
      {open ? (
        <Panel className="absolute top-full">{renderedOptions}</Panel>
      ) : null}
    </div>
  );
}

export default DropDown;
