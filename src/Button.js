// Not using the prop-types package
// Bc we don't have any default checks yet
// import PropTypes from 'prop-types';
import className from 'classnames';

function Button({
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  outline,
  rounded,
  ...rest
}) {

  const classes = className("flex items-center px-3 py-1.5 border", {
    "border-blue-500 bg-blue-500 text-white": primary,
    "border-blue-200 bg-blue-200 text-white": secondary,
    "border-green-600 bg-green-600 text-white": success,
    "border-yellow-400 bg-yellow-400 text-white": warning,
    "border-red-500 bg-red-500 text-white": danger,
    "rounded-full": rounded,
    "bg-white": outline,
    "text-blue-500": outline && primary,
    "text-blue-200": outline && secondary,
    "text-green-600": outline && success,
    "text-yellow-400": outline && warning,
    "text-red-500": outline && danger,
  });

  return (
    <button {...rest} className={classes}>
      {children}
    </button>
  );
}

Button.propTypes = {
  checkVariationValue: ({ primary, secondary, success, warning, danger }) => {
    const count =
      Number(!!primary) +
      Number(!!secondary) +
      Number(!!success) +
      Number(!!warning) +
      Number(!!danger);

    if (count > 1) {
      throw new Error("Only one variation can be used at a time.");
    }
  },
};

export default Button;
