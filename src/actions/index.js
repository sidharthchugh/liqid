export const START_SURVEY = 'START_SURVEY';
export const RESTART_SURVEY = 'RESTART_SURVEY';
export const SET_QUESTIONS = 'SET_QUESTIONS';
export const SET_CURRENT_QUESTION = 'SET_CURRENT_QUESTION';
export const SUBMIT_ANSWER = 'SUBMIT_ANSWER';
export const SAVE_ANSWER = 'SAVE_ANSWER';
export const CLEAR_ANSWERS = 'CLEAR_ANSWERS';
export const SET_VIEW = 'SET_VIEW';


export function startSurvey() {
  return {
    type: START_SURVEY
  }
}

export function restartSurvey() {
  return {
    type: RESTART_SURVEY
  }
}

export function setQuestions(questions) {
  return {
    type: SET_QUESTIONS,
    questions
  }
}

export function setCurrentQuestion(currentQuestion) {
  return {
    type: SET_CURRENT_QUESTION,
    currentQuestion
  }
}

export function submitAnswer(nextQuestion, currentQuestion, answer) {
  return {
    type: SUBMIT_ANSWER,
    nextQuestion,
    currentQuestion,
    answer
  }
}

export function saveAnswer(currentQuestion, answer) {
  return {
    type: SAVE_ANSWER,
    currentQuestion,
  	answer
  }
}

export function clearAnswers() {
  return {
    type: CLEAR_ANSWERS
  }
}

export function setView(view) {
  return {
    type: SET_VIEW,
  	view
  }
}
