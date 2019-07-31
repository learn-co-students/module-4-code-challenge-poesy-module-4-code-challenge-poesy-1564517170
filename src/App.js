import React from 'react';
import './App.css';
import LoginForm from './LoginForm'
import UserHeader from './UserHeader'
import PoemsContainer from './PoemsContainer'
import NewPoemForm from './NewPoemForm'

class App extends React.Component {
  state = {
    currentUser: "",
    poems: []
  }

  componentDidMount = () => {
    fetch("http://localhost:3000/poems")
    .then(res => res.json())
    .then(data => this.setState({ poems: data }))
  }

  handleLogIn = username => {
    this.setState({
      currentUser: username
    })
  }

  logOutUser = event => {
    this.setState({
      currentUser: ""
    })
  }

  createNewPoem = poemObj => {
    if (this.state.currentUser === "") {
      // Must make sure a user is logged in first
      alert("You must be logged in to submit a poem!")
    } else {
      // poemObj needs to have an author added to it
      // before being added to the array
      const newPoem = { ...poemObj, author: this.state.currentUser }

      // No persistence
      this.setState({
        poems: [ newPoem, ...this.state.poems ]
      })

      // Persistence
      // fetch("http://localhost:3000/poems", {
      //   method: "POST",
      //   headers: {
      //     'Content-Type': 'application/json',
      //     'Accept': 'application/json',
      //   },
      //   body: JSON.stringify(newPoem)
      // })
      // .then(res => res.json())
      // .then(data => this.setState({
      //   poems: [ data, ...this.state.poems ]
      // }))
    }
  }

  render(){
    return (
      <div className="app">
        <div className="sidebar">
          {
            this.state.currentUser === ""
            ?
            <LoginForm handleLogIn={this.handleLogIn}/>
            :
            <UserHeader
              currentUser={this.state.currentUser}
              logOutUser={this.logOutUser} />
          }
          <NewPoemForm createNewPoem={this.createNewPoem} />
        </div>
        <PoemsContainer poems={this.state.poems}/>
      </div>
    );
  }
}

export default App;
