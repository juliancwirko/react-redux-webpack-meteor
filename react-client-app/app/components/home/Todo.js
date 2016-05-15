import React from 'react';
import { connect } from 'react-redux';
import { callRemoveTodo, callEditTodo } from '../../redux/async-actions';
import cssModules from 'react-css-modules';
import style from './styles.styl';

const Todo = (props) => {
  const { data, dispatchCallRemoveTodo, dispatchCallEditTodo } = props;
  const handleRemove = () => {
    dispatchCallRemoveTodo(data._id);
  };
  const handleEdit = () => {
    dispatchCallEditTodo(data._id);
  };
  const finishedClass = () => {
    if (data.finished) {
      return 'todo-item todo-finished';
    }
    return 'todo-item';
  };
  return (
    <div styleName={finishedClass()}>
      <input type="checkbox" checked={data.finished} value="" onChange={handleEdit} />
      {data.message}
      <button type="button" onClick={handleRemove}>
        <i className="fa fa-times"></i>
      </button>
    </div>
  );
};

Todo.propTypes = {
  data: React.PropTypes.object.isRequired,
  dispatchCallRemoveTodo: React.PropTypes.func.isRequired,
  dispatchCallEditTodo: React.PropTypes.func.isRequired,
};

const mapStateToProps = () => ({});
const mapDispatchToProps = (dispatch) => ({
  dispatchCallRemoveTodo: _id => dispatch(callRemoveTodo(_id)),
  dispatchCallEditTodo: _id => dispatch(callEditTodo(_id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(cssModules(Todo, style, { allowMultiple: true }));
