export default function ProjectCard({ project }) {
  return (
    <div
      className="card"
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        justifyContent: "space-between"
      }}
    >
      {/* CONTEÚDO SUPERIOR */}
      <div>
        <h3>{project.title}</h3>

        <p
          style={{
            marginTop: "12px",
            color: "var(--text-secondary)",
            lineHeight: "1.5"
          }}
        >
          {project.description}
        </p>
      </div>

      {/* TECH CENTRALIZADO */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "10px",
          justifyContent: "center",
          margin: "20px 0"
        }}
      >
        {project.tech.map((tech, i) => (
          <span key={i} className="tech-tag">
            {tech}
          </span>
        ))}
      </div>

      {/* BOTÕES EMBAIXO */}
      <div
        style={{
          display: "flex",
          gap: "15px"
        }}
      >
        <a
          className="btn-primary"
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>

        {project.demo && (
          <a
            className="btn-primary"
            style={{ background: "#1e293b" }}
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
          >
            Demo
          </a>
        )}
      </div>
    </div>
  );
}