// import logo from './logo.svg';
import Nav from './components/Nav'
import Footer from './components/Footer'
import Card  from './components/Card'
import Data from './Data'
import './App.css';

function App() {

  const cards = Data.map( item => {
    return(
      <Card
        key = {item.id}
        item = {item}
       />
    )
  })


  return (
    <div className="App background">
      <Nav />
      <section className='card--lists'>
        {cards}
      </section>
      <Footer />
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
