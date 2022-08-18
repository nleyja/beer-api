import './App.css';


import BeerCards from './components/BeerCards/BeerCards';
import BeerContainer from './components/BeerContainer/BeerContainer';
import beers from './data/beers';
import Header from './components/Header/Header';

import { useState, useEffect } from 'react';
import NavMenu from './components/NavMenu/NavMenu';

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
      <header>
        <Header />
      </header>
      <div className='all-cards'>
        <div className="nav">
          <NavMenu  />
        </div>
        {beers && <BeerContainer beersArr={beers}/>}
      </div>
    </div>
  );
}

export default App;
