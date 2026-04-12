// src/App.jsx
// App entry component for the portfolio site
// - Purpose: compose top-level layout (navigation, hero, main sections, footer)

import './App.css'
import Featured from './components/Featured'

export default function App() {
  return (
    <div className="app-shell">
      {/* 🏛️ Hero Section */}
      <header className="hero-large">
        <div className="container">
          <div className="hero-inner">
            <div className="hero-copy animate-in">
              <h1>Hi — I’m Crisostomo</h1>
              <p className="hero-sub">
                I’m a UC Berkeley junior studying Computer Science and Applied Mathematics. 
                I build practical, data-driven applications that bridge the gap between 
                systems engineering and interactive experiences.
              </p>
              <div className="hero-actions">
                <a className="btn showcase highlight" href="/draft/">
                  Latest Launch: Draft Sim ⚾️
                </a>
                <a className="btn outline" href="#projects">
                  Projects
                </a>
                <a className="btn primary" href="mailto:crisostomodunn24@gmail.com">
                  Contact
                </a>
              </div>
            </div>
            <div className="hero-art animate-in delay-2">
              <img src="/photo2.jpg" alt="Crisostomo Dunn" />
            </div>
          </div>
        </div>
      </header>

      {/* 🚀 Project Showcase & Library */}
      <main id="projects" className="container">
        <Featured />
      </main>

      {/* 🏁 Footer */}
      <footer className="site-footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-left">
              <p className="footer-muted">
                © {new Date().getFullYear()} Crisostomo Dunn
              </p>
            </div>
            <div className="footer-right">
              <a className="btn outline" href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                View Resume
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
