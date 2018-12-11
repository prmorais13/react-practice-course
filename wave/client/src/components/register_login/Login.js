import React, { Component } from 'react';
import { connect } from 'react-redux';

import FormField from '../utils/form/FormField';
import { update, generateData, isFormValid } from '../utils/form/FormActions';

class Login extends Component {
  state = {
    formError: false,
    formSuccess: '',
    formdata: {
      email: {
        element: 'input',
        value: '',
        config: {
          name: 'email_input',
          type: 'email',
          placeholder: 'Entre com o e-mail'
        },
        validation: {
          required: true,
          email: true
        },
        valid: false,
        touched: false,
        validationMessage: ''
      },
      password: {
        element: 'input',
        value: '',
        config: {
          name: 'password_input',
          type: 'password',
          placeholder: 'Entre com a senha'
        },
        validation: {
          required: true
        },
        valid: false,
        touched: false,
        validationMessage: ''
      }
    }
  };

  updateForm = element => {
    const newFormdata = update(element, this.state.formdata, 'login');
    this.setState({
      formError: false,
      formdata: newFormdata
    });
  };

  submitForm = event => {
    event.preventDefault();

    let dataToSubmit = generateData(this.state.formdata, 'login');
    let formIsValid = isFormValid(this.state.formdata, 'login');

    if (formIsValid) {
      console.log(dataToSubmit);
    } else {
      this.setState({
        formError: true
      });
    }
  };

  render() {
    return (
      <div className="singin_wrapper">
        <form onSubmit={event => this.submitForm(event)}>
          <FormField
            id={'email'}
            formdata={this.state.formdata.email}
            change={element => this.updateForm(element)}
          />

          <FormField
            id={'password'}
            formdata={this.state.formdata.password}
            change={element => this.updateForm(element)}
          />
          {this.state.formError ? (
            <div className="error_label">Por favor cheque seus dados!</div>
          ) : null}
          <button onClick={event => this.submitForm(event)}>Login</button>
        </form>
      </div>
    );
  }
}

export default connect()(Login);
