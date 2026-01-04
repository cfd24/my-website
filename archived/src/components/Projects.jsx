// src/components/Projects.jsx
// Projects listing component (full project directory)
// - Purpose: render projects grouped by category for a comprehensive projects page.
// - Status: currently NOT imported by `src/App.jsx` (the app shows a curated Featured list).
//   This file is kept intentionally as a complete listing implementation for a future
//   `/projects` or `/more-info` view. If you'd like to remove unused code, this file
//   is a safe candidate to delete or move to `src/legacy/`.

import React from 'react'
import projects from '../data/projects.json'

function groupBy(arr, key) {
  return arr.reduce((acc, item) => {
    (acc[item[key]] = acc[item[key]] || []).push(item)
    return acc
  }, {})
}

export default function Projects() {
  const grouped = groupBy(projects, 'category')
  const order = ['61b', 'cs162', 'data100', 'data8', 'decal', 'seekers', 'community', 'personal']
  const featured = projects.filter((p) => p.featured)

  return (
    <section id="projects" className="section">
      <h2>Projects</h2>

      {featured.length > 0 && (
        <div className="featured">
          <h3>Featured</h3>
          <div className="projects-grid">
            {featured.map((p) => (
              <a key={p.id} className="project-card" href={p.repo} target="_blank" rel="noopener noreferrer">
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
        </div>
      )}

      {order.map((cat) => {
        const items = grouped[cat]
        if (!items) return null
        return (
          <div key={cat} className="project-category">
            <h3 className="category-title">{cat.toUpperCase()}</h3>
            <div className="projects-grid">
              {items.map((p) => (
                <a key={p.id} className="project-card" href={p.repo} target="_blank" rel="noopener noreferrer">
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
          </div>
        )
      })}
    </section>
  )
}
