import { GET_CURRENCIES_FAIL,
  GET_CURRENCIES_SUCESS,
  ADD_EXPENSES,
  DELETE_EXPENSES } from '../actions';

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

  case ADD_EXPENSES: {
    return {
      ...state,
      expenses: [...state.expenses, { ...action.payload, id: state.expenses.length }],
    };
  }

  case DELETE_EXPENSES: {
    return {
      ...state,
      expenses: state.expenses.filter(({ id }) => id !== action.payload),
    };
  }

  default:
    return state;
  }
}
