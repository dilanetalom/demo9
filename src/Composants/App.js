import log from './logo.svg';
import './App.css';
import Header from './Header';
import Listes from './Listes';
import Auth from './Auth';

function App() {
  return (
    <div className="App">
    <Listes />
      <header className="App-header">
        {/* <img src={log} className="App-logo" alt="logo" /> */}
        {/* <img src=('logo192.png') className="App-logo" alt="logo" /> */}
        <p>
          {/* Edit <code>src/App.js</code> and save to reload. */}
          <div>
             
          </div>
        </p>
        <Header />

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Auth />
      </header>
    </div>
    
  );
}

export default App;
