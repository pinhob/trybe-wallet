export const LOGIN = 'LOGIN';
export const GET_CURRENCIES_SUCESS = 'GET_CURRENCIES_SUCESS';
export const GET_CURRENCIES_FAIL = 'GET_CURRENCIES_FAIL';
export const GET_EXPENSES = 'GET_EXPENSES_SUCESS';
export const ADD_EXPENSES = 'ADD_EXPENSES';

export const login = (payload) => ({
  type: LOGIN,
  payload,
});

export const getCurrenciesSucess = (json) => ({
  type: GET_CURRENCIES_SUCESS,
  payload: json,
});

export const getCurrenciesFail = (error) => ({
  type: GET_CURRENCIES_FAIL,
  payload: error,
});

// Com base na fórmula ensinada pelo Wolf em aula e nos códigos dos colegas Vinicius Dyonisio (https://github.com/tryber/sd-013-a-project-trybewallet/pull/26/files) e Leandro Liduvino (https://github.com/tryber/sd-013-a-project-trybewallet/pull/26/files)

export const getCurrencies = () => async (dispatch) => {
  const response = await fetch('https://economia.awesomeapi.com.br/json/all');
  return response.json()
    .then(
      (json) => dispatch(getCurrenciesSucess(json)),
      (error) => dispatch(getCurrenciesFail(error)),
    );
};

export const addExpenses = (expense) => ({
  type: ADD_EXPENSES,
  payload: expense,
});

export const getExpenses = (expense) => (dispatch) => fetch('https://economia.awesomeapi.com.br/json/all')
  .then((response) => response.json())
  .then((json) => dispatch(addExpenses({ ...expense, exchangesRates: json })));
