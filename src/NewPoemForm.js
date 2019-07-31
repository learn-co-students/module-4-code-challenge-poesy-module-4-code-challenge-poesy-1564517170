import React from 'react';

class NewPoemForm extends React.Component {
  state = {
    title: "",
    content: ""
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.createNewPoem(this.state)
  }

  render(){
    return (
      <div className="new-poem">
        <form className="new-poem-form" onSubmit={this.handleSubmit}>
          <input
            placeholder="Name your masterpiece..."
            name="title"
            value={this.state.title}
            onChange={this.handleChange}
            />
          <textarea
            placeholder="Your masterpiece belongs here..."
            name="content"
            value={this.state.content}
            onChange={this.handleChange}
            />
          <input type="submit" value="Share your masterpiece"/>
        </form>
      </div>
    );
  }
}

export default NewPoemForm;
