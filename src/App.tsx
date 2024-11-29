import MovieSearch from './components/MovieSearch';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1>🎬 電影數據庫</h1>
        <p className="subtitle">探索你最愛的電影</p>
      </header>
      <main className="main-content">
        <MovieSearch />
      </main>
      <footer className="app-footer">
        <p>© 2024 電影數據庫 | 所有權利保留</p>
      </footer>
    </div>
  );
}

export default App;
