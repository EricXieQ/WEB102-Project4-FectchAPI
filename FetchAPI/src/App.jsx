import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'
import Random_Dog from '../Components/Random_Dog'

function App() {
  const [dog, setDog] = useState(null)
  const [breed, allBreed] = useState(null)
  const URL = "https://dog.ceo/api/breeds/image/random"
  // const URL1 = "https://dog.ceo/api/breed/ fill.IN /images/random"
  // const URL_allBreeds = "https://dog.ceo/api/breeds/list/all"

  const fetchData = async () => {
    
    let response = await axios.get(URL)
    setDog(response.data)
    // let response_allBreed = await axios.get(URL_allBreeds)
    // allBreed(response_allBreed)
  }

  useEffect(() => {
    fetchData();
  }, [])


  const handleRefresh = () => {
      window.location.reload();
  };

  return (

    <div>
      <h1 className="header">Dog of the Day!</h1>
      {dog && <Random_Dog dog_obj = {dog} /> }
      <button onClick={handleRefresh}>
        Get New Doggie!!!
      </button>
    </div>
  )
   
}

export default App
