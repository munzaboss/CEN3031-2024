
import Search from './components/search'
import SideBar from './components/sideBar'
import './style/App.css'


function App() {

    const KEY = process.env.REACT_APP_API_KEY
    

  const fetchData = async () => {
    try {
      const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${KEY}&query=pasta&maxFat=25&number=2`
      )
      const result = await data.json()
      console.log(result)
    } catch (error) {
      console.log(error)
    }
  
  }
  return (
    <div className="App">


      <SideBar></SideBar>
      <Search></Search>
  
      
    </div>
  );
}

export default App;
