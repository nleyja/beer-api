import "./BeerContainer.scss"
import BeerCards from "../BeerCards/BeerCards"


const BeerContainer =  (props) => {

  const {beersArr} = props;

  const beerProfile = beersArr.map((beer) => {
    return beer.name
  })

  return(
   <>
   {beerProfile}
   </>
  )
}

export default BeerContainer