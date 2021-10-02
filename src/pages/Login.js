import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { login } from '../actions';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      disabledBtn: true,
      validEmail: false,
      validPassword: false,
    };

    this.getEmail = this.getEmail.bind(this);
    this.validateEmail = this.validateEmail.bind(this);
    this.validatePassword = this.validatePassword.bind(this);
    this.validateButton = this.validateButton.bind(this);
    this.makeLogin = this.makeLogin.bind(this);
  }

  getEmail({ target: { value } }) {
    this.setState({
      email: value,
    }, this.validateEmail);
  }

  validateEmail() {
    // Com base em: https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
    const { email } = this.state;
    const validation = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (validation.test(email)) {
      this.setState({ validEmail: true }, this.validateButton);
    }
  }

  validatePassword({ target: { value } }) {
    const FIVE = 5;
    if (value.length !== null && value.length >= FIVE) {
      this.setState({ validPassword: true });
      this.validateButton();
    }
  }

  validateButton() {
    const { validEmail, validPassword } = this.state;
    return validPassword && validEmail
      ? this.setState({ disabledBtn: false })
      : this.setState({ disabledBtn: true });
  }

  makeLogin(event) {
    const { loginDispatch, history } = this.props;
    const { email } = this.state;

    event.preventDefault();
    loginDispatch(email);
    history.push('/carteira');
  }

  render() {
    const { disabledBtn } = this.state;

    return (
      <form onSubmit={ this.makeLogin }>
        <input
          type="email"
          name="email-input"
          id="email-input"
          data-testid="email-input"
          placeholder="Email"
          required
          onChange={ this.getEmail }
        />
        <input
          type="password"
          name="password-input"
          id="password-input"
          data-testid="password-input"
          placeholder="Senha"
          minLength="6"
          required
          onChange={ this.validatePassword }
        />
        <button
          type="submit"
          id="button-input"
          disabled={ disabledBtn }
        >
          Entrar
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  loginDispatch: (email) => dispatch(login(email)),
});

Login.propTypes = {
  loginDispatch: PropTypes.func.isRequired,
  history: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
