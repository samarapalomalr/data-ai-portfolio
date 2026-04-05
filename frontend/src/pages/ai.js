import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState } from "react";

export default function AI() {
  const [openModal, setOpenModal] = useState(null);

  const subareas = [
    { name: "Visão Computacional", description: "Desenvolvimento de sistemas que processam e interpretam imagens e vídeos, como detecção de objetos, segmentação e reconhecimento facial." },
    { name: "Processamento de Linguagem Natural (NLP)", description: "Trabalha com texto e linguagem humana, análise de sentimentos, chatbots, tradução automática, resumo de textos e modelos de linguagem." },
    { name: "Aprendizado por Reforço", description: "Treina agentes para tomar decisões baseadas em recompensas e penalidades, aplicável em jogos, robótica e otimização de processos." },
    { name: "Machine Learning", description: "Modelos supervisionados e não supervisionados para previsões, classificação, regressão e clustering." },
    { name: "Redes Neurais e Deep Learning", description: "Modelos complexos baseados em camadas de neurônios artificiais, utilizados em visão computacional, NLP e séries temporais." },
    { name: "IA Generativa", description: "Geração de conteúdo novo, incluindo imagens, texto, áudio e vídeo, usando GANs, Diffusion Models e LLMs." },
    { name: "Sistemas de Recomendação", description: "Personalização de conteúdos, produtos ou serviços com base em comportamento de usuários, utilizando filtragem colaborativa e baseada em conteúdo." },
    { name: "AutoML & Hyperparameter Tuning", description: "Automatiza a criação e otimização de modelos de machine learning para reduzir tempo e complexidade." },
    { name: "Explainable AI (XAI)", description: "Técnicas para tornar modelos de IA interpretáveis e confiáveis, explicando decisões para usuários e reguladores." },
    { name: "Robótica e Agentes Inteligentes", description: "Aplicações de IA em sistemas físicos autônomos, controle de robôs e navegação inteligente." },
    { name: "Edge AI", description: "Implementação de modelos de IA diretamente em dispositivos locais para respostas rápidas e baixo consumo de rede." }
  ];

  return (
    <>
      <Navbar />

      <section style={{ padding: "60px 0", textAlign: "center", background: "#010214", color: "#fff" }}>
        <div className="container">
          <h1 style={{ fontSize: "3rem", background: "linear-gradient(90deg, #00d4ff, #ff6ec7)", WebkitBackgroundClip: "text", color: "transparent" }}>
            Inteligência Artificial
          </h1>
          <p style={{ maxWidth: "600px", margin: "20px auto 60px", fontSize: "1.2rem" }}>
          Área dedicada à inteligência artificial, abordando técnicas, metodologias e aplicações de machine learning, deep learning e sistemas inteligentes, fornecendo informações e insights sobre cada subárea e suas ferramentas.
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

          {/* Ferramentas */}
          <div style={{ textAlign: "center", marginTop: "60px" }}>
            <h2 style={{ fontSize: "2rem", marginBottom: "30px", color: "#ff6ec7" }}>Ferramentas & Plataformas</h2>
            <div style={{ display: "flex", justifyContent: "center", gap: "60px", flexWrap: "wrap" }}>
              
              {/* Local */}
              <div style={{ textAlign: "left" }}>
                <h3 style={{ marginBottom: "15px", color: "#00d4ff" }}>Local</h3>
                <ul style={{ listStyleType: "none", padding: 0, fontSize: "1.1rem" }}>
                  <li>Python / Jupyter / VS Code</li>
                  <li>PyTorch / TensorFlow / Keras</li>
                  <li>Scikit-learn</li>
                  <li>OpenCV</li>
                  <li>NLTK / SpaCy / Hugging Face Transformers</li>
                  <li>FastAI</li>
                </ul>
              </div>

              {/* Nuvem */}
              <div style={{ textAlign: "left" }}>
                <h3 style={{ marginBottom: "15px", color: "#00d4ff" }}>Nuvem</h3>
                <ul style={{ listStyleType: "none", padding: 0, fontSize: "1.1rem" }}>
                  <li>AWS SageMaker / S3</li>
                  <li>Google Cloud AI / Vertex AI / BigQuery ML</li>
                  <li>Azure ML / Synapse / Databricks</li>
                  <li>Hugging Face Spaces</li>
                  <li>Weights & Biases (W&B) - tracking e experiments</li>
                  <li>MLflow - gerenciamento de modelos</li>
                </ul>
              </div>

              {/* Frameworks & Ferramentas auxiliares */}
              <div style={{ textAlign: "left" }}>
                <h3 style={{ marginBottom: "15px", color: "#00d4ff" }}>Frameworks & Suporte</h3>
                <ul style={{ listStyleType: "none", padding: 0, fontSize: "1.1rem" }}>
                  <li>Streamlit / Gradio - apps de IA interativos</li>
                  <li>ONNX - interoperabilidade de modelos</li>
                  <li>Docker / Kubernetes - deploy de modelos</li>
                  <li>FastAPI / Flask - APIs para modelos de IA</li>
                </ul>
              </div>

            </div>
          </div>

        </div>
      </section>

      <Footer />

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