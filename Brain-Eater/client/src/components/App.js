import React from 'react';
import Header from './Header.jsx';
import InputForm from './InputForm.jsx';
//import $ from 'jquery';

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
        <InputForm />
      </div>
    )
  }
}

export default App;