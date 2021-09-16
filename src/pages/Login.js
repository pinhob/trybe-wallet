import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <form>
        <input
          type="email"
          name="email-input"
          id="email-input"
          data-testid="email-input"
          placeholder="Email"
          required
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
        <button type="submit">
          Entrar
        </button>
      </form>
    );
  }
}

export default Login;
