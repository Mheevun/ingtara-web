/**
 * Created by cnr on 7/1/2017.
 */

import React, {Component} from 'react'
import Repository from "./repo"
import {messagesRef} from "../../service/firebase/ref"
import { Button } from 'react-bootstrap'


class FireBaseCRUD extends Component {
    constructor(props) {
        super(props);
        this.state = {messages: [], isLoading: false}; // <- set up react state
    }

    // run once, immediately before the initial rendering of the component
    componentWillMount() {
        /* Create reference to messages in Firebase Database */
        // this.messagesRef = messagesRef.orderByKey().limitToLast(100);
        const repo = new Repository()
        this.subscription = repo
            .getData()
            .subscribe(items => {
                this.setState(items)
            })

        /* this.setState((prevState, props) => {
         return {counter: prevState.counter + props.step};
         }); */


        // this.setState({ messages: [message].concat(this.state.messages) });

    }

    componentWillUnmount() {
        messagesRef.off();
    }

    addMessage(e) {
        e.preventDefault(); // <- prevent form submit from reloading the page
        /* Send the message to Firebase */
        messagesRef.push(this.txtInput.value);
        this.txtInput.value = ''; // <- clear the input
    }

    onClickDelete(id) {
        messagesRef.child(id).remove()
    }

    render() {
        const isLoading = this.state.isLoading
        console.log(isLoading);
        return (
            <form onSubmit={e => this.addMessage(e)}>
                <input type="text" ref={el => this.txtInput = el}/>
                <input type="submit"/>
                <br/>
                <Button bsStyle="primary" disabled={isLoading}>isLoading = {isLoading.toString()}</Button>
                <ul>
                    { /* Render the list of messages */
                        this.state.messages.map(message => <li key={message.id}
                                                               onClick={e => this.onClickDelete(message.id)}>{message.text}</li>)
                    }
                </ul>
            </form>
        );
    }
}

export default FireBaseCRUD;