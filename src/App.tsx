import React from 'react';
import './css/App.scss';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import { Home } from './pages/Home';
import { NotFoundPage } from './pages/Error';

function App() {
  return (
    <div className="App">
      <Router basename="/React-Hook">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFoundPage />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
