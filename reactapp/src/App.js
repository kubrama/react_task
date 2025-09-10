
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Card from "./components/Card/Card";
import product1 from './assets/images/product1.jpg'
import product2 from './assets/images/product2.jpg'
import product3 from './assets/images/product3.jpg'


function App() {

  const cardsData = [
    { title: "Mountain bike", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, magnam.", image: product1 },
    { title: "Road bike", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, magnam.", image: product2 },
    { title: "Folding bike", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, magnam.", image: product3 },
  ];

  return (
    <div className="App">
      <Header />

      <div className="cards-container">
        {cardsData.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            description={card.description}
            image={card.image}
          />
        ))}
      </div>
      <Footer />

    </div>
  );
}

export default App;
