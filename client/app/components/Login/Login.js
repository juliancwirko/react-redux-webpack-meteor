import React from 'react';
import cssModules from 'react-css-modules';
import Alert from 'react-s-alert';
import asteroid from '../../common/asteroid';
import style from './login.styl';

const Login = () => {
  const handleLogin = (e) => {
    e.preventDefault();
    asteroid.loginWithPassword({
      username: e.target.username.value,
      password: e.target.password.value,
    })
      .catch((error) => {
        Alert.error(error.message);
      });
  };
  const form = () => (
    <form onSubmit={handleLogin} styleName="login-form">
      <div>
        <input type="text" name="username" styleName="input" placeholder="Username" />
      </div>
      <div>
        <input type="password" name="password" styleName="input" placeholder="Password" />
      </div>
      <div>(Username: admin | Password: pass)</div>
      <div>
        <button type="submit" styleName="submit-button">Login</button>
      </div>
    </form>
  );
  return <div>{form()}</div>;
};

export default cssModules(Login, style);
