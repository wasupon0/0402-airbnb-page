import photoGrid from "../assets/photo-grid.png";

function Hero() {
  return (
    <div className="hero">
      <img
        className="hero--photo"
        src={photoGrid}
        height={232}
        alt="airbnb logo"
      />
      <h1 className="hero--header">Online Experiences</h1>
      <p className="hero--paragraph">
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home.
      </p>
    </div>
  );
}
export default Hero;
