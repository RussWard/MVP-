import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js'

const InputForm = () => (
  //  constructor(props) {
  //   super(props);

  //   this.state = {
  //     userText: null
  //   }
  // }  

  // render() { 
  //   var saveText = function(e) {
  //     this.setState({
  //       userText: e.target.value
  //     })
  //   }
    
  //   var insertWisdom = function() {
  //     this.props.postWisdom(this.state.userText)
  //   }
    
    // return (
    <form>
      <label>
        What wisdom have you gained today?:
        <div>
          <textarea className="" type="text" className="wisdomBox" />
          <input type="submit" value="Submit" />
        </div>
      </label>
  </form>
//     )
//  }
    
)

export default InputForm;