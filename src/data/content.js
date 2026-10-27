// ALL editable content lives here. Empty string = button/link stays hidden.
export const site = {
  name: 'Anurag Pandey',
  email: 'anurag.pandey5310@gmail.com',
  linkedin: 'https://www.linkedin.com/in/anurag-pandey-09171b366/', // verify: your PDF shows "anuragpandey-09171b366"
  github: 'https://github.com/anurag-pandey123',
  whatsapp: '916389057519', // country code + number, no "+"
  resume: '', // e.g. '/resume/Anurag_Pandey_Resume.pdf' once you add a public-safe copy
  location: 'India · Available for remote projects',
}
export const nav = ['About', 'Services', 'Projects', 'Skills', 'Process', 'Contact']
export const services = [
  { id: 'web', icon: 'Globe', title: 'Web Development', status: 'Available now',
    problem: 'Your business or personal brand needs a clean, fast website that works on every device.',
    deliver: ['Responsive business websites', 'Portfolios and landing pages', 'Frontend development (React, HTML, CSS)', 'Redesigns and UI improvements', 'Bug fixes and maintenance'],
    benefits: ['Mobile-friendly layouts', 'Maintainable code', 'Clear communication'] },
  { id: 'software', icon: 'Code2', title: 'Software Development', status: 'Available now',
    problem: 'Manual processes slow you down and you need a practical tool that fits your workflow.',
    deliver: ['Custom web applications (React, Node.js, Express, MongoDB)', 'Database-driven tools (MySQL)', 'REST API development and integrations', 'Small business workflow tools'],
    benefits: ['Built around your process', 'Documented and extendable'], growing: 'Large-scale or enterprise systems are outside my current experience.' },
  { id: 'data', icon: 'Table2', title: 'Data Entry & Management', status: 'Available now',
    problem: 'Messy or scattered records make reporting and decisions harder.',
    deliver: ['Excel and spreadsheet data entry', 'Data cleaning and formatting', 'Record organisation and maintenance', 'Spreadsheet formatting and reports'],
    benefits: ['Accurate, consistent records', 'Procurement-style attention to detail'], growing: 'PDF-to-Excel/Word conversion is offered case by case.' },
  { id: 'support', icon: 'LifeBuoy', title: 'Technical Support', status: 'Available now',
    problem: 'Something on your website or software is broken and you need it investigated.',
    deliver: ['Website troubleshooting', 'Basic software installation help', 'Issue investigation and debugging', 'Documentation and technical guidance'],
    benefits: ['Clear explanations', 'Practical fixes'], growing: 'Server and network administration are not offered.' },
]
export const projects = [
  { id: 'battlefield', title: 'AI-Powered Battlefield Surveillance and Intrusion Detection System',
    type: 'Academic project · Built solo', image: '/projects/battlefield-poster.png',
    problem: 'Monitoring large border or field areas manually is slow, and threats can be missed.',
    objective: 'Detect people and vehicles in live video and raise automated intrusion alerts.',
    features: ['Real-time human and vehicle detection (YOLO + OpenCV)', 'CCTV and drone video feed monitoring', 'IoT sensor input integration', 'Automated intrusion alerts', 'Video logs and evidence storage (as shown on the poster)'],
    tech: ['Python', 'YOLO', 'OpenCV', 'TensorFlow', 'Machine Learning', 'Deep Learning', 'IoT'],
    role: 'Sole developer: designed and built the whole project.',
    note: 'The poster shows the project concept. No accuracy figures are claimed.', github: '', demo: '' },
  { id: 'teamchat', title: 'TeamChat AI: Real-Time Collaboration Platform',
    type: 'Personal project', image: '',
    problem: 'Teams need one place for real-time conversation with AI assistance.',
    objective: 'Full-stack chat app with real-time messaging and AI replies.',
    features: ['Socket.IO real-time messaging', 'Node/Express REST API with MongoDB', 'Google Gemini AI chat responses', 'Responsive React + Tailwind UI'],
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Socket.IO', 'Tailwind CSS', 'Gemini API'],
    role: 'Developer', note: '', github: '', demo: '' },
]
export const skills = {
  'Web development': ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'TypeScript', 'React.js', 'Tailwind CSS', 'Angular'],
  'Programming & databases': ['Java', 'Python', 'SQL', 'MySQL', 'PostgreSQL', 'MongoDB', 'Node.js', 'Express.js', 'REST APIs', 'Socket.IO'],
  'Software lifecycle & tools': ['SDLC', 'Git & GitHub', 'Postman', 'VS Code', 'IntelliJ IDEA', 'Debugging'],
  'AI & automation': ['Gemini API integration', 'OpenCV', 'TensorFlow', 'Machine Learning'],
  'Data management': ['Record keeping', 'Quotation and cost analysis', 'Analytical reporting', 'Spreadsheet work'],
  'Business & communication': ['Vendor and supplier coordination', 'Market research', 'Documentation', 'Problem-solving'],
}
export const certs = ['SQL (Intermediate): HackerRank', 'Web Development (HTML, CSS, JavaScript): InternPe']
export const process = [
  ['Initial discussion', 'We talk about your goals and needs.'], ['Requirement gathering', 'I clarify features, content and deadlines.'],
  ['Scope & quotation', 'You get a written scope and price.'], ['Development / delivery', 'I build or deliver in agreed stages.'],
  ['Testing & review', 'We check the work together.'], ['Delivery & follow-up', 'Handover, plus support for questions.'],
]
