import "./BeerContainer.scss"
import BeerCards from "../BeerCards/BeerCards"


const BeerContainer =  (props) => {

  const {beersArr} = props;
  // const {name, img_url, tagline} = beers
  //key value beersArr is now props

  const beerProfile = beersArr.map((beer) => {

    const {name, image_url, tagline} = beer
    return (
      <BeerCards className="beer-card" image_url={image_url} name={name} tagline={tagline} />
    )
  })

  return(
   <>
   {beerProfile}
   </>
  )
}

export default BeerContainer;