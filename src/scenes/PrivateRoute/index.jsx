import React from 'react'
import { Route, Redirect } from 'react-router'
import { connect } from 'react-redux'
import * as authHelper from "../../service/auth/auth";

const PrivateRoute = ({ component: Component, isAuthenticated, ...rest }) => (
    <Route {...rest} render={props => (
        isAuthenticated ? (
            <Component {...props}/>
        ) : (
            <Redirect to={{
                pathname: '/login',
                state: { from: props.location }
            }}/>
        )
    )}/>
)

const mapStateToProps = (state) => ({
    isAuthenticated: authHelper.isAuthenticated(state)
})

export default connect(mapStateToProps, null)(PrivateRoute);