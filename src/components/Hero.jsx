import { ArrowRight, MapPin } from 'lucide-react'
import Avatar from './Avatar'
import { site } from '../data/content'
export default function Hero() {
  return (
    <section id="top" className="hero container">
      <div>
        <p className="chip"><MapPin size={14} /> {site.location}</p>
        <h1>Building Digital Solutions That Help Businesses <span className="grad">Grow.</span></h1>
        <p className="lead">I help businesses and individuals build modern websites, develop practical software solutions, manage data efficiently, and resolve technical challenges.</p>
        <div className="row">
          <a className="btn primary" href="#contact">Hire Me <ArrowRight size={18} /></a>
          <a className="btn ghost" href="#projects">Explore My Work</a>
        </div>
      </div>
      <div className="hero-art"><Avatar /></div>
    </section>
  )
}
