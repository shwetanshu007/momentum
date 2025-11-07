import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import BlogPost1 from './components/BlogPost1';
import BlogPost2 from './components/BlogPost2';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/blog/measuring-marketing-roi" element={<BlogPost1 />} />
        <Route path="/blog/building-cohesive-brand-strategy" element={<BlogPost2 />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;