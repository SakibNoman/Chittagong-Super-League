import logo from './logo.svg';
import './App.css';
import Players from './Components/Players/Players';
import Header from './Components/Header/Header';

function App() {
  return (
    <div class="App">
      <header className="App-header">
        <Header ></Header>
        <Players></Players>
      </header>
    </div>
  );
}

export default App;
