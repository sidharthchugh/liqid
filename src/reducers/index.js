import { combineReducers } from 'redux';

const questions = (state = [], action) => {
  switch (action.type) {
    case 'GET_QUESTIONS':
      return state
    default:
      return state
  }
};

export default combineReducers({
  questions,
});
