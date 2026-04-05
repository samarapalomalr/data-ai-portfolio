import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

export default function Contact() {

  return (
    <>
      <Navbar/>

      <section>
        <div className="container" style={{maxWidth:"700px"}}>

          <h1>Contato</h1>

          <p style={{
            marginTop:"20px",
            color:"var(--text-secondary)"
          }}>
            Se quiser conversar sobre projetos, colaboração ou
            oportunidades nas áreas de Engenharia de Dados,
            Ciência de Dados ou Inteligência Artificial,
            sinta-se à vontade para entrar em contato.
          </p>

          {/* INFORMAÇÕES */}
          <div style={{
            marginTop:"30px",
            color:"var(--text-secondary)",
            lineHeight:"1.8"
          }}>
            <p><b>Email:</b> samarapaloma57@gmail.com</p>
            <p><b>Celular / WhatsApp:</b> +55 31 99231-9877</p>
          </div>

          {/* BOTÕES */}
          <div style={{
            marginTop:"40px",
            display:"flex",
            flexDirection:"column",
            gap:"15px"
          }}>
            <a className="btn-primary" href="mailto:samarapaloma57@gmail.com">Enviar Email</a>
            <a className="btn-primary" href="https://wa.me/5531992319877" target="_blank">WhatsApp</a>
            <a className="btn-primary" href="https://github.com/" target="_blank">GitHub</a>
            <a className="btn-primary" href="https://linkedin.com/" target="_blank">LinkedIn</a>
            <a className="btn-primary" href="https://kaggle.com/" target="_blank">Kaggle</a>
          </div>

        </div>
      </section>

      <Footer/>

      {/* CSS dos botões */}
      <style jsx>{`
        .btn-primary {
          display: inline-block;
          padding: 12px 25px;
          border-radius: 8px;
          font-weight: bold;
          text-decoration: none;
          text-align: center;
          transition: all 0.3s ease;
          background: linear-gradient(90deg, #00d4ff,rgb(170, 110, 149));
          color: #010214;
        }

        .btn-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 20px rgba(255,110,199,0.4);
          background: linear-gradient(90deg,rgb(134, 28, 94), #00d4ff);
          color: #fff;
        }
      `}</style>
    </>
  )
}