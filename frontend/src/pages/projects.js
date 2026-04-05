import { useState } from "react";
import Navbar from "../components/Navbar";
import ProjectCard from "../components/ProjectCard";
import Footer from "../components/Footer";

import { projects } from "../data/projects";
import { projectsIA } from "../data/projectsIA";
import { projectsApps } from "../data/projectsApps";
import { projectsED } from "../data/projectsED";

export default function Projects() {
  const subareas = [
    { name: "Inteligência Artificial", projects: projectsIA },
    { name: "Aplicativos", projects: projectsApps },
    { name: "Engenharia de Dados", projects: projectsED },
  ];

  const [selectedSubarea, setSelectedSubarea] = useState(null);

  return (
    <>
      <Navbar />

      <section>
        <div className="container">
          <h1>Projetos</h1>
          <p style={{ marginTop: "15px", color: "var(--text-secondary)", marginBottom: "40px" }}>
            Projetos desenvolvidos em engenharia de dados, machine learning, inteligência artificial e sistemas em geral.
          </p>

          {/* Parte 1: Projetos Livres */}
          <h2>Projetos Livres</h2>
          <div className="grid projects-grid" style={{ marginBottom: "50px" }}>
            {projects.map((project, i) => (
              <ProjectCard key={i} project={project} />
            ))}
          </div>

          {/* Parte 2: Subáreas */}
          <h2>Subáreas</h2>
          <div style={{ display: "flex", gap: "15px", marginBottom: "30px" }}>
            {subareas.map((sub) => (
              <button
                key={sub.name}
                onClick={() => setSelectedSubarea(sub.name)}
                style={{
                  padding: "8px 16px",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                  backgroundColor: selectedSubarea === sub.name ? "var(--primary)" : "var(--button-bg)",
                  color: selectedSubarea === sub.name ? "white" : "var(--text-secondary)",
                }}
              >
                {sub.name}
              </button>
            ))}
          </div>

          {/* Renderiza os projetos da subárea selecionada */}
          {selectedSubarea && (
            <div className="grid projects-grid">
              {subareas
                .find((sub) => sub.name === selectedSubarea)
                .projects.map((project, i) => (
                  <ProjectCard key={i} project={project} />
                ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </>
  );
}