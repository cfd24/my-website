// src/App.jsx
// App entry component for the portfolio site
// - Purpose: compose top-level layout (navigation, hero, main sections, footer)
// - Notes: Keep this file focused on layout only. Individual UI sections live in
//   `src/components/*`. Styling is primarily in `src/App.css`.

import './App.css'
import React from 'react'
import Featured from './components/Featured'

// Default export: application shell. Keep this file purely presentational.
export default function App() {
  return (
    <div className="app-shell">
      <header className="hero-large">
        <div className="hero-inner">
          <div className="hero-copy">
            <h1>Hi — I’m Crisostomo</h1>
            <p className="hero-sub">UC Berkeley junior in Computer Science & Applied Math, actively seeking a summer internship. I build practical web apps and tools and am eager to learn on the job.</p>
            <div className="hero-actions">
              <a className="btn primary" href="#projects">See Projects</a>
              <a className="btn" href="mailto:crisostomodunn24@gmail.com">Contact</a>
            </div>
          </div>
          <div className="hero-art">
            <img src="/photo2.jpg" alt="profile" />
          </div>
        </div>
      </header>

      <main>
        <section id="about" className="section about">
          <div className="container">
            <h2>About</h2>
            <p>I'm a junior at UC Berkeley studying Computer Science and Applied Mathematics, and I'm actively looking for a summer internship (my main priority). I don't have extensive industry experience yet, but I'm curious and open to a wide range of opportunities — I want to work on interesting, hands-on projects that help me grow and prepare for a long-term career.</p>
          </div>
        </section>

        <section id="projects" className="section projects">
          <div className="container">
            <h2>Projects</h2>
            <Featured />
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container">
          <p>© {new Date().getFullYear()} Crisostomo Dunn</p>
        </div>
      </footer>
    </div>
  )
}
