import React from 'react'
class Contact extends React.Component {
    /*
    There is a push method available in the history object by using the push method
    we are redirecting the user to the Home page whenever a user submits the form.
    */
    onSubmit = () => {
        this
            .props
            .history
            .push('/')
    }
    render() {
        return (
            <form>
                <input placeholder="name" type="name"/>
                <input placeholder="email" type="email"/>
                <button onClick={this.onSubmit}>Submit</button>
            </form>
        )
    }
}
export default Contact