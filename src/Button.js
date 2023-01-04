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
}) {

  const classes = className("px-3 py-1.5 border", {
    "border-blue-500 bg-blue-500 text-white": primary,
    "border-pink-900 bg-pink-900 text-white": secondary,
    "border-green-700 bg-green-700 text-white": success,
    "border-yellow-600 bg-yellow-600 text-white": warning,
    "border-red-500 bg-red-500 text-white": danger,
  });

  return (
    <button className={classes}>
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
