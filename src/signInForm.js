import React from 'react';
import {Field, reduxForm} from 'redux-form';

var mySubmit = values => {
    console.log('on submit');
    return values;
};
const validate = values => {
    const errors = {}
    if (!values.firstName) {
        errors.firstName = 'Required'
    } else if (values.firstName.length > 15) {
        errors.firstName = 'Must be 15 characters or less'
    }
    if (!values.email) {
        errors.email = 'Required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address'
    }
    if (!values.age) {
        errors.age = 'Required'
    } else if (isNaN(Number(values.age))) {
        errors.age = 'Must be a number'
    } else if (Number(values.age) < 18) {
        errors.age = 'Sorry, you must be at least 18 years old'
    }
    return errors
}

const renderField = ({
    input,
    label,
    type,
    meta: {
        touched,
        error,
        warning
    }
}) => (
    <div>
        <label>{label}</label>
        <div>
            <input {...input} placeholder={label} type={type}/> {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
        </div>
    </div>
)

var SignInForm = props => {
    console.log('SignInForm props', props);
    const {handleSubmit, pristine, reset, submitting} = props
    console.log('SignInForm handleSubmit', handleSubmit);
    return (
        <form onSubmit={handleSubmit}>
            <Field name="firstName" type="text" component={renderField} label="FirstName"/>
            <Field name="email" type="email" component={renderField} label="Email"/>
            <Field name="age" type="number" component={renderField} label="Age"/>
            <div>
                <button type="submit" disabled={submitting}>
                    Submit
                </button>
                <button type="button" disabled={pristine || submitting} onClick={reset}>
                    Clear Values
                </button>
            </div>
        </form>
    )
}

SignInForm = reduxForm({
    form: 'signIn',
    // passing an onSubmit works well here as long as it is not a prop onSubmit:
    // mySubmit, onSubmit: values => { console.log('on submit'); return values },
    validate
})(SignInForm);

export class SignInContainer extends React.Component {
    render() {
        console.log('SignInContainer props', this.props);
        return <SignInForm onSubmit={this.props.handleSubmit}/>;
        // return <SignInForm onSubmit={mySubmit} />;   // alternate using a callback
        // that is local
    }
}

export default SignInForm;