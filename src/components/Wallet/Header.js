import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends React.Component {
  // Consultado código do colega Vinicius Dionysio (https://github.com/tryber/sd-013-a-project-trybewallet/pull/26/files)
  calculateTotal() {
    const { expenses } = this.props;

    let total = 0;

    expenses.forEach((expense) => {
      const { value, currency, exchangeRates } = expense;

      total += value * Number(exchangeRates[currency].ask);
    });

    return total.toFixed(2);
  }

  render() {
    const { email, expenses } = this.props;

    return (
      <header>
        <div id="header-email">
          <p>Email: </p>
          <span data-testid="email-field">{email}</span>
        </div>
        <div id="header-total">
          <p>Despesa total:</p>
          <span data-testid="total-field">
            {expenses.length > 0 ? this.calculateTotal() : '0'}
          </span>
          <span data-testid="header-currency-field"> BRL</span>
        </div>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

Header.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  email: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, null)(Header);
