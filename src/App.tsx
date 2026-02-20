import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header/Header';
import LazySection from './components/common/LazySection';
import Home from './pages/Home/Home';
import Reglamento from './pages/Reglamento/Reglamento';

// Lazy load Footer
const Footer = React.lazy(() => import('./components/layout/Footer/Footer'));

function App() {
  return (
    <div className="App">
      <Header />
      <main style={{ marginTop: '140px', minHeight: 'calc(100vh - 140px)' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/reglamento" element={<Reglamento />} />
        </Routes>

        <LazySection>
          <Footer />
        </LazySection>
      </main>
    </div>
  );
}

export default App;
