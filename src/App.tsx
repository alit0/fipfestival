import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header/Header';
import LazySection from './components/common/LazySection';
import Home from './pages/Home/Home';
import Reglamento from './pages/Reglamento/Reglamento';
import Login from './pages/Login/Login';
import Registro from './pages/Registro/Registro';
import { AuthProvider } from './context/AuthContext';

// Lazy load pages
const Categorias = React.lazy(() => import('./pages/Categorias/Categorias'));
const Fechas = React.lazy(() => import('./pages/Fechas/Fechas'));
const Tarifario = React.lazy(() => import('./pages/Tarifario/Tarifario'));
const Jurados = React.lazy(() => import('./pages/Jurados/Jurados'));
const Premios = React.lazy(() => import('./pages/Premios/Premios'));
const Inscripcion = React.lazy(() => import('./pages/Inscripcion/Inscripcion'));
const HallFama = React.lazy(() => import('./pages/HallFama/HallFama'));

// Lazy load Footer
const Footer = React.lazy(() => import('./components/layout/Footer/Footer'));

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <Header />
        <main style={{ marginTop: '140px', minHeight: 'calc(100vh - 140px)' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/reglamento" element={<Reglamento />} />
            <Route path="/login" element={<Login />} />
            <Route path="/registro" element={<Registro />} />
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
            <Route path="/premios" element={
              <React.Suspense fallback={<div style={{ height: '100vh' }} />}>
                <Premios />
              </React.Suspense>
            } />
            <Route path="/inscripcion" element={
              <React.Suspense fallback={<div style={{ height: '100vh' }} />}>
                <Inscripcion />
              </React.Suspense>
            } />
            <Route path="/hall" element={
              <React.Suspense fallback={<div style={{ height: '100vh' }} />}>
                <HallFama />
              </React.Suspense>
            } />
          </Routes>

          <LazySection>
            <Footer />
          </LazySection>
        </main>
      </div>
    </AuthProvider>
  );
}

export default App;
