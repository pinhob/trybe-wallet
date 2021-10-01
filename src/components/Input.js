import React from 'react';
import PropTypes from 'prop-types';

// Com base nos exemplos de: https://www.youtube.com/watch?v=dZtuJ2Ns7q8&ab_channel=MatheusBattisti-HoradeCodar e https://css-tricks.com/demonstrating-reusable-react-components-in-a-form/
class Input extends React.Component {
  render() {
    const { name, text, type, placeholder = '', handleChange } = this.props;
    return (
      <label htmlFor={ name }>
        { text }
        <input
          type={ type }
          name={ name }
          id={ name }
          placeholder={ placeholder }
          onChange={ handleChange }
        />
      </label>
    );
  }
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  // value: PropTypes.oneOfType([
  //   PropTypes.string,
  //   PropTypes.number,
  // ]).isRequired,
};

export default Input;
