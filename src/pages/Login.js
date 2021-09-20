import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { login } from '../actions';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
    };

    this.getEmail = this.getEmail.bind(this);
    this.makeLogin = this.makeLogin.bind(this);
  }

  getEmail({ target: { value } }) {
    this.setState({
      email: value,
    });
  }

  makeLogin(event) {
    const { loginDispatch, history } = this.props;
    const { email } = this.state;

    event.preventDefault();
    loginDispatch(email);
    history.push('/carteira');
  }

  render() {
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
        />
        <button type="submit" id="button-input">
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
};

export default connect(null, mapDispatchToProps)(Login);
