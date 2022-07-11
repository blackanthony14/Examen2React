import React, { useState } from 'react';
import axios from 'axios';
import Navbar from "./Components/Navbar"
import Heroes from './Components/Heroes'
import List from './Components/List';
import "./Components/Styles.css"


function App() {
  const [heroName, setHeroName] = useState('')
  const [heroImage, setHeroImage] = useState('')
  const [heroPublisher, setHeroPublisher] = useState('')
  const [heroAligment, setHeroAligment] = useState('')
  const [heroPowerStats, setHeroPowerStats] = useState('')
  const [heroData, setHeroData] = useState('')
  const [savedData, setSavedData] = useState('')
  var dataHeroe = []
  const localStorageKey = "FavoriteHero"





  const querySearch = async () => {
    try {
      var aleatorio = (parseInt(Math.random() * (732 - 1 + 1)) + 1);
      console.log(aleatorio)
      const res = await axios.get(
        `https://superheroapi.com/api.php/338148107599656/${aleatorio}`
      );
      setHeroName(res.data.name);
      setHeroImage(res.data.image)
      setHeroPublisher(res.data.biography.publisher)
      setHeroAligment(res.data.biography.alignment)
      setHeroPowerStats(res.data.powerstats)
      setHeroData(res.data)

      // console.log(res.data.name);
      // console.log(res.data.image)
      // console.log(res.data.biography.publisher)
      // console.log(res.data.biography.alignment)
      // console.log(res.data.powerstats)

    } catch {
      console.log("error")
    }

  };
  const heroInfo = [heroName, heroImage, heroPublisher, heroAligment, heroPowerStats, heroData]
  const saveHeroName = async () => {
    setSavedData(heroName)
  }


  return (
    <>
      <>
        <Navbar />
      </>
      <div className='izquierda'>
        <div className="container">
          <Heroes theHero={heroInfo} />
          <>
            <button className="boton" onClick={querySearch}>Random Heroe</button>
          </>


        </div>
      </div>
      <div className='derecha'>
        <div className='container'>
          <List heroesName={savedData} />
          <button className="boton2" onClick={saveHeroName}>Save Heroe</button>
        </div>
      </div>
    </>
  );
}

export default App;



   // onChange={(e) => setQuery(e.target.value)}