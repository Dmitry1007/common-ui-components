import PropType from 'prop-types';

function Button({ 
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  outline,
  rounded,
}) {

  return (
    <button>{children}</button>
  )
}

Button.propTypes = {
  checkVariationValue: ({ primary, secondary, success, warning, danger }) => {
    const count = Number(!!primary) 
      + Number(!!secondary) 
      + Number(!!success) 
      + Number(!!warning) 
      + Number(!!danger);

    if (count > 1) {
      throw new Error('Only one variation can be used at a time.');
    }
  },
}

export default Button;