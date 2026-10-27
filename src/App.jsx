import Nav from './components/Nav'
import Hero from './components/Hero'
import { About, Services, Projects, Skills, Process } from './components/Sections'
import Contact from './components/Contact'
import { site } from './data/content'
export default function App() {
  return (<>
    <Nav /><main><Hero /><About /><Services /><Projects /><Skills /><Process /><Contact /></main>
    <footer className="footer"><div className="container">© {new Date().getFullYear()} {site.name} · Freelance web & software developer, India</div></footer>
  </>)
}
