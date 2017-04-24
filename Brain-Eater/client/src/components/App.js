import React from 'react';
import Header from './Header.jsx';
//import InputForm from './InputForm.jsx';
import $ from 'jquery';
import ReactDOM from 'react-dom';
import Wisdom from './Wisdom.jsx';
import Lesson from './Lesson.jsx';

    
class App extends React.Component {
  constructor() {
    super();
    
    this.state = {
       userText: null,
       currentWisdom: [],
       currentUser: 'The Ether', 
    }
  }

  saveText (e) {
    this.setState({
      userText: e.target.value
    })
    console.log(this.state.userText);
  }
  
  postWisdom (user, lesson) {
    console.log('USERTEXT: ', this.state.userText);
    $.ajax({
      type: 'POST',
      url: 'http://127.0.0.1:8080/api/wisdom',
      dataType: 'json',
      contentType: 'application/json',
      data: JSON.stringify({username: user, text: lesson}),
      success: function(data) {
        
        console.log('is this whats consoling?');
      },
      fail: function() {
        console.log('Your request failed.');
      }
    });
  }
  
  holdWisdom(data) {
    this.setState({
      currentWisdom: data
    });
  }

  receiveWisdom (callback) {
    $.ajax({
      type: 'GET', 
      url: 'http://127.0.0.1:8080/api/getwisdom',
      dataType: 'json',
      contentType: 'application/json',
      success: function(data) {
        console.log(data);
        callback(data);
      },
      fail: function() {
        console.log('your request failed');
      }
    });
  }
  
  holdUser (e) {
    this.setState({
      currentUser: e.target.value
    })
  }
  

  render() {
  
    return (
      <div>
        <Header />
        <hr />
        <form>
          Identify Yourself!
          <div>
            <input type="text" name="name" onKeyUp={this.holdUser.bind(this)} />
          </div>
        </form>
        <form>
          <label>
            What wisdom have you gained today?:
            <div>
              <textarea type="text" className="wisdomBox" onKeyUp={this.saveText.bind(this)} />
              <input type="submit" value="Submit" onClick={this.postWisdom.bind(this, this.state.currentUser, this.state.userText)} />
            </div>
          </label>
        </form>
        <div>
          <p>Shall I Vomit Some Wisdom At You?</p>
          <button onClick={this.receiveWisdom.bind(this, this.holdWisdom.bind(this))}>By All Means, please do</button>
          <Wisdom lessons={this.state.currentWisdom} />
        </div>
      </div>
    )
  }
}

//onClick={this.postWisdom.call(this.state.userText)}

export default App;