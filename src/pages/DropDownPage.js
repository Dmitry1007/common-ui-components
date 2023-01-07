import DropDown from '../components/DropDown'
import { useState } from 'react'

function DropDownPage () {
  const [selection, setSelection] = useState(null)

  const handleSelect = (option) => {
    setSelection(option)
  };

  const options = [
    { label: 'The Color Red', value: 'red' },
    { label: 'The Color Blue', value: 'blue' },
    { label: 'The Color Green', value: 'green'},
  ]

  return (
    <div>
      <DropDown options={options} onSelect={handleSelect} selection={selection} />
    </div>
  );
}

export default DropDownPage;