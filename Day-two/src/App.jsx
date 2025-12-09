import React from 'react'
import {Routes, Route} from 'react-router-dom';
import Blog from './Components/Blog';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Blog />} />
    </Routes>
  )
}

export default App;