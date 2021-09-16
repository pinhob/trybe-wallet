const INITIAL_STATE = {
  email: '',
};

export default function user(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'LOGIN': {
    return {
      ...state,
      email: action.payload,
    };
  }
  default:
    return state;
  }
}
