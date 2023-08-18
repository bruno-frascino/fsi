import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TrayCallbackPage from './pages/tray/callback';
import TrayCallbackAuthPage from './pages/tray/callback/auth';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<h1>FSI Root</h1>} />
        <Route path="/tray/callback" Component={TrayCallbackPage} />
        <Route path="/tray/callback/auth" Component={TrayCallbackAuthPage} />
        {/* Define other routes here if needed */}
        {/* For example: */}
        {/* <Route path="/about" component={AboutPage} /> */}
        {/* <Route path="/contact" component={ContactPage} /> */}

        {/* A catch-all route for 404 Not Found */}
        {/* <Route path="*" component={NotFoundPage} /> */}
      </Routes>
    </Router>
  );
}

export default App;
