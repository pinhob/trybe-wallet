import React from 'react';
import { connect } from 'react-redux';
import { getCurrencies } from '../../actions'

class Forms extends React.Component {
  componentDidMount() {
    const { fetchCurrencies } = this.props;
    fetchCurrencies();
  }

  render() {
    const { currencies } = this.props;
    return (
      <main>
        <form>
          <label htmlFor="expense-field">
            Valor:
            <input type="number" name="expense-field" id="expense-field" />
          </label>
          <label htmlFor="description-field">
            Descrição:
            <input type="text" name="description-field" id="description-field" />
          </label>
          <label htmlFor="currency-select-field">
            Moeda:
            <select name="currency-select-field" id="currency-select-field">
              { /* Com ajuda do João Lima na monitoria individual */ }
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
          <label htmlFor="payment-method-field">
            Método de pagamento:
            <select name="payment-method-field" id="payment-method-field">
              <option value="cash">Dinheiro</option>
              <option value="credit">Cartão de crédito</option>
              <option value="debit">Cartão de débito</option>
            </select>
          </label>

          <label htmlFor="categorie-field">
            Tag:
            <select name="categorie-field" id="categorie-field">
              <option value="food">Alimentação</option>
              <option value="leisure">Lazer</option>
              <option value="work">Trabalho</option>
              <option value="transport">Transporte</option>
              <option value="health">Saúde</option>
            </select>
          </label>
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
});

export default connect(mapStateToProps, mapDispatchToProps)(Forms);
