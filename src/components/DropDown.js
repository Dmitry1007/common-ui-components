import { useState } from 'react'

function DropDown({ options }) {
  const [selectedColor, setSelectedColor] = useState('Selected...')
  const [showColors, setShowColors] = useState(false)

  const handleSelectColor = (option) => {
    setSelectedColor(option);
    setShowColors(false);
  }
  
  const renderColors = options.filter((option) => {
    return option.value !== selectedColor
  }).map((option, index) => {
    return (
      <div onClick={() => handleSelectColor(option.value)} key={index}>
        {option.value}
      </div>
    );
  })

  return (
    <div>
      <div onClick={() => setShowColors(!showColors)}>{selectedColor}</div>
      {showColors ? renderColors : null}
    </div>
  );
}

export default DropDown;