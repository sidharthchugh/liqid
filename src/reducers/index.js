import { combineReducers } from 'redux';
import { 
  SET_VIEW, 
  SET_QUESTIONS, 
  SET_CURRENT_QUESTION,
  SAVE_ANSWER,
  CLEAR_ANSWERS
} from '../actions';

const initialState = {
  view: 1,
  questions: {
    allQuestions: [],
    currentQuestion: 0
  },
  answers: []
}

function view(state = initialState.view, action) {
  switch (action.type) {
    case SET_VIEW:
      return action.view;
    default:
      return state;
  }
}

const questions = (state = initialState.questions, action) => {
  switch (action.type) {
    case SET_QUESTIONS:
      return {
        ...state,
        allQuestions: action.questions,
      };    
    case SET_CURRENT_QUESTION:
      return {
        ...state,
        currentQuestion: action.currentQuestion,
      };    
    default:
      return state;
  }
};

const answers = (state = initialState.answers, action) => {
  switch (action.type) {
    case SAVE_ANSWER:
      return {
        ...state,
        [action.currentQuestion]: action.answer,
      };
    case CLEAR_ANSWERS:
      return [];
    default:
      return state;
  }
};

export default combineReducers({
  view,
  questions,
  answers,
});
