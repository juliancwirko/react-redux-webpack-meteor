import { expect } from 'chai';
import { describe, it } from 'mocha';
import {
  ADD_TODO,
  REMOVE_TODO,
  EDIT_TODO,
  GET_ALL_TODO,
  addTodo,
  removeTodo,
  editTodo,
  getAllTodo,
} from '../app/redux/actions';

describe('Redux Action Creators', () => {
  it('should create an action to add a todo', () => {
    const data = { _id: '123', message: 'Test message 1' };
    const expectedAction = {
      type: ADD_TODO,
      data,
    };
    expect(addTodo(data)).to.deep.equal(expectedAction);
  });
  it('should create an action to remove a todo', () => {
    const _id = '123';
    const expectedAction = {
      type: REMOVE_TODO,
      _id,
    };
    expect(removeTodo(_id)).to.deep.equal(expectedAction);
  });
  it('should create an action to edit a todo', () => {
    const _id = '123';
    const finished = true;
    const expectedAction = {
      type: EDIT_TODO,
      _id,
      finished,
    };
    expect(editTodo(_id, finished)).to.deep.equal(expectedAction);
  });
  it('should create an action to get all Todo items', () => {
    const data = [{ _id: '123', message: 'Test1' }, { _id: '456', message: 'Test2' }];
    const expectedAction = {
      type: GET_ALL_TODO,
      data,
    };
    expect(getAllTodo(data)).to.deep.equal(expectedAction);
  });
});
