import { GET_CURRENCIES_FAIL, GET_CURRENCIES_SUCESS } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  error: '',
};

export default function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case GET_CURRENCIES_FAIL: {
    return {
      ...state,
      error: action.payload,
    };
  }

  case GET_CURRENCIES_SUCESS: {
    return {
      ...state,
      currencies: Object.keys(action.payload).filter((currency) => currency !== 'USDT'), // Ajuda do João Lima na monitoria individual para transformar em um array só com as moedas
    };
  }

  default:
    return state;
  }
}
