import "./NavMenu.scss";
import HighAcidity from "../HighAcidity/HighAcidity";
import HighABV from "../HighABV/HighABV";
import { useEffect, useRef } from "react";

const NavMenu = (props) => {

  const {beersArr, setBeers} = props;

  const unfilteredBeersArr = useRef([])
  useEffect(()=>{
    unfilteredBeersArr.current = beersArr;
  },[])

  useEffect(() => {

  },[])

  const allBeers = unfilteredBeersArr.current.map((beer) => {
    return beer;
  })

  const filterClassic = unfilteredBeersArr.current.filter((beer) => {
    return beer.first_brewed.slice(3) < 2010;
  })

  const filterABV = unfilteredBeersArr.current.filter((beer) => {
    return beer.abv > 6;
  })

  const filterHighAcidity = unfilteredBeersArr.current.filter((beer) => {
    return beer.ph < 4;
    })

  return (
    <nav className="nav-menu">
      <p>Search</p>
      <p onClick={() =>setBeers(allBeers)}>All Beers</p>
      <p onClick={() =>setBeers(filterClassic)}>Classic Beers</p>
      <p onClick={() =>setBeers(filterABV)}>High ABV</p>
      <p onClick={() =>setBeers(filterHighAcidity)} >High Acidity</p>
    </nav>
  )
}

export default NavMenu