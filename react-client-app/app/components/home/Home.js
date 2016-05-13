import React from 'react';
import CSSModules from 'react-css-modules';
import {connect} from 'react-redux';
import style from './styles';
import Todo from './Todo';

import {callAddTodo} from '../../redux/async-actions';

let Home = (props) => {
    const {todos, callAddTodo} = props;
    const handleAddTodo = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            callAddTodo(e.target.value);
            e.target.value = '';
        }
    };
    return (
        <div styleName='todo-wrapper'>
            <div>
                <input type='text' styleName='add-todo-input' placeholder='Add todo item ...' onKeyPress={handleAddTodo} />
            </div>
            <div>
                {todos.map((t, i) => <Todo data={t} key={i} />)}
            </div>
        </div>
    )
}

Home = connect(
    function mapStateToProps(state) {
        return {
            todos: state.todos
        };
    },
    function mapDispatchToProps(dispatch) {
        return {
            callAddTodo: data => dispatch(callAddTodo(data))
        };
    }
)(CSSModules(Home, style));

export default Home;
