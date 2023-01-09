import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Weather from './components/WeatherApp';

function App() {
  return (
    <div className="App">
      
      <header className="App-header">
        <span>Bienvenidos!!</span>
        <Weather/>
      </header>
    </div>
  );
}

export default App;
