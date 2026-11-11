import { useState } from 'react';
import { ArrowUpRight, BarChart3, Code2, Download, FileSpreadsheet, Github, Linkedin, Mail,Phone, Menu, X } from 'lucide-react';
import './App.css';

/*
  HOW TO EDIT
  - All text lives in the objects below. Change the text, save, and the page updates.
  - Resume: copy your PDF to public/resume.pdf, then set RESUME_URL to '/resume.pdf'.
  - Project links: add a `link` to a project to show a button on its row.
*/

const RESUME_URL = '';

const profile = {
  name: 'Esther D',
  role: 'Mobile developer moving into data analytics',
  intro: "I help turn data into decisions through clean analysis, clear visuals and interactive dashboards.",
  about: [
    "I'm a Computer Science Engineering graduate with one year of experience as a Junior Software Developer. During that time I built and maintained mobile apps, and I also worked with data inside those apps: managing it, organizing it and supporting data teams.",
    "Working with data showed me how much it shapes good decisions, so I've decided to move my career into data analytics. I'm building my skills in Excel, SQL, Python, Power BI and basic statistics, and I practice by turning raw datasets into clear dashboards and insights.",
    "My development background is an advantage. I understand how data is created, stored and used in real applications, and I can communicate with both technical and non-technical teams.",
  ],
  
  email: 'devadhasonesther@gmail.com',
  linkedin: 'https://www.linkedin.com/in/esther-d-84b1b5334',
  github: 'https://github.com/esthernisha',
  phonenumber: '9345803741',
  photo: '/esther.jpg',
};

const experience = [
  {
    role: 'Junior Software Developer',
    company: 'AK Technologies, Coimbatore',
    period: 'June 2025 – Sep 2026',
    points: [
      'Built mobile applications in React Native from Figma designs, and published app updates on the Google Play Store.',
      'Handled app data: checked and validated records and monitored subscribed members.',
      'Took on several roles beyond development, including leading the data team and managing salary accounts.',
    ],
  },
];

const education = {
  degree: 'B.E. Computer Science and Engineering',
  school: 'Arunachala College of Engineering for Women',
  affiliation: 'Anna University',
  period: '2021 – 2025',
};

const training = [
  { name: 'Data science', length: '3 months' },
  { name: 'Data analytics', length: '1 month' },
  { name: 'Power BI', length: '1 month' },
  { name: 'UI/UX design', length: '1 month' },
];

const skills = [
  { group: 'Data analytics', items: ['Excel', 'SQL', 'Power BI', 'Python', 'NumPy', 'pandas', 'Matplotlib', 'Seaborn'] },
  { group: 'App development', items: ['React Native', 'Expo', 'Postman'] },
  { group: 'Design', items: ['Figma', 'Canva'] },
  { group: 'Office and other tools', items: ['MS Word', 'PowerPoint', 'Documentation', 'Invoicing', 'AI tools'] },
];

