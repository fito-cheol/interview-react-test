import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Link, useLocation, useRoutes } from 'react-router-dom';
import './App.css';

const Home = () => {
  const [value, setValue] = useState('');
  return (
    <div className="page">
      <h2>Home Page</h2>
      <input
        type="text"
        placeholder="Type something..."
        value={value}
        onChange={e => setValue(e.target.value)}
        style={{ padding: '0.5rem', fontSize: '1rem' }}
      />
      <div style={{ marginTop: '1rem', color: '#888' }}>
        입력값: {value}
      </div>
    </div>
  );
};

const About = () => <div className="page"><h2>About Page</h2></div>;
const Services = () => <div className="page"><h2>Services Page</h2></div>;
const Contact = () => <div className="page"><h2>Contact Page</h2></div>;
const Profile = () => <div className="page"><h2>Profile Page</h2></div>;

const routes = [
  { path: '/', element: <Home /> },
  { path: '/about', element: <About /> },
  { path: '/services', element: <Services /> },
  { path: '/contact', element: <Contact /> },
  { path: '/profile', element: <Profile /> },
];

function AnimatedRoutes() {
  const location = useLocation();
  const [prevLocation, setPrevLocation] = useState(location);
  const [transitioning, setTransitioning] = useState(false);
  const prevRef = useRef(null);
  const currRef = useRef(null);

  const prevElement = useRoutes(routes, prevLocation);
  const currentElement = useRoutes(routes, location);

  useEffect(() => {
    if (location.key !== prevLocation.key) {
      setTransitioning(true);
      const timer = setTimeout(() => {
        setTransitioning(false);
        setPrevLocation(location);
      }, 600); // 애니메이션 시간
      return () => clearTimeout(timer);
    }
  }, [location, prevLocation, setPrevLocation]);

  return (
    <div
      className="page-container"
      style={{
        position: 'relative',
        minHeight: 200,
        transition: 'height 0.2s',
        overflow: 'hidden'
      }}
    >
      {transitioning && (
        <div
          className="page slideOut"
          style={{
            position: 'absolute',
            width: '100%',
            top: 0,
            left: 0,
            zIndex: 1,
            border: '2px solid red',
            background: 'rgba(255,0,0,0.1)'
          }}
          ref={prevRef}
        >
          <div style={{fontWeight: 'bold', color: 'red'}}>Prev</div>
          {prevElement}
        </div>
      )}
      <div
        className={`page${transitioning ? ' slideIn' : ''}`}
        style={{
          position: transitioning ? 'absolute' : 'relative',
          width: '100%',
          top: 0,
          left: 0,
          zIndex: 2,
          border: '2px solid blue',
          background: 'rgba(0,0,255,0.05)'
        }}
        ref={currRef}
      >
        <div style={{fontWeight: 'bold', color: 'blue'}}>Current</div>
        {currentElement}
      </div>
    </div>
  );
}

const AppBar = () => (
  <nav
    style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      background: '#1976d2',
      color: 'white',
      padding: '1rem',
      zIndex: 1000,
      display: 'flex',
      justifyContent: 'center',
      boxShadow: '0 2px 8px rgba(0,0,0,0.08)'
    }}
  >
    <Link to="/" style={{ marginRight: '1rem', color: 'white', textDecoration: 'none', fontWeight: 500 }}>Home</Link>
    <Link to="/about" style={{ marginRight: '1rem', color: 'white', textDecoration: 'none', fontWeight: 500 }}>About</Link>
    <Link to="/services" style={{ marginRight: '1rem', color: 'white', textDecoration: 'none', fontWeight: 500 }}>Services</Link>
    <Link to="/contact" style={{ marginRight: '1rem', color: 'white', textDecoration: 'none', fontWeight: 500 }}>Contact</Link>
    <Link to="/profile" style={{ color: 'white', textDecoration: 'none', fontWeight: 500 }}>Profile</Link>
  </nav>
);

const App = () => (
  <Router>
    <AppBar />
    <div style={{ marginTop: '80px' }}>
      <AnimatedRoutes />
    </div>
  </Router>
);

export default App;