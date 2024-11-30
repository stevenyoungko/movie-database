import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Detail from './pages/Detail';
import WatchList from './pages/WatchList';
import ErrorFallback from './components/ErrorFallback';
import { ErrorBoundary } from 'react-error-boundary';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <header className="app-header">
          <h1>🎬 電影數據庫</h1>
          <p className="subtitle">探索你最愛的電影</p>
        </header>
        <main className="main-content">
          <ErrorBoundary
            FallbackComponent={ErrorFallback}
            onReset={() => {
              window.location.reload();
            }}
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/movies/:id" element={<Detail />} />
              <Route path="/watch_list" element={<WatchList />} />
            </Routes>
          </ErrorBoundary>
        </main>
        <footer className="app-footer">
          <p>© 2024 電影數據庫 | 所有權利保留</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
