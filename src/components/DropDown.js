import { useState } from 'react'

// First rough go at it, NOT the best way to do this
function DropDown({ options }) {
  const [selectedColor, setSelectedColor] = useState('Selected...')
  const [showColors, setShowColors] = useState(false)

  const handleSelectColor = (option) => {
    setSelectedColor(option);
    setShowColors(false);
  }
  
  const renderColors = options.filter((option) => {
    return option !== selectedColor
  }).map((option, index) => {
    return (
      <div onClick={() => handleSelectColor(option)} key={index}>
        {option}
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