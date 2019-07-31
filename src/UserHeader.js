import React from 'react';

class UserHeader extends React.Component {
  render(){
    return (
      <div className="user-header">
        <h3>Welcome, {this.props.currentUser}!</h3>
        <button onClick={this.props.logOutUser}>Logout</button>
      </div>
    );
  }
}

export default UserHeader;
