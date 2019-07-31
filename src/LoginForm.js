import React from 'react';

class LoginForm extends React.Component {
  state = {
    username: ""
  }

  handleChange = event => {
    this.setState({
      username: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.handleLogIn(this.state.username)
  }

  render(){
    return (
      <div className="login">
        <form className="login-form" onSubmit={this.handleSubmit}>
          <input
            placeholder="Enter a username..."
            value={this.state.username}
            onChange={this.handleChange}
            />
          <input type="submit" value="Log In"/>
        </form>
      </div>
    );
  }
}

export default LoginForm;
