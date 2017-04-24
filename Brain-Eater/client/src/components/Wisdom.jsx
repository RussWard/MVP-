import React from'react';
import App from './App.js';
import Lesson from './Lesson.jsx';

const Wisdom = ({lessons}) => (
  <div id="wisdomBox">
    {lessons.map(lesson => <Lesson id={lesson.id} user={lesson.user} lesson={lesson.lesson} />)}
  </div> 
)

export default Wisdom;