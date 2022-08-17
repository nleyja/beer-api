import "./BeerCards.scss"

const BeerCards =  ({ name, image_url, tagline}) => {
    return (
      <div className="profile-card">
        <img className="profile-card__image" src={image_url} alt={name} />
        <div className="profile-card__content">
          <h2 className="profile-card__heading">{name}</h2>
          <p>{tagline}</p>
        </div>
      </div>
  );
 };


export default BeerCards;