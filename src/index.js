import React from 'react';
import ReactDOM from 'react-dom';
// import 'bootstrap-material-design/dist/css/bootstrap-material-design.min.css'
// import 'bootstrap-material-design/dist/css/ripples.min.css'
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
// import 'bootstrap/dist/css/bootstrap-theme.min.css'
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Provider from "react-redux/es/components/Provider"
import ConnectedRouter from "react-router-redux/es/ConnectedRouter"
import createHistory from 'history/createBrowserHistory'
import configureStore from './duck/store'
import {Route, Switch} from "react-router";
import Login from "./features/Login/Login"
import PrivateRoute from "./features/PrivateRoute/index"

// ReactDOM.render(<App />, document.getElementById('root'));
const target = document.querySelector('#root')
// const appBorder = {
//     margin: '10px 10px 10px 10px'
// }

const history = createHistory()
const store = configureStore(history)
ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            {/*<App />*/}
            <Switch>
                <Route exact path="/login/" component={Login} />
                <PrivateRoute path="/" component={App}/>
            </Switch>
        </ConnectedRouter>
    </Provider>,
    target
)
registerServiceWorker();