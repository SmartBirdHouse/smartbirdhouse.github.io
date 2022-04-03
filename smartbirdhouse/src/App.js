import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from './Header.js';
import Navbar from './Navbar';
import Historia from './Sivut/historia';
import Esittely from './Sivut/esittely';
import Etusivu from './Sivut/etusivu';

const App = () => {
  return (
    <>
    <div>
      <Header/>
    </div>
     {/* <Router>
      <Navbar />
      <Routes>
        <Route exact path='/etusivu' component={Etusivu} />
        <Route path='/historia' component={Historia} />
        <Route path='/esittely' component={Esittely} />
      </Routes>
     </Router>*/}
    </>
  )
}

const Testi = () => {
  return(<div>
    <h1>
      Birdhouse.jpg
    </h1>
  </div>)
} 

export default App;
