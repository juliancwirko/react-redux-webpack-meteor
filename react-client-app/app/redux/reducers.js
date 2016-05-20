import { ADD_TODO, REMOVE_TODO, EDIT_TODO, GET_ALL_TODO } from './actions';
import { combineReducers } from 'redux';

// actions helpers
const remove = (state, action) => {
  const elemToRemoveArray = state.slice().filter(item => item._id === action._id);
  if (Array.isArray(elemToRemoveArray) && elemToRemoveArray.length) {
    const elemToRemoveIndex = state.indexOf(elemToRemoveArray[0]);
    return [
      ...state.slice(0, elemToRemoveIndex),
      ...state.slice(elemToRemoveIndex + 1),
    ];
  }
  return state;
};

const edit = (state, action) => {
  const elemToEditArray = state.slice().filter(item => item._id === action._id);
  if (Array.isArray(elemToEditArray) && elemToEditArray.length) {
    const elemToEditIndex = state.indexOf(elemToEditArray[0]);
    const newState = state.slice();
    newState[elemToEditIndex].finished = action.finished;
    return newState;
  }
  return state;
};

const add = (state, action) => {
  const newItemId = action.data._id;
  const isNotUniq = state.find(i => i._id === newItemId);
  if (!isNotUniq) {
    return state.concat([action.data]);
  }
  return state;
};

function todos(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return add(state, action);
    case REMOVE_TODO:
      return remove(state, action);
    case EDIT_TODO:
      return edit(state, action);
    case GET_ALL_TODO:
      return action.data;
    default:
      return state;
  }
}

const mainReducer = combineReducers({
  todos,
});

export default mainReducer;
