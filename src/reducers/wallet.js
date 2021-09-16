const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

export default function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'GET_WALLET_CURRENCIE': {
    return {
      ...state,
      email: action.payload,
    };
  }
  default:
    return state;
  }
}
