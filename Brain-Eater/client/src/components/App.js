import React from 'react';
import Header from './Header.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }
  render() {
    return (
      <div>
        <Header />
        <hr />
        <input class='input' />
      </div>
    )
  }
}

export default App;