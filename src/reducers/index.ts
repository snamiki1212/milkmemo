import { combineReducers } from "redux";
import { memoList } from './memo';
import { inputName } from './input';

export default combineReducers(
  { memoList , inputName} as any
);