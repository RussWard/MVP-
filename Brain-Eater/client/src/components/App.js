import React from 'react';
import Header from './Header.jsx';
//import InputForm from './InputForm.jsx';
import $ from 'jquery';


class App extends React.Component {
  constructor() {
    super();
    
    this.state = {
       userText: null,
    }
  }

  saveText (e) {
    this.setState({
      userText: e.target.value
    })
    console.log(this.state.userText);
  }
  
  postWisdom (lesson) {
    console.log('USERTEXT: ', this.state.userText);
    $.ajax({
      type: 'POST',
      url: 'http://127.0.0.1:8080/api/wisdom',
      dataType: 'json',
      contentType: 'application/json',
      data: JSON.stringify({username: 'The Ether', text: lesson}),
      success: function(data) {
        
        console.log('is this whats consoling?');
      },
      fail: function() {
        console.log('Your request failed.');
      }
    });
  }
  

  render() {
  
    return (
      <div>
        <Header />
        <hr />
        <form>
          <label>
          What wisdom have you gained today?:
          <div>
            <textarea className="" type="text" className="wisdomBox" onKeyUp={this.saveText.bind(this)} />
            <input type="submit" value="Submit" onClick={this.postWisdom.bind(this, this.state.userText)} />
          </div>
         </label>
       </form>
     </div>
    )
  }
}

//onClick={this.postWisdom.call(this.state.userText)}

export default App;