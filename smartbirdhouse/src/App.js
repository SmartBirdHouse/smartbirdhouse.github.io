import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from './Komponentit/Header.js';
import Navbar from './Komponentit/Navigointi/Navbar';
import Historia from './Sivut/historia';
import Esittely from './Sivut/esittely';
import Etusivu from './Sivut/etusivu.js';
import Tabs from './Komponentit/Tabs';

const App = () => {
  return (
    <>
    <div>
      <Header />
    </div>
     <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Etusivu/>}/>
        <Route path='/historia' element={<Historia/>} />
        <Route path='/esittely' element={<Esittely/>}/>
      </Routes>
     </Router>
    </>
  )
}

export default App;
