
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router,Switch, Route} from 'react-router-dom'
import Home from './components/Pages/Home'
import Gallery from './components/Pages/Gallery'
import AboutUs from './components/Pages/AboutUs';

function App() {
  return (
    <div className="App">
      <Router>
       <Navbar />
       <Switch>
       <Route path = '/' exact  component={Home}/>
       <Route path = '/gallery' component={Gallery}/>
       <Route path = '/AboutUs' component={AboutUs}/>

       </Switch>

      </Router>
     

    </div>
  );
}

export default App;
