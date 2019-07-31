import React from 'react';

class Poem extends React.Component {
  state = {
     color: "black"
  }

  handleClick = event => {
    if (this.state.color === "black") {
      this.setState({ color: "red" })
    } else {
      this.setState({ color: "black" })
    }
  }

  render(){
    return (
      <div style={{color: this.state.color}} onClick={this.handleClick}>
        <h3>Title: {this.props.poem.title}</h3>
        <p>{this.props.poem.content}</p>
        <strong>- By {this.props.poem.author}</strong>
      </div>
    );
  }
}

export default Poem;
