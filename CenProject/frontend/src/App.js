
import Search from './components/search'
import SideBar from './components/sideBar'
import Login from './components/Login'
import './style/App.css'
import 'bootstrap/dist/css/bootstrap.css'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Fragment } from 'react'


function HomePage() {
  return (
    <>
      <SideBar/>
      <Search/>
    </>
  );
}

function App() {

  return (
    <Router>
    <div className="App">
      <Routes>
        <Route path = '/login' Component={Login}/>
        <Route path = '/' Component={HomePage}/>
      </Routes>
      
    </div>
    </Router>
  );
}

export default App;
