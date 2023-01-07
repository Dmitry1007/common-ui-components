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

  let content = 'Select a Color'
  if (selection) {
    content = selection
  }
  
  return (
    <div>
      <div onClick={() => setOpen(!open)}>{content}</div>
      {open ? renderedOptions : null}
    </div>
  )
}

export default DropDown;