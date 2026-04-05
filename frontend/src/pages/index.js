import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import ProjectCard from "../components/ProjectCard"
import Footer from "../components/Footer"

import { projects } from "../data/projects"

export default function Home() {
    return (
        <>
            <Navbar/>
            <Hero/>

            <section>
                <div className="container">
                    <h2>Projetos em Destaque</h2>
                    <p style={{
                        color: "var(--text-secondary)",
                        marginBottom: "40px"
                    }}>
                        Alguns projetos desenvolvidos em engenharia de dados,
                        machine learning e análise de dados.
                    </p>

                    <div className="grid projects-grid">
                        {projects.slice(0,3).map((project,i) => (
                            <ProjectCard key={i} project={project}/>
                        ))}
                    </div>
                </div>
            </section>

            <Footer/>
        </>
    )
}