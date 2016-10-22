/*
 * action types
 */

export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const EDIT_TODO = 'EDIT_TODO';
export const GET_ALL_TODO = 'GET_ALL_TODO';
export const SET_USER = 'SET_USER';
export const UNSET_USER = 'UNSET_USER';

/*
 * action creators
 */

export function addTodo(data) {
  return {
    type: ADD_TODO,
    data,
  };
}

export function removeTodo(_id) {
  return {
    type: REMOVE_TODO,
    _id,
  };
}

export function editTodo(_id, finished) {
  return {
    type: EDIT_TODO,
    _id,
    finished,
  };
}

export function getAllTodo(data) {
  return {
    type: GET_ALL_TODO,
    data,
  };
}

export function setLoggedUser(user) {
  return {
    type: SET_USER,
    user,
  };
}

export function unsetLoggedUser() {
  return {
    type: UNSET_USER,
  };
}
