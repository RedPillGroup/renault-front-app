import MainLayout from './app/layout/MainLayout';
import Home from './app/pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  
  return (
    <Router>
    <MainLayout>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </MainLayout>
  </Router>
  );
}

export default App;
