export const LOGIN = 'LOGIN';
export const GET_CURRENCIES_SUCESS = 'GET_CURRENCIES_SUCESS';
export const GET_CURRENCIES_FAIL = 'GET_CURRENCIES_FAIL';

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

// Com base na fórmula ensinada pelo Wolf em aula e nos códigos do colega Vinicius Dyonisio (https://github.com/tryber/sd-013-a-project-trybewallet/pull/26/files) e Leandro Liduvino (https://github.com/tryber/sd-013-a-project-trybewallet/pull/26/files)

export const getCurrencies = () => (dispatch) => {
  return fetch('https://economia.awesomeapi.com.br/json/all')
    .then((response) => response.json()
      .then(
        (json) => dispatch(getCurrenciesSucess(json)),
        (error) => dispatch(getCurrenciesFail(error)),
      ));
};
