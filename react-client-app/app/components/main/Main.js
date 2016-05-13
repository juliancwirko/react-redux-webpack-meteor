import React from 'react';
import CSSModules from 'react-css-modules';
import style from './styles';
import {callGetAllTodo} from '../../redux/async-actions';
import {connect} from 'react-redux';

class Main extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.dispatch(callGetAllTodo());
    }
    render() {
        return (
            <div>
                <section>
                    <div styleName='container'>
                        {this.props.children}
                    </div>
                </section>
            </div>
        );
    };
};

export default connect()(CSSModules(Main, style))
