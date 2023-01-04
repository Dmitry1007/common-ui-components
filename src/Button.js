// Not using the prop-types package
// Bc we don't have any default checks yet
// import PropTypes from 'prop-types';
// import classname from 'classnames';

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
    <button className="px-3 py-1.5 border border-blue-600 bg-blue-500 text-white">{children}</button>
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