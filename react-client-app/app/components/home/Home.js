import React from 'react';
import cssModules from 'react-css-modules';
import { connect } from 'react-redux';
import style from './home.styl';
import Todo from '../todo/Todo';
import Login from '../accounts/Login';
import { asteroid } from '../../asteroid/asteroid';

import { callAddTodo } from '../../redux/async-actions';

const Home = (props) => {
  const { todos, dispatchCallAddTodo, user } = props;
  const handleAddTodo = (e) => {
    if (e.key === 'Enter') {
      const elem = e.target;
      e.preventDefault();
      if (elem.value) {
        dispatchCallAddTodo(elem.value);
        elem.value = '';
      }
    }
  };
  const handleLogout = () => {
    asteroid.logout();
  };
  const home = () => {
    if (user && user.username) {
      return (
        <div styleName="todo-wrapper">
          <div styleName="logout">
            Logged user: {user.username}
            <button onClick={handleLogout} styleName="logout-button">Logout</button>
          </div>
          <div>
            <input
              type="text"
              styleName="add-todo-input"
              placeholder="Add todo item ..."
              onKeyPress={handleAddTodo}
            />
          </div>
          <div>
            {todos.map(
              (t, i) => <Todo id={t._id} message={t.message} finished={t.finished} key={i} />
            )}
          </div>
        </div>
      );
    }
    return <Login />;
  };
  return <div>{home()}</div>;
};

Home.propTypes = {
  todos: React.PropTypes.array.isRequired,
  dispatchCallAddTodo: React.PropTypes.func.isRequired,
  user: React.PropTypes.object,
};

const mapStateToProps = (state) => ({
  todos: state.todos,
  user: state.user,
});
const mapDispatchToProps = (dispatch) => ({
  dispatchCallAddTodo: data => dispatch(callAddTodo(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(cssModules(Home, style));
