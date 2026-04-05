import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

export default function About(){

return(

<>

<Navbar/>

<section>

<div className="container">

<div style={{
display:"grid",
gridTemplateColumns:"280px 1fr",
gap:"50px",
alignItems:"center"
}}>

{/* FOTO */}

<div style={{textAlign:"center"}}>

<img
src="/images/fotoperfil.jpeg"
alt="Samara Paloma"
style={{
width:"240px",
borderRadius:"16px",
border:"3px solid rgba(255,255,255,0.08)"
}}
/>

</div>

{/* TEXTO */}

<div style={{maxWidth:"750px"}}>

<h1>Sobre Mim</h1>

<p style={{marginTop:"20px",color:"var(--text-secondary)"}}>

Meu nome é <b>Samara Paloma Ribeiro</b> e atualmente estou no
<b> 8º período de Ciência da Computação </b>
na <b>Universidade Federal de Ouro Preto (UFOP)</b>.

</p>

<p style={{marginTop:"20px",color:"var(--text-secondary)"}}>

Tenho grande interesse em áreas relacionadas a dados e
tecnologias inteligentes, especialmente em Engenharia de Dados,
Ciência de Dados, Inteligência Artificial e Desenvolvimento
de Software.

</p>

<p style={{marginTop:"20px",color:"var(--text-secondary)"}}>

Ao longo da minha formação venho desenvolvendo projetos
envolvendo análise de dados, machine learning e construção
de aplicações baseadas em dados, além de participar
de competições de ciência de dados na plataforma Kaggle.

</p>

<p style={{marginTop:"20px",color:"var(--text-secondary)"}}>

Meu objetivo é atuar no desenvolvimento de soluções que
utilizem dados e inteligência artificial para gerar
insights e apoiar decisões estratégicas.

</p>

</div>

</div>

</div>

</section>

{/* INTERESSES */}

<section>

<div className="container">

<h2>Áreas de Interesse</h2>

<div className="grid projects-grid" style={{marginTop:"30px"}}>

<div className="card">
<h3>Engenharia de Dados</h3>
<p>Construção de pipelines, processamento de dados e arquitetura de sistemas de dados.</p>
</div>

<div className="card">
<h3>Ciência de Dados</h3>
<p>Análise exploratória, modelagem estatística e extração de insights a partir de grandes volumes de dados.</p>
</div>

<div className="card">
<h3>Inteligência Artificial</h3>
<p>Machine Learning e desenvolvimento de sistemas inteligentes baseados em dados.</p>
</div>

<div className="card">
<h3>Desenvolvimento de Software</h3>
<p>Criação de aplicações escaláveis utilizando boas práticas de engenharia de software.</p>
</div>

<div className="card">
<h3>Computação em Nuvem</h3>
<p>Uso de plataformas cloud para processamento de dados e deploy de aplicações.</p>
</div>

</div>

</div>

</section>

<Footer/>

</>

)

}