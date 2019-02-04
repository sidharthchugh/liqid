import { all, fork } from 'redux-saga/effects';

export function getQuestions() {
  console.log("SAGA - get survey questions")
}

export default function* root() {
  yield all([fork(getQuestions)])
}
