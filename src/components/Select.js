import React from 'react';
import PropTypes from 'prop-types';

class Select extends React.Component {
  render() {
    const { name, text, options, handleChange } = this.props;
    return (

      <label htmlFor={ name }>
        { text }
        <select name={ name } id={ name } onChange={ handleChange }>
          {options && options
            .map((option) => (
              <option
                key={ option }
                value={ option }
              >
                {option}
              </option>))}
        </select>
      </label>
    );
  }
}

Select.propTypes = {
  name: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Select;
