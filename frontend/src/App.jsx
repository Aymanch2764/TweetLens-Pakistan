import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Trends from './pages/Trends';
import Sentiment from './pages/Sentiment';
import Analytics from './pages/Analytics';
import About from './pages/About';
import Login from './pages/Login';
import Signup from './pages/Signup';


function AppContent() {
  const location = useLocation();
  
  // Hide Navbar and Footer on login and signup pages
  const hideNavAndFooter = location.pathname === '/login' || location.pathname === '/signup';

  return (
    <div className="min-h-screen flex flex-col">
      {!hideNavAndFooter && <Navbar />}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/trends" element={<Trends />} />
          <Route path="/sentiment" element={<Sentiment />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </main>
      {!hideNavAndFooter && <Footer />}
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
