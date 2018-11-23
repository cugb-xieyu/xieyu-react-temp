import { ADD_TODO } from './../actionTypes';
// import { getBook } from '../api/api';
export const addTodo = value => ({
  type: ADD_TODO,
  payload: {
    value: value
  }
});
