import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState } from "react";

export default function DataEngineering() {
  const [openModal, setOpenModal] = useState(null);

  const subareas = [
    { name: "ETL e Pipelines", description: "Extração, transformação e carregamento de dados em sistemas estruturados e não estruturados." },
    { name: "Data Warehousing", description: "Construção e gerenciamento de armazéns de dados para análises e relatórios." },
    { name: "Data Lake e Lakehouse", description: "Armazenamento escalável de dados brutos e estruturados, integrando múltiplas fontes." },
    { name: "Streaming de Dados", description: "Processamento de dados em tempo real utilizando ferramentas como Kafka e Spark Streaming." },
    { name: "Modelagem de Dados", description: "Criação de modelos conceituais, lógicos e físicos para organizar e relacionar informações de forma eficiente." },
    { name: "Ciclo de Vida e Segurança de Dados", description: "Governança, controle de acesso, criptografia e políticas de retenção de dados." },
    { name: "Arquitetura de Pipeline", description: "Velocidade de aquisição de dados, computação necessária, armazenamento, custo, microserviços e orquestradores de containers." },
    { name: "Sistemas Distribuídos", description: "Conceitos de armazenamento e processamento distribuído, tolerância a falhas e escalabilidade." },
    { name: "Formatos de Arquivo e Compressão", description: "Principais formatos de arquivo em engenharia de dados, compressão, armazenamento colunar e particionamento, com atividades práticas." },
    { name: "Data Quality & Observability", description: "Garantia de qualidade de dados, rastreabilidade (data lineage) e monitoramento de pipelines." },
    { name: "Enterprise Data Hub (EDH)", description: "Centralização e integração de dados empresariais em uma plataforma única." },
    { name: "DevOps para Engenharia de Dados", description: "Técnicas e ferramentas para montar toda a infraestrutura de dados dentro de uma empresa." },
    { name: "Engenharia de Dados com Python", description: "Construção de pipelines completos e atividades práticas usando Python." }
  ];

  return (
    <>
      <Navbar />

      <section style={{ padding: "60px 0", textAlign: "center", background: "#010214", color: "#fff" }}>
        <div className="container">
          <h1 style={{ fontSize: "3rem", background: "linear-gradient(90deg, #00d4ff, #ff6ec7)", WebkitBackgroundClip: "text", color: "transparent" }}>
            Engenharia de Dados
          </h1>
          <p style={{ maxWidth: "600px", margin: "20px auto 60px", fontSize: "1.2rem" }}>
          Área dedicada à engenharia de dados, abordando conceitos, arquiteturas, pipelines, modelagem, armazenamento distribuído, bancos de dados e soluções escaláveis, fornecendo informações técnicas sobre cada subárea e suas ferramentas.
          </p>

          {/* Subáreas / Conceitos */}
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

          {/* Ferramentas e Bancos de Dados */}
          <div style={{ textAlign: "center", marginTop: "60px" }}>
            <h2 style={{ fontSize: "2rem", marginBottom: "30px", color: "#ff6ec7" }}>Ferramentas & Tecnologias</h2>
            <div style={{ display: "flex", justifyContent: "center", gap: "60px", flexWrap: "wrap" }}>

              <div style={{ textAlign: "left" }}>
                <h3 style={{ marginBottom: "15px", color: "#00d4ff" }}>Local</h3>
                <ul style={{ listStyleType: "none", padding: 0, fontSize: "1.1rem" }}>
                  <li>Python / Jupyter</li>
                  <li>Airflow / Prefect</li>
                  <li>Apache Spark</li>
                  <li>dbt</li>
                  <li>Modelagem de Dados</li>
                </ul>
              </div>

              <div style={{ textAlign: "left" }}>
                <h3 style={{ marginBottom: "15px", color: "#00d4ff" }}>Nuvem</h3>
                <ul style={{ listStyleType: "none", padding: 0, fontSize: "1.1rem" }}>
                  <li>AWS (S3, Redshift, Glue, SageMaker)</li>
                  <li>Google Cloud (BigQuery, Dataflow)</li>
                  <li>Azure (Data Factory, Synapse)</li>
                  <li>Enterprise Data Hub (EDH)</li>
                </ul>
              </div>

              <div style={{ textAlign: "left" }}>
                <h3 style={{ marginBottom: "15px", color: "#00d4ff" }}>Bancos de Dados</h3>
                <ul style={{ listStyleType: "none", padding: 0, fontSize: "1.1rem" }}>
                  <li>PostgreSQL / MySQL</li>
                  <li>MongoDB</li>
                  <li>Snowflake</li>
                  <li>Delta Lake</li>
                </ul>
              </div>

              <div style={{ textAlign: "left" }}>
                <h3 style={{ marginBottom: "15px", color: "#00d4ff" }}>Linguagens de Dados</h3>
                <ul style={{ listStyleType: "none", padding: 0, fontSize: "1.1rem" }}>
                  <li>SQL / PL-SQL</li>
                  <li>Python</li>
                  <li>R</li>
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