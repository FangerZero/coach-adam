import './App.css';
import Navigation from './components/layout/Navigation'
import Resume from './components/resume/Resume'
import Video from './components/video/Video';
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header" id="home">
          <Navigation />
        </header>
        <body>
          <Video />
          <Resume />
        </body>
      </div>
    </BrowserRouter>
  );
}

export default App;
