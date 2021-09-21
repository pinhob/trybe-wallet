import React from 'react';
import { connect } from 'react-redux';

class Header extends React.Component {
  render() {
    const { email } = this.props;

    return (
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
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
});

export default connect(mapStateToProps, null)(Header);