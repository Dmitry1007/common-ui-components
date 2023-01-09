import DropDown from "../components/DropDown";
import { useState } from "react";
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
  ];

  return (
    <div className="flex">
      <DropDown options={options} onChange={handleSelect} value={selection} />
      <TailwindDropDown />
    </div>
  );
}

export default DropDownPage;
