import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getCurrencies, getExpenses } from '../../actions';
import Input from '../Input';
import Select from '../Select';

class Forms extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 0,
      description: 'empty',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    };

    this.submitExpense = this.submitExpense.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    const { fetchCurrencies } = this.props;
    fetchCurrencies();
  }

  handleChange({ target: { value, name } }) {
    this.setState({
      [name]: value,
    });
  }

  submitExpense(event) {
    const { newExpense } = this.props;

    event.preventDefault();

    newExpense(this.state);
  }

  render() {
    const { currencies } = this.props;
    return (
      <main>
        <form>
          <Input
            name="value"
            text="Valor:"
            type="number"
            placeholder="0.00"
            handleChange={ this.handleChange }
          />

          <Input
            name="description"
            text="Descrição:"
            type="text"
            placeholder="Descreva sua despesa"
            handleChange={ this.handleChange }
          />

          <Select
            name="currency"
            text="Moeda:"
            options={ currencies }
            handleChange={ this.handleChange }
          />

          <Select
            name="method"
            text="Método de pagamento:"
            options={ ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'] }
            handleChange={ this.handleChange }
          />

          <Select
            name="tag"
            text="Tag:"
            options={ ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'] }
            handleChange={ this.handleChange }
          />

          <button type="submit" onClick={ this.submitExpense }>
            Adicionar despesa
          </button>
        </form>
      </main>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCurrencies: () => dispatch(getCurrencies()),
  newExpense: (expense) => dispatch(getExpenses(expense)),
});

Forms.propTypes = {
  fetchCurrencies: PropTypes.func.isRequired,
  newExpense: PropTypes.func.isRequired,
  currencies: PropTypes.shape({}).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Forms);
