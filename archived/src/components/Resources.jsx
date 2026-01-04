// src/components/Resources.jsx
// Resources page (standalone view)
// - Purpose: provide resume, transcript, and a curated list of project mirrors.
// - Notes: this component is used by `public/resources.html` as a static entry.

import React from 'react'
import '../App.css'

const mirrors = [
  { name: 'Computer Vision DeCal (full repo)', url: 'https://github.com/cfd24org/cv_decal' },
  { name: 'Data100 (full repo)', url: 'https://github.com/cfd24org/data100' },
  { name: 'Data8', url: 'https://github.com/cfd24org/data8' },
  { name: '61B — fa24-s181 (mirror)', url: 'https://github.com/cfd24org/fa24-s181' },
  { name: '61B — proj3 (g303)', url: 'https://github.com/cfd24org/fa24-proj3-g303' },
  { name: 'CS162 — student617', url: 'https://github.com/cfd24org/student617' },
  { name: 'CS162 — group21', url: 'https://github.com/cfd24org/group21' },
  { name: 'Sentient Chat Hack App', url: 'https://github.com/cfd24org/SentientChatHack---App' },
  { name: 'Seekers Alliance Projects', url: 'https://github.com/cfd24org/Seekers_Alliance_Projects' },
  { name: 'Code Tenderloin Projects', url: 'https://github.com/cfd24org/CodeTenderloinProjects' },
  { name: 'honkai_stuff', url: 'https://github.com/cfd24org/honkai_stuff' },
  { name: 'kevini', url: 'https://github.com/cfd24org/kevini' },
]

export default function Resources() {
  return (
    <main className="resources-page">
      <header className="resources-hero">
        <div className="resources-hero-inner">
          <div className="resources-title">
            <h1>Resources</h1>
            <p className="tagline">Resume, transcript, and project mirrors — organized and easy to browse.</p>
          </div>
          <nav className="resources-cta">
            <a className="cta" href="/">Home</a>
            <a className="cta" href="/resume.pdf" target="_blank" rel="noopener noreferrer">Download Resume</a>
          </nav>
        </div>
      </header>

      <section className="resources-content">
        <div className="resources-grid">
          <div className="resources-left">
            <div className="card">
              <h3>Resume</h3>
              <p>Up-to-date resume with contact info and experience.</p>
              <p>
                <a className="cta" href="/resume.html" target="_blank" rel="noopener noreferrer">Open resume</a>
                &nbsp;•&nbsp;
                <a className="cta" href="/resume.pdf" target="_blank" rel="noopener noreferrer" download>Download PDF</a>
              </p>
            </div>

            <div className="card">
              <h3>Unofficial Transcript</h3>
              <p>Course list and grades available in the transcript PDF.</p>
              <p>
                <a className="cta" href="/unofficial_transcript_cd.pdf" target="_blank" rel="noopener noreferrer">Open transcript (PDF)</a>
              </p>
            </div>
          </div>

          <div className="resources-right">
            <div className="card">
              <h3>Project Mirrors</h3>
              <p className="muted">A selection of repositories mirrored for convenience.</p>
              <ul className="project-list">
                {mirrors.map((m) => (
                  <li key={m.url}><a href={m.url} target="_blank" rel="noopener noreferrer">{m.name}</a></li>
                ))}
              </ul>
            </div>

            <div className="card small">
              <h3>Contact</h3>
              <p className="muted">Questions or collabs?</p>
              <p><a href="mailto:crisostomodunn24@gmail.com">crisostomodunn24@gmail.com</a></p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
