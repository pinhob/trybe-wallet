import React from 'react';
import { connect } from 'react-redux';
import Header from '../components/Wallet/Header';
import Forms from '../components/Wallet/Forms';

class Wallet extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Forms />
      </div>
    );
  }
}

export default Wallet;

// TODO: Adicionar o mapDispatchToProps e ver se a requisição para a api está funcionando com um console.log();
