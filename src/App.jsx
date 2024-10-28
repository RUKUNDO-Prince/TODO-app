import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Header, Sidebar } from './components';
import { Dashboard } from './pages';

function App() {
  return (
    <div className="flex">
      <Router>
        <Sidebar />
        <div className="flex-grow">
          {/* <Header /> */}
          <Routes>
            {/* <Route path="/" element={<Dashboard />} /> */}
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
