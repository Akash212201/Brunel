import {
  BrowserRouter as Router, Routes, Route
} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import RegistrationForm from './pages/RegistrationForm';
import HomePage from './pages/HomePage';

function App() {
  return (
    <Router>
      <div className="App relative mx-6 ">

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<RegistrationForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
