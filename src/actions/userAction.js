import { USER_DATA } from '../constants/actionsType'

export const userAction = () => (dispatch) => {
  return fetch('https://reqres.in/api/users')
    .then(response => response.json())
    .then(data => {
      dispatch({
        type: USER_DATA,
        payload: data.data,
      });
    })
};
