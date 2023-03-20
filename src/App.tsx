import React, { useEffect } from 'react';
import './css/App.scss';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import { Home } from './pages/Home';
import { NotFoundPage } from './pages/Error';
import Prism from "prismjs";
import "prismjs/components/prism-typescript";
import "prismjs/themes/prism-tomorrow.css";
import UseStatePage from './pages/UseStatePage';
import UseEffectPage from './pages/UseEffectPage';
import UseRefPage from './pages/UseRefPage';
import UseContextPage from './pages/UseContextPage';
import ContextAndReducerPage from './pages/ContextAndReducerPage';
import UseMemoPage from './pages/UseMemoPage';


function App() {
  useEffect(() => {
    Prism.highlightAll()
  }, [])
  return (
    <div className="App">
      <Router basename="/React-Hook">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/useState" element={<UseStatePage />} />
          <Route path="/useRef" element={<UseRefPage />} />
          <Route path="/useEffect" element={<UseEffectPage />} />
          <Route path="/useContext" element={<UseContextPage />} />
          <Route path="/different" element={<ContextAndReducerPage />} />
          <Route path="/useMemo" element={<UseMemoPage />} />
          
          <Route path="*" element={<NotFoundPage />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
