import React from 'react';
import Poem from './Poem';

class PoemsContainer extends React.Component {
  render(){
    const makePoems = this.props.poems.map(poem => <Poem poem={poem} key={poem.id} />)

    return (
      <div className="poems-container">
        {
         makePoems
        }
      </div>
    );
  }
}

export default PoemsContainer;
