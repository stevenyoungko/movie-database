import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import ErrorFallback from './components/ErrorFallback';
import { ErrorBoundary } from 'react-error-boundary';
import './App.css';

const Home = lazy(() => import('./pages/Home'));
const Detail = lazy(() => import('./pages/Detail'));
const WatchList = lazy(() => import('./pages/WatchList'));
const SimpleVirtualizedList = lazy(
  () => import('./pages/SimpleVirtualizedList')
);
const LoadingFallback = () => <p>載入中...</p>;

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
            <Suspense fallback={<LoadingFallback />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/movies/:id" element={<Detail />} />
                <Route path="/watch_list" element={<WatchList />} />
                <Route
                  path="/virtualized_list"
                  element={<SimpleVirtualizedList />}
                />
              </Routes>
            </Suspense>
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
