import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home.jsx';
import { Toaster } from 'react-hot-toast';

const App = () => {
  return (
    <>
    <Toaster position='bottom-left' toastOptions={{duration: 4000,}} />
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </Router>
    </>
  )
}

export default App;