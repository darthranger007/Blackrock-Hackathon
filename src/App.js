import MainHomepage from './components/homepage/main-homepage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Videos from './components/financial-content/videos';
import Content from './components/financial-content/content';
import Womenschemes from './components/schemes/schemes';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <main>
              <Routes>
                <Route path="/" element={<MainHomepage />} />
                <Route path="/videos" element={<Videos />} />
                <Route path="/content" element={<Content />} />
                <Route path="/schemes" element={<Womenschemes />} />
              </Routes>
            </main>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
