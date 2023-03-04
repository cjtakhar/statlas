import { 
  BrowserRouter,
  Routes,
  Route,
 } from 'react-router-dom';
import Statlas from './components/statlas';

import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/chatlas" element={< Statlas />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
