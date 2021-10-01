import React from 'react';
import { connect } from 'react-redux';
import { getCurrencies, getExpenses } from '../../actions';
import CurrenciesSelect from './CurrenciesSelect';
import Input from '../Input';
import Select from '../Select';

class Forms extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 0,
      description: '',
      currency: 'USD',
      method: '',
      tag: '',
    };

    this.submitExpense = this.submitExpense.bind(this);
  }

  componentDidMount() {
    const { fetchCurrencies } = this.props;
    fetchCurrencies();
  }

  submitExpense(event) {
    const { newExpense } = this.props;

    event.PreventDefault();

    // newExpense(); // COLOCAR ALGO COMO O STATE AQUI
  }

  render() {
    const { currencies } = this.props;
    return (
      <main>
        <form>
          <Input
            name="expense-field"
            text="Valor:"
            type="number"
            placeholder="0.00"
          />

          <Input
            name="description-field"
            text="Descrição:"
            type="text"
          />

          <CurrenciesSelect
            currencies={ currencies }
          />

          <Select
            name="payment-method-field"
            text="Método de pagamento:"
            options={ ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'] }
          />

          <Select
            name="categorie-field"
            text="Tag:"
            options={ ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'] }
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
  newExpense: () => dispatch(getExpenses()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Forms);