const projects = [
  {
    title: 'MedBook',
    kind: 'Mobile app',
    image: '/medbook.jpg',
    description:
      'A health app to book doctor appointments and download prescriptions. It also has a products section and doctors grouped by category and traditional treatments.',
    tools: ['React Native', 'Expo'],
    link: 'https://play.google.com/store/apps/details?id=com.aktechnologies.medbookapp&hl=en_IN', // paste the MedBook Google Play link here
    linkLabel: 'Open on Google Play',
  },
  {
    title: 'Partner',
    kind: 'Mobile app',
    image: '/partner.jpg',
    description:  "A tourism and temples app for everyone, covering 38 districts with detailed information on places to visit and temples, so people can easily explore and learn about each district.", // add one more line about what Partner does
    tools: ['React Native', 'Expo'],
    link: 'https://play.google.com/store/search?q=kaavi&c=apps&hl=en_IN', // paste the Partner Google Play link here
    linkLabel: 'Open on Google Play',
  },
  {
    title: 'Excel dashboard',
    kind: 'Data analytics',
    icon: FileSpreadsheet,
    dataset: "Retail E-commerce Sales & Customer Analytics",
    description:  "Analyzed 138K+ records. Cleaned the data, built pivot tables for key business insights, and designed an interactive Excel dashboard with slicers.",
    tools: ['Excel', 'Pivot tables'],
    link: 'https://docs.google.com/spreadsheets/d/1QTAxLq_bvMBQa8fgtiPh2Umua9_ArqpI/edit?usp=sharing&ouid=100582256323956488711&rtpof=true&sd=true', // paste the Google Drive link or demo video link here
    linkLabel: 'View dashboard',
  },
  {
    title: 'Power BI dashboard',
    kind: 'Data analytics',
    icon: BarChart3,
    dataset: '', // add the dataset name, for example 'Hospital data'
    description: 'An interactive Power BI dashboard that turns raw data into clear visuals.',
    tools: ['Power BI'],
    link: '', // paste the Power BI publish-to-web link or demo video link here
    linkLabel: 'View dashboard',
  },
  {
    title: 'Python data analysis',
    kind: 'Data analytics',
    icon: Code2,
    dataset: '', // add the dataset name
    description: 'A Google Colab notebook that analyses data and shows the results in charts.',
    tools: ['Python', 'pandas', 'NumPy', 'Matplotlib', 'Seaborn'],
    link: 'https://colab.research.google.com/drive/1aaByoTZaWMj-w3eHGvImlc3q8gt6Jj2k?usp=sharing',
    linkLabel: 'Open notebook',
  },
];

function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  const nav = [
    ['About', '#about'],
    ['Experience', '#experience'],
    ['Skills', '#skills'],
    ['Projects', '#projects'],
    ['Contact', '#contact'],
  ];
  return (
    <header className="site-header">
      <div className="wrap nav-wrap">
        <a className="brand" href="#top" onClick={close}>
          
        </a>
        <button
          className="menu-toggle"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
        <nav className={open ? 'nav nav-open' : 'nav'} aria-label="Main">
          {nav.map(([label, href]) => (
            <a key={href} href={href} onClick={close}>
              {label}
            </a>
          ))}
          {RESUME_URL && (
            <a className="nav-cta" href={RESUME_URL} target="_blank" rel="noreferrer">
              <Download size={15} /> Resume
            </a>
          )}
        </nav>
      </div>
    </header>
  );
}

function SectionHead({ title, note }) {
  return (
    <div className="section-head">
      <h2>{title}</h2>
      {note && <p>{note}</p>}
    </div>
  );
}

