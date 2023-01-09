import { useState } from "react";
import DropDown from "../components/DropDown";
import TailwindDropDown from "../components/TailwindDropDown";

function DropDownPage() {
  const [selection, setSelection] = useState(null);

  const handleSelect = (option) => {
    setSelection(option);
  };

  const options = [
    { label: "Red", value: "red" },
    { label: "Blue", value: "blue" },
    { label: "Green", value: "green" },
    { label: "Yellow", value: "yellow"},
    { label: "Purple", value: "purple" },
  ];

  return (
    <div className="flex">
      <DropDown options={options} onChange={handleSelect} value={selection} />
      <TailwindDropDown options={options} />
    </div>
  );
}

export default DropDownPage;
