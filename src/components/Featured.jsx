// src/components/Featured.jsx
// Featured projects UI
// - Purpose: display a small curated list of projects from `src/data/projects.json`.
// - Notes: kept intentionally minimal and presentational. Open external links in a new tab.

import projects from '../data/projects.json'

export default function Featured() {
  const featured = projects.filter((p) => p.featured)
  if (!featured.length) return null
  return (
    <section id="featured" className="section">
      <h2>Featured Projects</h2>
      <p className="muted" style={{ marginTop: '0.25rem' }}>
        Note: I can’t leave Berkeley course repositories public, but I can share them privately on request.
      </p>
      <div className="projects-grid">
        {featured.map((p) => (
          <a key={p.id} className="project-card" href={p.url || p.repo} target="_blank" rel="noopener noreferrer">
            <div className="project-thumb">
              <img src={p.image} alt={p.title} />
            </div>
            <div className="project-body">
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
              <div className="tags">
                {p.tags.map((t) => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>
      <p style={{ marginTop: '0.75rem' }}>
        <a className="cta" href="https://github.com/cfd24org" target="_blank" rel="noopener noreferrer">GitHub</a>
        &nbsp;•&nbsp;
        <a className="cta" href="https://www.linkedin.com/in/crisostomo-dunn/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        &nbsp;•&nbsp;
        <a className="cta" href="mailto:crisostomodunn24@gmail.com">Email</a>
      </p>
    </section>
  )
}
