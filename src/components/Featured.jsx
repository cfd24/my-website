// src/components/Featured.jsx
// Categorized project showcase UI

import projects from '../data/projects.json'
import ProjectCard from './ProjectCard'

export default function Featured() {
  // Categorize projects based on presence of live URL or featured flag
  const liveApps = projects.filter((p) => p.url && p.id !== "data-placeholder")
  const githubLibrary = projects.filter((p) => !p.url && p.repo)

  return (
    <div className="showcase-shell">
      {/* 🚀 Interactive Showcase Section */}
      <section className="section">
        <div className="section-header animate-in">
          <h2>Interactive Showcase</h2>
          <p>Production-ready applications and interactive tools.</p>
        </div>
        <div className="projects-grid">
          {liveApps.map((p, index) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </section>

      {/* 📚 Engineering Library Section */}
      <section className="section">
        <div className="section-header animate-in">
          <h2>Engineering Library</h2>
          <p>Coursework, low-level systems, and data research from UC Berkeley.</p>
        </div>
        <div className="library-grid">
          {githubLibrary.map((p) => (
            <a 
              key={p.id} 
              href={p.repo} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="library-card animate-in"
            >
              <h3>{p.title}</h3>
              <p>{p.shortDesc || p.desc}</p>
              <div className="project-tags">
                {p.tags.slice(0, 3).map((t) => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* 🔗 External Links */}
      <section className="section mini-links animate-in delay-2">
        <div className="container">
          <p>
            <a className="btn outline" href="https://github.com/cfd24org" target="_blank" rel="noopener noreferrer">Full GitHub Archive</a>
            &nbsp;
            <a className="btn outline" href="https://www.linkedin.com/in/crisostomo-dunn/" target="_blank" rel="noopener noreferrer">LinkedIn Connect</a>
          </p>
        </div>
      </section>
    </div>
  )
}