export default function App() {
  return (
    <>
      <Header />
      <main id="top">
        <section className="hero">
          <div className="wrap hero-grid">
            <div className="hero-copy">
              <p className="hero-hello">Hi, I am</p>
              <h1>{profile.name}</h1>
              <p className="hero-role">{profile.role}</p>
              <p className="hero-intro">{profile.intro}</p>
              <div className="hero-actions">
                <a className="btn btn-yellow" href="#projects">
                  See my projects
                </a>
                <a className="btn btn-line" href="#contact">
                  Contact me
                </a>
                {RESUME_URL && (
                  <a className="btn btn-line" href={RESUME_URL} target="_blank" rel="noreferrer">
                    <Download size={16} /> Download resume
                  </a>
                )}
              </div>
            </div>
            <div className="hero-photo">
              <div className="photo-block" aria-hidden="true" />
              <img src={profile.photo} alt="Portrait of Esther D" width="448" height="450" />
            </div>
          </div>
        </section>

        <section className="section" id="about">
          <div className="wrap split">
            <SectionHead title="About me" />
            <div className="prose">
              {profile.about.map((p, i) => (
                <p key={i} className={i === 0 ? 'lead' : ''}>
                  {p}
                </p>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-white" id="experience">
          <div className="wrap">
            <SectionHead title="Experience and education" />
            <div className="timeline">
              {experience.map((job) => (
                <article className="tl-row" key={job.role}>
                  <p className="tl-when">{job.period}</p>
                  <div className="tl-body">
                    <h3>{job.role}</h3>
                    <p className="tl-where">{job.company}</p>
                    <ul>
                      {job.points.map((pt) => (
                        <li key={pt}>{pt}</li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
              <article className="tl-row">
                <p className="tl-when">{education.period}</p>
                <div className="tl-body">
                  <h3>{education.degree}</h3>
                  <p className="tl-where">
                    {education.school}, {education.affiliation}
                  </p>
                </div>
              </article>
              <article className="tl-row">
                <p className="tl-when">Internships and master classes</p>
                <div className="tl-body">
                  <ul className="training">
                    {training.map((t) => (
                      <li key={t.name}>
                        <span>{t.name}</span>
                        <span className="muted">{t.length}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="section" id="skills">
          <div className="wrap">
            <SectionHead title="Skills and tools" />
            <div className="skill-rows">
              {skills.map((s) => (
                <div className="skill-row" key={s.group}>
                  <h3>{s.group}</h3>
                  <ul>
                    {s.items.map((i) => (
                      <li key={i}>{i}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-yellow" id="projects">
          <div className="wrap">
            <SectionHead title="Projects" />
            <div className="cards">
              {projects.map((p) => {
                const Icon = p.icon;
                return (
                  <article className="card" key={p.title}>
                    <div className={p.image ? 'card-thumb card-thumb-app' : 'card-thumb'}>
                      {p.image ? <img src={p.image} alt={`${p.title} app icon`} width="88" /> : <Icon size={44} strokeWidth={1.6} />}
                    </div>
                    <div className="card-body">
                      <p className="card-kind">{p.kind}</p>
                      <h3>{p.title}</h3>
                      {p.dataset && <p className="card-dataset">Dataset: {p.dataset}</p>}
                      <p className="card-desc">{p.description}</p>
                      <ul className="tags">
                        {p.tools.map((t) => (
                          <li key={t}>{t}</li>
                        ))}
                      </ul>
                      {p.link && (
                        <a className="card-link" href={p.link} target="_blank" rel="noreferrer">
                          {p.linkLabel} <ArrowUpRight size={16} />
                        </a>
                      )}
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="section" id="contact">
          <div className="wrap split">
            <div>
              <h2 className="contact-title">Let us talk about your data or your app.</h2>
              <p className="contact-note">
                I am open to data analyst and mobile developer roles, and to freelance work.
              </p>
            </div>
            <ul className="contact-list">
              <li>
                <a href={`mailto:${profile.email}`}>
                  <Mail size={20} />
                  <span>
                    <small>Email</small>
                    {profile.email}
                  </span>
                  <ArrowUpRight size={18} />
                </a>
              </li>
             <li>
                <a href={`tel:${profile.phonenumber}`}>
                  <Phone size={20} />
                  <span>
                    <small>Phone</small>
                    {profile.phonenumber}
                  </span>
                  <ArrowUpRight size={18} />
                </a>
              </li>
              <li>
                <a href={profile.linkedin} target="_blank" rel="noreferrer">
                  <Linkedin size={20} />
                  <span>
                    <small>LinkedIn</small>
                    esther-d-84b1b5334
                  </span>
                  <ArrowUpRight size={18} />
                </a>
              </li>
              <li>
                <a href={profile.github} target="_blank" rel="noreferrer">
                  <Github size={20} />
                  <span>
                    <small>GitHub</small>
                    esthernisha
                  </span>
                  <ArrowUpRight size={18} />
                </a>
              </li>
            </ul>
          </div>
        </section>
      </main>
      <footer className="site-footer">
        <div className="wrap footer-inner">
          <span>© 2026 {profile.name}</span>
          <a href="#top">Back to top</a>
        </div>
      </footer>
    </>
  );
}
