import React from 'react';
import cssModules from 'react-css-modules';
import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/jelly.css';
import Alert from 'react-s-alert';
import style from './main.styl';

const Main = (props) => {
  const { children } = props;
  return (
    <div>
      <section styleName="section">
        <div styleName="container">
          {children}
        </div>
      </section>
      <Alert position="top-right" effect="jelly" />
    </div>
  );
};

Main.propTypes = {
  children: React.PropTypes.element.isRequired,
};

export default cssModules(Main, style);
