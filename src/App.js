import './App.css';
import Navigation from './components/navigation/Navigation'
import Resume from './components/resume/Resume'
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header" id="home">
          <Navigation />
        </header>
        <body>
          <Resume />
        </body>
      </div>
    </BrowserRouter>
  );
}

export default App;
