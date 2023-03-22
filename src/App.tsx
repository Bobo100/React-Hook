import './css/App.scss';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import { Home } from './pages/Home';
import { NotFoundPage } from './pages/Error';
import UseStatePage from './pages/UseStatePage';
import UseEffectPage from './pages/UseEffectPage';
import UseRefPage from './pages/UseRefPage';
import UseContextPage from './pages/UseContextPage';
import ContextAndReducerPage from './pages/ContextAndReducerPage';
import UseMemoPage from './pages/UseMemoPage';
import UseReducerPage from './pages/UseReducerPage';
import UseCallbackPage from './pages/UseCallbackPage';
import CallbackAndMemoPage from './pages/CallbackAndMemoPage';
import { Footer } from './pages/component/Footer';
import UseTransitionPage from './pages/UseTransitionPage';
import { Navbar } from './pages/component/Navbar';
import UseDeferredValuePage from './pages/UseDeferredValuePage';


function App() {

  return (
    <div className="App">
      <Router basename="/React-Hook">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/useState" element={<UseStatePage />} />
          <Route path="/useRef" element={<UseRefPage />} />
          <Route path="/useEffect" element={<UseEffectPage />} />

          <Route path="/useContext" element={<UseContextPage />} />
          <Route path="/useReducer" element={<UseReducerPage />} />
          <Route path="/ContextAndReducerPage" element={<ContextAndReducerPage />} />

          <Route path="/useMemo" element={<UseMemoPage />} />
          <Route path="/useCallback" element={<UseCallbackPage />} />
          <Route path="/CallbackAndMemoPage" element={<CallbackAndMemoPage />} />

          <Route path="/useTransition" element={<UseTransitionPage />} />
          <Route path="/useDeferredValue" element={<UseDeferredValuePage />} />

          <Route path="*" element={<NotFoundPage />}></Route>
        </Routes>
        <Footer />
      </Router>

    </div>
  );
}

export default App;
