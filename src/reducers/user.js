const INITIAL_STATE = {
  email: '',
};

export default function user(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'GET_LOGIN': {
    return {
      ...state,
      email: action.payload,
    };
  }
  default:
    return state;
  }
}
