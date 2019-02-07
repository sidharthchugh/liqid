import {select, take, put, fork, all } from 'redux-saga/effects';
import * as actions from '../actions';
import config from '../config/';

export function* startSurvey() {
   while (true) {
    yield take(actions.START_SURVEY);
    yield put(actions.setQuestions(config.questions));
    yield put(actions.setView(2));
  }
};

export function* restartSurvey() {
   while (true) {
    yield take(actions.RESTART_SURVEY);
    yield put(actions.setView(1));
    yield put(actions.clearAnswers());
    yield put(actions.setCurrentQuestion(0));
  }
};


export function* submitAnswer() {
   while (true) {
    const { nextQuestion, currentQuestion, answer } = yield take(actions.SUBMIT_ANSWER);

    yield put(actions.saveAnswer(currentQuestion, answer));
  
    const getQuestions = state => state.questions.allQuestions;
    const questions = yield select(getQuestions);

    if(nextQuestion < questions.length) {
      yield put(actions.setCurrentQuestion(nextQuestion));
    } else {
      yield put(actions.setView(3));
    }
  }
};

export default function* root() {
  yield all([
    fork(startSurvey),
    fork(restartSurvey),
    fork(submitAnswer),
  ])
};
