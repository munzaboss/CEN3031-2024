
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

      <button onClick={fetchData}>DON'T CLICK ME UNLESS YOU NEED TO </button>
      
      
    </div>
  );
}

export default App;
