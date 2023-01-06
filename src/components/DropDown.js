import { useState } from 'react'

const colors = ['Red', 'Green', 'Blue'];

function DropDown() {
  const [selectedColor, setSelectedColor] = useState('Selected...')
  const [showColors, setShowColors] = useState(false)

  const handleSelectColor = (color) => {
    setSelectedColor(color);
    setShowColors(false);
  }
  
  const renderColors = colors.filter((color) => {
    return color !== selectedColor
  }).map((color, index) => {
    return (
      <div onClick={() => handleSelectColor(color)} key={index}>
        {color}
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