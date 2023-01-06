import { useState } from 'react'

const colors = ['Selected...', 'Red', 'Green', 'Blue'];

function DropDown() {
  const [selectedColor, setSelectedColor] = useState(colors[0])
  const [showColors, setShowColors] = useState(false)

  const handleClick = (color) => {
    setSelectedColor(color);
    setShowColors(false);
  }
  
  const renderColors = colors.slice(1).map((color, index) => {
    return (
      <div onClick={() => handleClick(color)} key={index}>{color}</div>
    )
  })

  return (
    <div>
      <div onClick={() => setShowColors(!showColors)}>{selectedColor}</div>
      {showColors ? renderColors : null}
    </div>
  );
}

export default DropDown;