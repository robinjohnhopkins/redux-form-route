import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Users from './users';
import Contact from './contact';
import Notfound from './notfound';
import SignInForm, {SignInContainer} from './signInForm';
import {Route, Link, BrowserRouter as Router, Switch, NavLink} from 'react-router-dom';

import * as serviceWorker from './serviceWorker';

import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import {reducer as formReducer} from 'redux-form';
import showResults from "./showResults";

const rootReducer = combineReducers({form: formReducer});

//const store = createStore(rootReducer);  // this creates store without chrome redux tie in
const store = createStore(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const routing = (
    <Provider store={store}>
        <Router>
            <div>
                <ul>
                    <li>
                        <NavLink exact activeClassName="active" to="/">
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName="active" to="/users/1">
                            Users
                        </NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName="active" to="/contact">
                            Contact
                        </NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName="active" to="/signin">
                            Sign in
                        </NavLink>
                    </li>
                </ul>
                <Switch>
                    <Route exact path="/" component={App}/>
                    <Route path="/users/:id" component={Users}/>
                    <Route path="/contact" component={Contact}/>
                    {/* These two attempts are ok but props passed in are tricky to hook up with redux form */}
                    {/* <Route path="/signin" component={SignInForm} onSubmitX={showResults} /> */}
                    {/* <Route path="/signin" render={ () => <SignInForm handleSubmit={showResults}/>}  /> */}

                    {/* The addition of a container was the easiest way to pass in a callback prop to use with redux form */}
                    <Route path="/signin" render={ () => <SignInContainer handleSubmit={showResults}/>}  />
                    <Route component={Notfound}/>
                </Switch>
            </div>
        </Router>
    </Provider>
)
ReactDOM.render(routing, document.getElementById('root'))

// ReactDOM.render(<App />, document.getElementById('root')); If you want your
// app to work offline and load faster, you can change unregister() to
// register() below. Note this comes with some pitfalls. Learn more about
// service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
