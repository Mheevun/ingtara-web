import React, { Component } from 'react';
import {connect} from "react-redux";
import {serverMessage} from "./reducer";
import {echo} from "./action";

class Echo extends Component {
    componentDidMount() {
        this.props.fetchMessage('Hi!')
    }
    render() {
        const apiMessage = this.props.message ? this.props.message : false
        console.log("api:"+apiMessage)
        return (
            <h2>Authenticate:{apiMessage.toLocaleString()}</h2>
        );
    }
}
export default connect(
    state => ({ message: serverMessage(state) }),
    { fetchMessage: echo }
)(Echo);