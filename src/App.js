import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './component/Home';
import About from './component/About';
import Blog from './component/Blog';
import Contact from './component/Contact';
import LandinggPage from './component/LandinggPage';
import Git from './gitHub_API/Git';

function App() {




  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/blog' element={<Blog/>}/>
          <Route path='/contact-us' element={<Contact/>}/>
          <Route path='/comingsoon' element={<LandinggPage/>}/>
          <Route path='/github' element={<Git/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
