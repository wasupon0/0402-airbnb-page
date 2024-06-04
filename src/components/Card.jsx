import starIcon from "../assets/star.svg";

function Card({ coverImg, stats, location, title, price, openSpots }) {
  let badgeText;
  if (openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (location === "Online") {
    badgeText = "ONLINE";
  }
  return (
    <div className="card">
      {badgeText && <span className="card--badge">{badgeText}</span>}
      <img
        className="card--img"
        src={`src/assets/${coverImg}`}
        alt="card image"
      />

      <div className="card--status">
        <div className="card--rating">
          <img className="card--star" src={starIcon} alt="star icon" />
          <span> {stats.rating}</span>
          <span className="grey">
            {" "}
            ({stats.reviewCount}) <strong>·</strong>
          </span>
          <span className="grey"> {location}</span>
        </div>

        <h2>{title}</h2>
        <p>
          <strong>From ${price} </strong>/ person
        </p>
      </div>
    </div>
  );
}
export default Card;
