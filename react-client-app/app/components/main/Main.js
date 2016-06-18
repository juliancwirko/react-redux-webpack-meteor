import React from 'react';
import cssModules from 'react-css-modules';
import style from './styles.styl';
import { callGetAllTodo } from '../../redux/async-actions';
import { connect } from 'react-redux';

class Main extends React.Component {
  componentDidMount() {
    this.props.dispatch(callGetAllTodo());
  }
  render() {
    return (
      <div>
        <section styleName="section">
          <div styleName="container">
            {this.props.children}
          </div>
        </section>
      </div>
    );
  }
}

Main.propTypes = {
  dispatch: React.PropTypes.func.isRequired,
  children: React.PropTypes.element.isRequired,
};

export default connect()(cssModules(Main, style));
