import React from 'react';
import {connect} from 'react-redux';
import {callRemoveTodo, callEditTodo} from '../../redux/async-actions';
import CSSModules from 'react-css-modules';
import style from './styles';

let Todo = (props) => {
    const {data, callRemoveTodo, callEditTodo} = props;
    const handleRemove = (e) => {
        callRemoveTodo(data._id);
    };
    const handleEdit = (e) => {
        callEditTodo(data._id);
    };
    const finishedClass = () => {
        if (data.finished) {
            return 'todo-item todo-finished';
        }
        return 'todo-item';
    };
    return  (
        <div styleName={finishedClass()}>
            <input type='checkbox' checked={data.finished} value='' onChange={handleEdit} />
            {data.message}
            <button type='button' onClick={handleRemove}>
                <i className='fa fa-times'></i>
            </button>
        </div>
    )
}

Todo = connect(
    function mapStateToProps() {
        return {};
    },
    function mapDispatchToProps(dispatch) {
        return {
            callRemoveTodo: _id => dispatch(callRemoveTodo(_id)),
            callEditTodo: _id => dispatch(callEditTodo(_id))
        };
    }
)(CSSModules(Todo, style, {allowMultiple: true}));

export default Todo;
