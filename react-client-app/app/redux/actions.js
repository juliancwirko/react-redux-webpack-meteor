import {asteroid} from '../asteroid/asteroid';

/*
 * action types
 */

export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const EDIT_TODO = 'EDIT_TODO';
export const CLEAR_ALL_TODO = 'CLEAR_ALL_TODO';
export const GET_ALL_TODO = 'GET_ALL_TODO';

/*
 * action creators
 */

export function callAddTodo (message) {
    return dispatch => {
        return asteroid.call('addTodo', message)
            .then(result => dispatch(addTodo({_id: result, message: message})));
    };
};

export function callGetAllTodo () {
    return dispatch => {
        return asteroid.call('getTodos')
            .then((result) => dispatch(getAllTodo(result)));
    };
};

export function callRemoveTodo (_id) {
    return dispatch => {
        return asteroid.call('removeTodo', _id)
            .then(() => dispatch(removeTodo(_id)));
    };
};

export function callEditTodo (_id) {
    return dispatch => {
        return asteroid.call('editTodo', _id)
            .then(() => dispatch(editTodo(_id)));
    };
};

export function addTodo(data) {
    return {
        type: ADD_TODO,
        data
    };
};

export function removeTodo(_id) {
    return {
        type: REMOVE_TODO,
        _id
    };
};

export function editTodo(_id) {
    return {
        type: EDIT_TODO,
        _id
    };
};

export function getAllTodo(data) {
    return {
        type: GET_ALL_TODO,
        data
    };
};

export function clearAllTodo() {
    return {
        type: CLEAR_ALL_TODO
    };
};