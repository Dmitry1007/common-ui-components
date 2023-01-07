import { useState } from 'react'
import { GoChevronDown } from 'react-icons/go'

function DropDown({ options, onChange, value }) {
  const [open, setOpen] = useState(false)

  const handleOptionClick = (option) => {
    onChange(option)
    setOpen(false)
  }
  
  const renderedOptions = options.map((option, index) => {
    return (
      <div className="hover:bg-sky-100 rounded cursor-pointer p-1" onClick={() => handleOptionClick(option)} key={index}>
        {option.label}
      </div>
    )
  })

  return (
    <div className="w-48 relative">
      <div
        className="flex justify-between items-center cursor-pointer border rounded p-3 shadow bg-white w-full"
        onClick={() => setOpen(!open)}
      >
        {value?.label || "Select Color"}
        <GoChevronDown className="text-lg"/>
      </div>
      {open ? <div className="absolute top-full border rounded p-3 shadow bg-white w-full">{renderedOptions}</div> : null}
    </div>
  );
}

export default DropDown;