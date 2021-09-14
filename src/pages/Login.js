import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <form>
        <input
          type="email"
          name="email-input"
          placeholder="Email"
          id="email-input"
          data-testid="email-input"
        />
        <input
          type="password"
          name="password-input"
          placeholder="Senha"
          id="password-input"
          data-testid="password-input"
        />
        <button type="submit">
          Entrar
        </button>
      </form>
    );
  }
}

export default Login;
