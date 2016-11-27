import { ADD_TODO, REMOVE_TODO, EDIT_TODO, GET_ALL_TODO } from './TodoActions';
import { remove, edit, add } from '../../common/helpers';

const todos = (state = [], action) => {
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
};

export default todos;
