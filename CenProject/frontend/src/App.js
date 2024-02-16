
import Search from './components/search'
import SideBar from './components/sideBar'
import './style/App.css'
import 'bootstrap/dist/css/bootstrap.css';


function App() {

  return (
    <div className="App">
      <SideBar></SideBar>
      <Search></Search>
    </div>
  );
}

export default App;
