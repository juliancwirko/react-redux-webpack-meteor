import { expect } from 'chai';
import { describe, it } from 'mocha';
import { ADD_TODO, REMOVE_TODO, EDIT_TODO, GET_ALL_TODO } from '../app/redux/actions';
import mainReducer from '../app/redux/reducers';

describe('Redux Reducers', () => {
  it('should return the initial state', () => {
    expect(mainReducer(undefined, {}).todos).to.deep.equal([]);
  });
  it('should handle ADD_TODO', () => {
    expect(mainReducer({ todos: [] }, {
      type: ADD_TODO,
      data: { _id: '123', message: 'Test 1' },
    }).todos).to.deep.equal([
      {
        _id: '123',
        message: 'Test 1',
      },
    ]);
    expect(mainReducer({ todos: [{ _id: '123', message: 'Test 1' }] }, {
      type: ADD_TODO,
      data: { _id: '456', message: 'Test 2' },
    }).todos).to.deep.equal([
      {
        _id: '123',
        message: 'Test 1',
      }, {
        _id: '456',
        message: 'Test 2',
      },
    ]);
  });
  it('should handle REMOVE_TODO', () => {
    expect(mainReducer({ todos: [{ _id: '123', message: 'Test 1' }] }, {
      type: REMOVE_TODO,
      _id: '123',
    }).todos).to.deep.equal([]);
  });
  it('should handle EDIT_TODO', () => {
    expect(mainReducer({ todos: [{ _id: '123', message: 'Test 1' }] }, {
      type: EDIT_TODO,
      _id: '123',
      finished: true,
    }).todos).to.deep.equal([{
      _id: '123',
      message: 'Test 1',
      finished: true,
    }]);
  });

  it('should handle GET_ALL_TODO', () => {
    expect(mainReducer({ todos: [
      {
        _id: '123',
        message: 'Test 1',
      }, {
        _id: '456',
        message: 'Test 2',
      },
    ] }, {
      type: GET_ALL_TODO,
      data: [
        {
          _id: '123',
          message: 'Test 1',
        }, {
          _id: '456',
          message: 'Test 2',
        },
      ],
    }).todos).to.deep.equal([
      {
        _id: '123',
        message: 'Test 1',
      }, {
        _id: '456',
        message: 'Test 2',
      },
    ]);
  });
});
