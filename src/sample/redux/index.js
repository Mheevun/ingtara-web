import React from 'react'
import Link from "react-router-dom/es/Link"
import Route from "react-router-dom/es/Route"
import Home from './home'
import About from './about'

const ReduxBasic = () =>
    <div>
        <header>
            <Link to="/">Home</Link>
            <Link to="/about-us">About</Link>
        </header>

        <main>
            <Route exact path="/" component={Home} />
            <Route exact path="/about-us" component={About} />
        </main>
        <br/>
    </div>


export default ReduxBasic