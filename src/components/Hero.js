import { motion } from "framer-motion";

export default function Hero() {

  return (
    <section>
      <div className="container">
        <div style={{ maxWidth: "750px" }}>

          {/* Título animado */}
          <motion.h1
            style={{
              background: "var(--gradient)",
              WebkitBackgroundClip: "text",
              color: "transparent"
            }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Data Engineering & Artificial Intelligence
          </motion.h1>

          {/* Parágrafo animado */}
          <motion.p
            style={{
              marginTop: "20px",
              fontSize: "1.1rem",
              color: "var(--text-secondary)"
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Neste portfólio, você encontra meus projetos, informações técnicas sobre cada área em que estou me especializando, além de seções sobre mim e formas de entrar em contato. Aqui você pode explorar meu trabalho, conhecer minhas competências e acompanhar minha evolução em tecnologia e ciência de dados.
          </motion.p>

          {/* Botões animados */}
          <div style={{ marginTop: "30px", display: "flex", gap: "20px" }}>
            <motion.a
              href="/projects"
              className="btn-primary"
              whileHover={{ scale: 1.1, boxShadow: "0 8px 24px rgba(0,212,255,0.6)" }}
              whileTap={{ scale: 0.95 }}
            >
              Ver Projetos
            </motion.a>

            <motion.a
              href="https://github.com/"
              target="_blank"
              className="btn-primary"
              style={{ background: "#1e293b" }}
              whileHover={{ scale: 1.1, boxShadow: "0 8px 24px rgba(255,110,199,0.6)" }}
              whileTap={{ scale: 0.95 }}
            >
              GitHub
            </motion.a>
          </div>

        </div>
      </div>
    </section>
  );
}