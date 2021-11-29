import { USER_DATA } from '../constants/actionsType'

const userReducer = (userDataDetails = [], action) => {
  switch (action.type) {
    case USER_DATA: {
      return action.payload;
    }
    default: {
      return userDataDetails;
    }
  }
};

export default userReducer;