import React from 'react';
import PropTypes from 'prop-types';

class Select extends React.Component {
  render() {
    const { name, text, options } = this.props;
    return (

      <label htmlFor={ name }>
        { text }
        <select name={ name } id={ name }>
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
  options: PropTypes.shape([]).isRequired,
};

export default Select;
