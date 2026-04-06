export default function ProjectCard({ project }) {
  return (
    <div
      className="card"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100%",
        width: "100%"
      }}
    >
      {/* CONTEÚDO SUPERIOR */}
      <div>
        <h3 style={{ lineHeight: "1.3" }}>{project.title}</h3>

        <p
          style={{
            marginTop: "12px",
            color: "var(--text-secondary)",
            lineHeight: "1.6",
            fontSize: "0.95rem"
          }}
        >
          {project.description}
        </p>
      </div>

      {/* TECH */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "8px",
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

      {/* BOTÕES */}
      <div
        style={{
          display: "flex",
          gap: "10px",
          flexWrap: "wrap"
        }}
      >
        <a
          className="btn-primary"
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            flex: "1",
            textAlign: "center"
          }}
        >
          GitHub
        </a>

        {project.demo && (
          <a
            className="btn-primary"
            style={{
              background: "#1e293b",
              flex: "1",
              textAlign: "center"
            }}
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