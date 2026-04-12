// src/components/ProjectCard.jsx
// High-fidelity interactive card for featured/live projects

export default function ProjectCard({ project }) {
  const { title, desc, image, tags, url, repo } = project;

  return (
    <a 
      href={url || repo} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="project-card animate-in"
    >
      <div className="project-thumb">
        <img src={image || "/favicon.svg"} alt={title} loading="lazy" />
      </div>
      <div className="project-body">
        <span className="category-label">{url ? "Live Application" : "GitHub Repository"}</span>
        <h3>{title}</h3>
        <p>{desc}</p>
        <div className="project-tags">
          {tags.map((tag) => (
            <span key={tag} className="tag">{tag}</span>
          ))}
        </div>
      </div>
    </a>
  );
}
