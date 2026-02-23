import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header/Header';
import LazySection from './components/common/LazySection';
import Home from './pages/Home/Home';
import Reglamento from './pages/Reglamento/Reglamento';

// Lazy load pages
const Categorias = React.lazy(() => import('./pages/Categorias/Categorias'));
const Fechas = React.lazy(() => import('./pages/Fechas/Fechas'));
const Tarifario = React.lazy(() => import('./pages/Tarifario/Tarifario'));
const Jurados = React.lazy(() => import('./pages/Jurados/Jurados'));

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
          <Route path="/categorias" element={
            <React.Suspense fallback={<div style={{ height: '100vh' }} />}>
              <Categorias />
            </React.Suspense>
          } />
          <Route path="/fechas" element={
            <React.Suspense fallback={<div style={{ height: '100vh' }} />}>
              <Fechas />
            </React.Suspense>
          } />
          <Route path="/tarifario" element={
            <React.Suspense fallback={<div style={{ height: '100vh' }} />}>
              <Tarifario />
            </React.Suspense>
          } />
          <Route path="/jurados" element={
            <React.Suspense fallback={<div style={{ height: '100vh' }} />}>
              <Jurados />
            </React.Suspense>
          } />
        </Routes>

        <LazySection>
          <Footer />
        </LazySection>
      </main>
    </div>
  );
}

export default App;
