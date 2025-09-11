
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Card from "./components/Card/Card";
import product1 from './assets/images/product1.jpg'
import product2 from './assets/images/product2.jpg'
import product3 from './assets/images/product3.jpg'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Account from './pages/Account';



function App() {

  const cardsData = [
    { title: "Mountain bike", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, magnam.", image: product1 },
    { title: "Road bike", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, magnam.", image: product2 },
    { title: "Folding bike", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, magnam.", image: product3 },
  ];

  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route
            path="/"
            element={
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
            }
          />
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About />} />
          <Route path="/shop" element={<Shop/>} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/account" element={<Account/>} />

        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
