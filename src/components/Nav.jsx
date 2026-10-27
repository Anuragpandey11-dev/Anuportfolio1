import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { nav, site } from '../data/content'
export default function Nav() {
  const [open, setOpen] = useState(false)
  return (
    <header className="nav">
      <div className="container nav-in">
        <a href="#top" className="logo">{site.name}</a>
        <button className="burger" aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
        <nav className={open ? 'links open' : 'links'} aria-label="Main">
          {nav.map(n => <a key={n} href={`#${n.toLowerCase()}`} onClick={() => setOpen(false)}>{n}</a>)}
        </nav>
      </div>
    </header>
  )
}
