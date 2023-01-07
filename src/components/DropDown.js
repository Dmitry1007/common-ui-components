import { useState } from 'react'

function DropDown({ options }) {
  const [selected, setSelected] = useState('Selected...')
  const [show, setShow] = useState(false)

  const handleSelected = (option) => {
    setSelected(option);
    setShow(false);
  }
  
  const renderOptions = options.filter((option) => {
    return option.value !== selected
  }).map((option, index) => {
    return (
      <div onClick={() => handleSelected(option.value)} key={index}>
        {option.value}
      </div>
    );
  })

  return (
    <div>
      <div onClick={() => setShow(!show)}>{selected}</div>
      {show ? renderOptions : null}
    </div>
  );
}

export default DropDown;