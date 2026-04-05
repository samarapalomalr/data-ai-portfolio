import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState } from "react";

export default function Software() {
  const [openModal, setOpenModal] = useState(null);

  const subareas = [
    { name: "Arquitetura de Software", description: "Definição de padrões de software, camadas, microserviços, escalabilidade e manutenção de sistemas." },
    { name: "Desenvolvimento Web", description: "Criação de aplicações web, front-end e back-end, utilizando frameworks modernos e boas práticas de codificação." },
    { name: "Desenvolvimento de Aplicativos", description: "Criação de apps móveis e híbridos (iOS, Android, multiplataforma) utilizando Flutter, React Native, Kotlin e Swift." },
    { name: "APIs e Integração", description: "Desenvolvimento de APIs REST e GraphQL, integração de sistemas e comunicação entre serviços." },
    { name: "DevOps & CI/CD", description: "Automatização do build, testes, deploy e monitoramento, garantindo entrega contínua e confiável." },
    { name: "Testes de Software", description: "Testes unitários, integração, end-to-end e TDD para garantir qualidade e robustez do código." },
    { name: "Segurança e Boas Práticas", description: "Implementação de segurança, controle de acesso, criptografia e padrões de desenvolvimento seguro." }, 
    { name: "Arquitetura de Microserviços", description: "Criação de sistemas distribuídos escaláveis e independentes, permitindo manutenção e deploy isolado de serviços." },
    { name: "Machine Learning & Inteligência Artificial", description: "Integração de modelos de IA em sistemas, análise de dados e automação de processos inteligentes." }
  ];

  return (
    <>
      <Navbar />

      <section style={{ padding: "60px 0", textAlign: "center", background: "#010214", color: "#fff" }}>
        <div className="container">
          <h1 style={{ fontSize: "3rem", background: "linear-gradient(90deg, #00d4ff, #ff6ec7)", WebkitBackgroundClip: "text", color: "transparent" }}>
            Desenvolvimento de Software
          </h1>
          <p style={{ maxWidth: "600px", margin: "20px auto 60px", fontSize: "1.2rem" }}>
            Área dedicada a conceitos, práticas e ferramentas de engenharia de software, arquitetura, desenvolvimento, testes, integração, segurança e entrega contínua.
          </p>

          {/* Subáreas */}
          <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "30px", marginBottom: "60px" }}>
            {subareas.map((area) => (
              <div
                key={area.name}
                onClick={() => setOpenModal(area.name)}
                className="card"
                style={{
                  background: "#11142a",
                  border: "2px solid #00d4ff",
                  borderRadius: "12px",
                  padding: "25px 30px",
                  minWidth: "200px",
                  cursor: "pointer",
                  color: "#00d4ff",
                  fontWeight: "bold",
                  textAlign: "center",
                  transition: "all 0.3s ease",
                }}
              >
                {area.name}
              </div>
            ))}
          </div>

          {/* Modal */}
          {openModal && (
            <div
              onClick={() => setOpenModal(null)}
              style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                background: "rgba(0,0,0,0.7)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                zIndex: 999,
              }}
            >
              <div
                onClick={(e) => e.stopPropagation()}
                style={{
                  background: "#010214",
                  padding: "30px",
                  borderRadius: "12px",
                  maxWidth: "500px",
                  color: "#fff",
                  textAlign: "center",
                  boxShadow: "0 8px 24px rgba(0,0,0,0.6)"
                }}
              >
                <h2 style={{ color: "#00d4ff", marginBottom: "20px" }}>{openModal}</h2>
                <p>{subareas.find(area => area.name === openModal)?.description}</p>
                <button
                  onClick={() => setOpenModal(null)}
                  style={{
                    marginTop: "20px",
                    padding: "10px 20px",
                    border: "none",
                    borderRadius: "6px",
                    background: "#ff6ec7",
                    color: "#fff",
                    cursor: "pointer",
                    fontWeight: "bold"
                  }}
                >
                  Fechar
                </button>
              </div>
            </div>
          )}

          {/* Ferramentas e Tecnologias */}
          <div style={{ textAlign: "center", marginTop: "60px" }}>
            <h2 style={{ fontSize: "2rem", marginBottom: "30px", color: "#ff6ec7" }}>Ferramentas & Tecnologias</h2>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "60px",
                flexWrap: "wrap",
                maxWidth: "1200px",
                margin: "0 auto",
              }}
            >
              <div style={{ textAlign: "left", flex: "1 1 250px", minWidth: "200px" }}>
                <h3 style={{ marginBottom: "15px", color: "#00d4ff" }}>Local</h3>
                <ul style={{ listStyleType: "none", padding: 0, fontSize: "1.1rem" }}>
                  <li>VSCode / IntelliJ / PyCharm</li>
                  <li>Git / GitHub / GitLab</li>
                  <li>Docker / Kubernetes</li>
                  <li>Python / Java / C# / JavaScript / TypeScript</li>
                </ul>
              </div>

              <div style={{ textAlign: "left", flex: "1 1 250px", minWidth: "200px" }}>
                <h3 style={{ marginBottom: "15px", color: "#00d4ff" }}>Nuvem</h3>
                <ul style={{ listStyleType: "none", padding: 0, fontSize: "1.1rem" }}>
                  <li>AWS (EC2, Lambda, RDS)</li>
                  <li>Google Cloud (Compute Engine, App Engine)</li>
                  <li>Azure (App Services, Functions)</li>
                  <li>Heroku / Vercel / Netlify</li>
                </ul>
              </div>

              <div style={{ textAlign: "left", flex: "1 1 250px", minWidth: "200px" }}>
                <h3 style={{ marginBottom: "15px", color: "#00d4ff" }}>Frameworks & Suporte</h3>
                <ul style={{ listStyleType: "none", padding: 0, fontSize: "1.1rem" }}>
                  <li>React / Vue / Angular - Frontend</li>
                  <li>Node.js / FastAPI / Flask - Backend</li>
                  <li>Spring Boot / .NET - Backend corporativo</li>
                  <li>Flutter / Dart - Desenvolvimento de aplicativos móveis</li>
                  <li>Jenkins / GitHub Actions - CI/CD</li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </section>

      <Footer />

      {/* CSS Hover */}
      <style jsx>{`
        .card:hover {
          transform: scale(1.05);
          box-shadow: 0 8px 24px rgba(0,212,255,0.6);
          background: #00d4ff;
          color: #010214;
        }
      `}</style>
    </>
  );
}