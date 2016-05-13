import {asteroid} from '../asteroid/asteroid';
import {addTodo, getAllTodo, removeTodo, editTodo} from './actions';

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