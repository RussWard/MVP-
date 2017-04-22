import React from 'react';
import ReactDOM from 'react-dom';
import Bootstrap from 'bootstrap';

var size = 'display-heigth, '
const InputForm = () => (
    <form>
      <label>
        What wisdom have you gained today?:
        <div>
          <textarea className="" type="text" />
        </div>
      </label>
    <input type="submit" value="Submit" />
  </form>

)


export default InputForm;