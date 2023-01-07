import { useState } from 'react'

function DropDown({ options, onChange, value }) {
  const [open, setOpen] = useState(false)

  const handleOptionClick = (option) => {
    onChange(option)
    setOpen(false)
  }
  
  const renderedOptions = options.map((option, index) => {
    return (
      <div onClick={() => handleOptionClick(option)} key={index}>
        {option.label}
      </div>
    )
  })

  return (
    <div>
      <div onClick={() => setOpen(!open)}>{ value?.label || 'Select Color' }</div>
      {open ? renderedOptions : null}
    </div>
  )
}

export default DropDown;