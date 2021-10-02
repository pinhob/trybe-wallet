import React from 'react';
import Header from '../components/Wallet/Header';
import Forms from '../components/Wallet/Forms';
import Table from '../components/Wallet/Table';

class Wallet extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Forms />
        <Table />
      </div>
    );
  }
}

export default Wallet;

// TODO: Adicionar o mapDispatchToProps e ver se a requisição para a api está funcionando com um console.log();
