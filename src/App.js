import { 
  BrowserRouter,
  Routes,
  Route,
 } from 'react-router-dom';
import Home from './components/home';
import Dash from './components/dash';
import Chatlas from './components/chatlas';

import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dash" element={<Dash />} />
          <Route path="/chatlas" element={<Chatlas />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
