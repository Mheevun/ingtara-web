import React from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router'
import LoginForm from "./components/LoginForm";
import {login} from "./loginAction";
import {authErrors, isAuthenticated} from "./loginSelector";


const Login = (props) => {
    console.log(`login: ${props.isAuthenticated}`)
    if (props.isAuthenticated)
        return (
            <Redirect to='/' />
        )
    else
        return (
            <div className="login-page">
                <LoginForm {...props}/>
            </div>
        )
    }
    const mapStateToProps = (state) => ({
        errors: authErrors(state),
        isAuthenticated: isAuthenticated(state)
    })
    const mapDispatchToProps = (dispatch) => ({
        onSubmit: (username, password) => {
            dispatch(login(username, password))
        }
    })

    export default connect(mapStateToProps, mapDispatchToProps)(Login);