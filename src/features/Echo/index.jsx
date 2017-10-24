import React, { Component } from 'react';
import {connect} from "react-redux";
import {echo} from "./action";
import {serverMessage} from "./selector";

class Echo extends Component {
    componentDidMount() {
        this.props.fetchMessage('Hi!')
    }
    render() {
        const apiMessage = this.props.message
        return (
            <h2>Echo API:{apiMessage+""}</h2>
        );
    }
}
export default connect(
    state => ({ message: serverMessage(state) }),
    { fetchMessage: echo }
)(Echo);