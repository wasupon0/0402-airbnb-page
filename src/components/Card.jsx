import cardImg from "../assets/katie-zaferes.png";
import starImg from "../assets/star.svg";

function Card() {
  return (
    <div className="card">
      <span className="card--badge">SOLD OUT</span>
      <img className="card--img" src={cardImg} alt="card image" />

      <div className="card--status">
        <div className="card--rating">
          <img className="card--star" src={starImg} alt="star image" />
          <span> 5.0</span>
          <span className="grey">
            {" "}
            (6) <strong>·</strong>
          </span>
          <span className="grey"> USA</span>
        </div>

        <span>Life lessons with Katie Zaferes</span>
        <span>
          <strong>From $136 </strong>/ person
        </span>
      </div>
    </div>
  );
}
export default Card;
