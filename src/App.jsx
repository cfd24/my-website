// src/App.jsx
// App entry component for the portfolio site
// - Purpose: compose top-level layout (navigation, hero, main sections, footer)
// - Notes: Keep this file focused on layout only. Individual UI sections live in
//   `src/components/*`. Styling is primarily in `src/App.css`.

import './App.css'
import Featured from './components/Featured'

// Default export: application shell. Keep this file purely presentational.
export default function App() {
  return (
    <div className="app-shell">
      <header className="hero-large">
        <div className="hero-inner">
          <div className="hero-copy">
            <h1>Hi — I’m Crisostomo</h1>
            <p className="hero-sub">I’m a UC Berkeley junior studying Computer Science and Applied Mathematics, currently seeking a summer internship. I build practical web applications and tools, learn quickly, and enjoy hands‑on development that prepares me for a long-term career.</p>
            <div className="hero-actions">
              <a className="btn primary" href="#projects">See Projects</a>
              <a className="btn highlight" href="/drinks/">Play Games 🍻</a>
              <a className="btn" href="/yt-scraper/" target="_blank" rel="noopener noreferrer">Creator DB 📺</a>
              <a className="btn" href="mailto:crisostomodunn24@gmail.com">Contact</a>
              <a className="btn" href="/resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
            </div>
          </div>
          <div className="hero-art">
            <img src="/photo2.jpg" alt="profile" />
          </div>
        </div>
      </header>

      <main>
        <section id="projects" className="section projects">
          <div className="container">
            <h2>Projects</h2>
            <Featured />
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container">
          <p>
            © {new Date().getFullYear()} Crisostomo Dunn
            &nbsp;•&nbsp;
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
          </p>
        </div>
      </footer>
    </div>
  )
}
