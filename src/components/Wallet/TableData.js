import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteExpenses } from '../../actions';

class TableData extends React.Component {
  render() {
    const { data, deleteExpense } = this.props;
    const { description, tag, method, value, currency, exchangeRates, id } = data;
    const { ask, name } = exchangeRates[currency];
    const currencyName = name.split('/')[0];
    const roundedValue = value.lenght > 2 ? Number(value).toFixed(2) : value;

    return (
      <tr>
        <td>{ description }</td>
        <td>{ tag }</td>
        <td>{ method }</td>
        <td>{ roundedValue }</td>
        <td>{ currencyName }</td>
        <td>{ Number(ask).toFixed(2) }</td>
        <td>{ (value * ask).toFixed(2) }</td>
        <td>Real</td>
        <td>
          <button
            type="button"
            data-testid="delete-btn"
            onClick={ () => deleteExpense(id) }
          >
            Deletar
          </button>
        </td>
      </tr>
    );
  }
}

TableData.propTypes = {
  data: PropTypes.objectOf({
    description: PropTypes.string,
    tag: PropTypes.string,
    method: PropTypes.string,
    value: PropTypes.string,
    currency: PropTypes.string,
    exchangeRates: PropTypes.shape({}),
    id: PropTypes.number,
  }).isRequired,
  deleteExpense: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  deleteExpense: (id) => dispatch(deleteExpenses(id)),
});

export default connect(null, mapDispatchToProps)(TableData);
