import React from'react';
import App from './App.js';
import Wisdom from './Wisdom.jsx'


var Lesson = ({id, lesson, user}) => (
  <div id={id}>
    <p>{user || 'nobody'} Says {lesson || 'nothin\''}</p>
  </div> 
)

export default Lesson;