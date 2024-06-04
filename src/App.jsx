import "./App.css";
import Card from "./components/Card";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import data from "./data";

function App() {
  const cards = data.map((i) => {
    return <Card key={i.id} {...i} />;
  });

  return (
    <>
      <Navbar />
      <Hero />

      <section className="card--list">{cards}</section>
    </>
  );
}

export default App;
