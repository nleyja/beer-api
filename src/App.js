import './App.css';


import BeerCards from './components/BeerCards/BeerCards';
import BeerContainer from './components/BeerContainer/BeerContainer';
import beers from './data/beers';

import { useState, useEffect } from 'react';

function App() {

  // const mappedBeers = beers.map((beer) => {
  //   return <BeerContainer name = {beer} />
  // })

  const [ beers, setBeers] =useState()

  const getBeers = () => {
    fetch("https://api.punkapi.com/v2/beers")
    .then((res)=> {
      return res.json()
    })
    .then((data) => {
      setBeers(data)
      console.log(data)
    })
  }

  useEffect (getBeers,[])
  // happens on component mount

  return (
    <div className="App">
      <h1 className="title">Beers of the World</h1>
      <div>
        {beers && <BeerContainer beersArr={beers}/>}
        
      </div>
    </div>
  );
}

export default App;
