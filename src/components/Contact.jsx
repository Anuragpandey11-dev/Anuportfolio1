import { useEffect, useState } from 'react'
import { Mail, Linkedin, Github, MessageCircle, Loader2 } from 'lucide-react'
import { site, services } from '../data/content'

const API_URL = import.meta.env.VITE_API_URL || ''
const empty = { name: '', email: '', service: '', budget: '', message: '', company: '' } // "company" = honeypot

function validate(f) {
  const e = {}
  if (f.name.trim().length < 2) e.name = 'Please enter your name.'
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email)) e.email = 'Please enter a valid email address.'
  if (!f.service) e.service = 'Please choose a service.'
  if (f.message.trim().length < 20) e.message = 'Please describe your project (at least 20 characters).'
  return e
}

export default function Contact() {
  const [f, setF] = useState(empty), [err, setErr] = useState({}), [state, setState] = useState('idle')
  const [serverMsg, setServerMsg] = useState('')
  useEffect(() => { const h = ev => setF(p => ({ ...p, service: ev.detail })); window.addEventListener('pick-service', h); return () => window.removeEventListener('pick-service', h) }, [])
  const set = k => ev => setF({ ...f, [k]: ev.target.value })

  async function submit(ev) {
    ev.preventDefault()
    if (f.company) return // bot
    const e = validate(f); setErr(e)
    if (Object.keys(e).length) return
    setState('sending'); setServerMsg('')
    try {
      const res = await fetch(`${API_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: f.name.trim(),
          email: f.email.trim(),
          service: f.service,
          budget: f.budget,
          message: f.message.trim(),
          website: f.company, // honeypot, named "website" on the server
        }),
      })
      const data = await res.json().catch(() => ({}))

      if (res.status === 422 && Array.isArray(data.errors)) {
        // Show the server's field errors next to the matching inputs
        const fieldErrors = {}
        data.errors.forEach(x => { if (!fieldErrors[x.field]) fieldErrors[x.field] = x.message })
        setErr(fieldErrors); setState('idle'); return
      }
      if (!res.ok) { setServerMsg(data.message || ''); setState('error'); return }

      setState('success'); setF(empty); setErr({})
    } catch {
      setServerMsg(''); setState('error') // network error: server unreachable
    }
  }
  const field = (k, label, el) => <div className="field"><label htmlFor={k}>{label}</label>{el}{err[k] && <p className="err" role="alert">{err[k]}</p>}</div>

  return (
    <section id="contact" className="container section">
      <h2>Let's Discuss Your Project</h2>
      <div className="grid two">
        <div className="card">
          <h3>Get in touch</h3>
          <p className="muted">Tell me what you need and I'll reply by email.</p>
          <ul className="contact-list">
            <li><a href={`mailto:${site.email}`}><Mail size={18} /> {site.email}</a></li>
            {site.linkedin && <li><a href={site.linkedin} target="_blank" rel="noreferrer"><Linkedin size={18} /> LinkedIn</a></li>}
            {site.github && <li><a href={site.github} target="_blank" rel="noreferrer"><Github size={18} /> GitHub</a></li>}
            {site.whatsapp && <li><a href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noreferrer"><MessageCircle size={18} /> WhatsApp</a></li>}
          </ul>
        </div>
        <form className="card" onSubmit={submit} noValidate>
          {field('name', 'Name', <input id="name" value={f.name} onChange={set('name')} autoComplete="name" />)}
          {field('email', 'Email', <input id="email" type="email" value={f.email} onChange={set('email')} autoComplete="email" />)}
          {field('service', 'Service', <select id="service" value={f.service} onChange={set('service')}><option value="">Select a service</option>{services.map(s => <option key={s.id}>{s.title}</option>)}<option>Other</option></select>)}
          {field('budget', 'Budget range (optional)', <select id="budget" value={f.budget} onChange={set('budget')}><option value="">Prefer to discuss</option><option>Under ₹10,000</option><option>₹10,000–₹30,000</option><option>₹30,000–₹75,000</option><option>₹75,000+</option></select>)}
          {field('message', 'Project description', <textarea id="message" rows="5" value={f.message} onChange={set('message')} />)}
          <input className="hp" tabIndex="-1" autoComplete="off" aria-hidden="true" value={f.company} onChange={set('company')} name="company" />
          <p className="muted small">I collect only the details above to reply to your enquiry. They are sent to me by email and not kept on this site.</p>
          <button className="btn primary" disabled={state === 'sending'}>{state === 'sending' ? <><Loader2 className="spin" size={18} /> Sending…</> : 'Send message'}</button>
          <div aria-live="polite">
            {state === 'success' && <p className="ok-msg">Thank you! Your message was sent. I'll reply by email soon.</p>}
            {state === 'error' && <p className="err">{serverMsg || "Sorry, it couldn't be sent."} Please try again, or email me directly at {site.email}.</p>}
          </div>
        </form>
      </div>
    </section>
  )
}