import './App.css';
import Header from './components/header.js';
import Nav from './components/nav.js';
import Main from './components/main.js';
import Footer from './components/footer.js';
import './assets/restaurant.jpg';

function App() {
  return (
    <div className="App">
      <Nav />
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
