import React from 'react'
import {Route, Link} from 'react-router-dom'

const User = ({match}) => <p>{match.params.id}</p>

class Users extends React.Component {
    render() {
        const {params} = this.props.match;

        console.log('usersprops: ', this.props);
        return (
            <div>
                <h1>Users</h1>
                <p>{params.id}</p>
                <strong>select a user</strong>
                <ul>
                    <li>
                        <Link to="/users/1">User 1
                        </Link>
                    </li>
                    <li>
                        <Link to="/users/2">User 2
                        </Link>
                    </li>
                    <li>
                        <Link to="/users/3">User 3
                        </Link>
                    </li>
                </ul>
                <p>end of links </p>
                <Route path="/users/:id" component={User}/>
            </div>
        )
    }
}

export default Users