import * as Icons from 'lucide-react'
import { CheckCircle2, Github, ExternalLink } from 'lucide-react'
import { services, projects, skills, certs, process } from '../data/content'

const Section = ({ id, title, sub, children }) => (
  <section id={id} className="container section">
    <h2>{title}</h2>{sub && <p className="sub">{sub}</p>}{children}
  </section>
)

export const About = () => (
  <Section id="about" title="About Me">
    <div className="grid two">
      <div className="card">
        <p>I'm a Computer Engineering graduate (B.Tech, GL Bajaj Group of Institutions, 2022–2026) who builds web applications and practical software, and I'm now taking freelance projects.</p>
        <p>Alongside my technical work, I work in procurement operations at Abhyuthanam Industries Private Limited, handling vendor sourcing, quotation analysis, purchase orders and supplier coordination. That work has strengthened my communication, organisation, reporting and problem-solving, which I bring to client projects.</p>
      </div>
      <div className="card">
        <h3>Working philosophy</h3>
        <ul className="ticks">{['Understand the problem before writing code', 'Keep solutions simple and maintainable', 'Communicate clearly and honestly, including what I can and cannot do', 'Test and review before delivery'].map(t => <li key={t}><CheckCircle2 size={16} />{t}</li>)}</ul>
      </div>
    </div>
  </Section>
)

export const Services = () => (
  <Section id="services" title="Services" sub="What I can deliver today, and where my limits are.">
    <div className="grid two">
      {services.map(s => { const I = Icons[s.icon]; return (
        <article className="card" key={s.id}>
          <div className="icon"><I /></div>
          <h3>{s.title}</h3><span className="tag ok">{s.status}</span>
          <p className="muted"><strong>Problem:</strong> {s.problem}</p>
          <h4>What I deliver</h4>
          <ul className="ticks">{s.deliver.map(d => <li key={d}><CheckCircle2 size={16} />{d}</li>)}</ul>
          <p className="muted"><strong>Benefits:</strong> {s.benefits.join(' · ')}</p>
          {s.growing && <p className="note">Note: {s.growing}</p>}
          <a className="btn ghost" href={`#contact?service=${s.id}`} onClick={() => window.dispatchEvent(new CustomEvent('pick-service', { detail: s.title }))}>Discuss Your Project</a>
        </article>) })}
    </div>
  </Section>
)

export const Projects = () => (
  <Section id="projects" title="Projects">
    {projects.map(p => (
      <article className="card project" key={p.id}>
        {p.image && <img src={p.image} alt={`${p.title} project poster`} loading="lazy" />}
        <div>
          <span className="tag">{p.type}</span><h3>{p.title}</h3>
          <p><strong>Problem:</strong> {p.problem}</p><p><strong>Objective:</strong> {p.objective}</p>
          <h4>Key features</h4><ul className="ticks">{p.features.map(f => <li key={f}><CheckCircle2 size={16} />{f}</li>)}</ul>
          <p><strong>My role:</strong> {p.role}</p>
          <div className="pills">{p.tech.map(t => <span key={t}>{t}</span>)}</div>
          {p.note && <p className="note">{p.note}</p>}
          <div className="row">
            {p.github && <a className="btn ghost" href={p.github} target="_blank" rel="noreferrer"><Github size={16} /> Code</a>}
            {p.demo && <a className="btn ghost" href={p.demo} target="_blank" rel="noreferrer"><ExternalLink size={16} /> Live demo</a>}
          </div>
        </div>
      </article>))}
  </Section>
)

export const Skills = () => (
  <Section id="skills" title="Skills" sub="Listed from my resume and certifications, without percentages.">
    <div className="grid three">
      {Object.entries(skills).map(([k, v]) => <div className="card" key={k}><h3>{k}</h3><div className="pills">{v.map(s => <span key={s}>{s}</span>)}</div></div>)}
    </div>
    <div className="card"><h3>Certifications</h3><ul className="ticks">{certs.map(c => <li key={c}><CheckCircle2 size={16} />{c}</li>)}</ul></div>
  </Section>
)

export const Process = () => (
  <Section id="process" title="How I Work" sub="Timelines and pricing depend on the scope of your project.">
    <ol className="steps">{process.map(([t, d], i) => <li className="card" key={t}><b>{i + 1}</b><h3>{t}</h3><p className="muted">{d}</p></li>)}</ol>
  </Section>
)
