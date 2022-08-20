import "./NavMenu.scss";
import HighAcidity from "../HighAcidity/HighAcidity";
import HighABV from "../HighABV/HighABV";
import { useEffect, useRef } from "react";

const NavMenu = (props) => {

  const {beersArr, setBeers} = props;


// useRef allows to keep array value between renders
  const unfilteredBeersArr = useRef([])
  useEffect(()=>{
    unfilteredBeersArr.current = beersArr;
  },[])

  useEffect(() => {

  },[])

  // all beers mapped array
  const allBeers = unfilteredBeersArr.current.map((beer) => {
    return beer;
  })

  // Classic beers filterd array
  const filterClassic = unfilteredBeersArr.current.filter((beer) => {
    return beer.first_brewed.slice(3) < 2010;
  })

  // High alcohol filtered array
  const filterABV = unfilteredBeersArr.current.filter((beer) => {
    return beer.abv > 6;
  })

  // High acidity filterd array
  const filterHighAcidity = unfilteredBeersArr.current.filter((beer) => {
    return beer.ph < 4;
    })

    // searchbox input
    const handleSearchInput = (event) =>{
      const cleanInput = event.target.value.toLowerCase();
    
    const searchBox = unfilteredBeersArr.current.filter((beer) => {
      return beer.name.toLowerCase().includes(cleanInput);
      })

      setBeers(searchBox)
    }



  return (
    <nav className="nav-menu">
      <div>
        <p>Search Beers</p>
        <input onInput={handleSearchInput} placeholder="Find Beers" type="text" />
      </div>
      <p onClick={() =>setBeers(allBeers)}>All Beers</p>
      <p onClick={() =>setBeers(filterClassic)}>Classic Beers</p>
      <p onClick={() =>setBeers(filterABV)}>High ABV</p>
      <p onClick={() =>setBeers(filterHighAcidity)} >High Acidity</p>
    </nav>
  )
}

export default NavMenu