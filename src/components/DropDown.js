import { useState } from 'react'

function DropDown({ options, onSelect, selection }) {
  const [open, setOpen] = useState(false)

  const handleOptionClick = (option) => {
    onSelect(option)
    setOpen(false)
  }
  
  const renderedOptions = options.filter((option) => {
    return option.value !== selection
  }).map((option, index) => {
    return (
      <div onClick={() => handleOptionClick(option.value)} key={index}>
        {option.value}
      </div>
    )
  })

  return (
    <div>
      <div onClick={() => setOpen(!open)}>{selection}</div>
      {open ? renderedOptions : null}
    </div>
  )
}

export default DropDown;