import DropDown from '../components/DropDown'

function DropDownPage () {
  const options = [
    { label: 'The Color Red', value: 'red' },
    { label: 'The Color Blue', value: 'blue' },
    { label: 'The Color Green', value: 'green'},
  ];

  return (
    <div>
      <DropDown options={options} />
    </div>
  );
}

export default DropDownPage;