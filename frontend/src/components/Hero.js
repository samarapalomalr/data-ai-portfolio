import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section>
      <div className="container">
        <div style={{ maxWidth: "750px", width: "100%" }}>

          <motion.h1
            style={{
              background: "var(--gradient)",
              WebkitBackgroundClip: "text",
              color: "transparent",
              lineHeight: "1.2"
            }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Data Engineering & Artificial Intelligence
          </motion.h1>

          <motion.p
            style={{
              marginTop: "20px",
              fontSize: "clamp(0.95rem, 2.5vw, 1.1rem)",
              color: "var(--text-secondary)"
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Neste portfólio, você encontra meus projetos, informações técnicas sobre cada área em que estou me especializando, além de seções sobre mim e formas de entrar em contato. Aqui você pode explorar meu trabalho, conhecer minhas competências e acompanhar minha evolução em tecnologia e ciência de dados.
          </motion.p>

          <div
            className="hero-buttons"
            style={{
              marginTop: "30px",
              display: "flex",
              gap: "20px",
              flexWrap: "wrap"
            }}
          >
            <motion.a
              href="https://data-ai-portfolio-425i.vercel.app/projects"
              className="btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Ver Projetos
            </motion.a>

            <motion.a
              href="https://github.com/"
              target="_blank"
              className="btn-primary"
              style={{ background: "#1e293b" }}
              whileHover={{ scale: 1.05 }}
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