import './App.css';
import Navigation from './components/layout/Navigation';
import SignUp from './components/signup/SignUp';
import Resume from './components/resume/Resume';
import Video from './components/video/Video';
import { BrowserRouter } from 'react-router-dom';
import SocialMedia from './components/layout/SocialMedia';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header" id="home">
          <Navigation />
        </header>
        <Video />
        <SignUp />
        <Resume />
        <SocialMedia />
      </div>
    </BrowserRouter>
  );
}

export default App;
