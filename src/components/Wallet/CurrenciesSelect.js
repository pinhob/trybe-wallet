import React from 'react';
import PropTypes from 'prop-types';

class CurrenciesSelect extends React.Component {
  render() {
    const { currencies } = this.props;
    return (
      <label htmlFor="currency-select-field">
        Moeda:
        <select name="currency-select-field" id="currency-select-field">
          { /* Com ajuda do João Lima na monitoria individual */}
          {currencies && currencies
            .map((currency) => (
              <option
                key={ currency }
                value={ currency }
              >
                {currency}
              </option>))}
        </select>
      </label>
    );
  }
}

CurrenciesSelect.propTypes = {
  currencies: PropTypes.object.isRequired,
}.isRequired;

export default CurrenciesSelect;
