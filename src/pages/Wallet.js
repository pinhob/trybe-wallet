import React from 'react';
import { connect } from 'react-redux';

class Wallet extends React.Component {
  render() {
    const { email } = this.props;

    return (
      <div>
        <header>
          <div id="header-email">
            <p>Email: </p>
            <span data-testid="email-field">{email}</span>
          </div>
          <div id="header-total">
            <p>Despesa total:</p>
            <span data-testid="total-field">0 </span>
            <span data-testid="header-currency-field">BRL</span>
          </div>
        </header>

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
              <select name="" id="currency-select-field"></select>
            </label>

            <label htmlFor="payment-method-field">
              Método de pagamento:
              <select name="payment-method-field" id="payment-method-field">
                <option value="cash">Dinheiro</option>
                <option value="credit" selected>Cartão de crédito</option>
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
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
});

export default connect(mapStateToProps, null)(Wallet);
