export default function Footer(){

    return(
    
    <footer style={{
    marginTop:"80px",
    borderTop:"1px solid var(--border)",
    padding:"40px 0"
    }}>
    
    <div className="container">
    
    <div style={{
    display:"flex",
    justifyContent:"space-between",
    flexWrap:"wrap",
    gap:"20px"
    }}>
    
    <div>
    
    <h3 style={{
    background:"var(--gradient)",
    WebkitBackgroundClip:"text",
    color:"transparent"
    }}>
    Samara Paloma
    </h3>
    
    <p style={{
    marginTop:"10px",
    color:"var(--text-secondary)",
    maxWidth:"300px"
    }}>
    Portfólio focado em Engenharia de Dados,
    Machine Learning e Inteligência Artificial.
    </p>
    
    </div>
    
    <div style={{
    display:"flex",
    flexDirection:"column",
    gap:"8px"
    }}>
    
    <h4>Links</h4>
    
    <a className="nav-link" href="https://github.com/" target="_blank">
    GitHub
    </a>
    
    <a className="nav-link" href="https://linkedin.com/" target="_blank">
    LinkedIn
    </a>
    
    <a className="nav-link" href="https://kaggle.com/" target="_blank">
    Kaggle
    </a>
    
    </div>
    
    </div>
    
    <div style={{
    marginTop:"30px",
    borderTop:"1px solid rgba(255,255,255,0.05)",
    paddingTop:"20px",
    textAlign:"center",
    color:"var(--text-secondary)",
    fontSize:"0.9rem"
    }}>
    
    © {new Date().getFullYear()} Samara Paloma • Data Engineering & AI Portfolio
    
    </div>
    
    </div>
    
    </footer>
    
    )
    
    }