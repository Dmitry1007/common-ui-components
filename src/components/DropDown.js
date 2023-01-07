import { useState } from 'react'

function DropDown({ options, onSelect, selection }) {
  const [open, setOpen] = useState(false)

  const handleOptionClick = (option) => {
    onSelect(option)
    setOpen(false)
  }
  
  const renderedOptions = options.map((option, index) => {
    return (
      <div onClick={() => handleOptionClick(option)} key={index}>
        {option.value}
      </div>
    )
  })

  return (
    <div>
      <div onClick={() => setOpen(!open)}>{ selection?.value || 'Select Color' }</div>
      {open ? renderedOptions : null}
    </div>
  )
}

export default DropDown;