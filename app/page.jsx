import Image from "next/image";

const educationRows = [
  ["Degree", "B.Tech in Computer Science Engineering, Sahyadri College of Engineering & Management, Mangalore"],
  ["PUC", "Ambika PU College, Puttur"],
  ["School", "Priyadarshani English Medium School, Puttur"],
];

const skillRows = [
  ["Languages", "C, Python, HTML, CSS, JavaScript"],
  ["Tools", "Git, GitHub, VS Code, Arduino IDE, Linux"],
  ["Areas", "Cybersecurity, AI/ML, Web Development, Embedded Systems"],
];

const achievements = [
  "Black belt in Shotokan Karate",
  "National-level competition experience",
  "Medal achievements at national level",
  "Hands-on electronics and AI project experience",
];

const projects = [
  {
    title: "GeoShield AI",
    type: "AI Concept · Disaster Risk",
    description:
      "A proposed AI-based system for analyzing rainfall, soil moisture, slope, river data, and historical trends to predict landslide and flood risks.",
  },
  {
    title: "Arduino Robotic Vehicle",
    type: "Embedded Systems · Hardware",
    description:
      "A robotic vehicle project built with Arduino and electronic components to explore control systems, programming, and real-world hardware integration.",
  },
  {
    title: "Cybersecurity Learning Path",
    type: "Self Learning · Security Practice",
    description:
      "Focused study in ethical hacking fundamentals, digital safety, networking awareness, and secure coding practices.",
  },
];

const interests = [
  "Cybersecurity & Ethical Hacking",
  "Web Development",
  "Artificial Intelligence & Machine Learning",
  "Open Source",
  "Software Engineering",
  "Gaming & Technology Exploration",
];

export default function Home() {
  return (
    <main className="portfolio-shell">
      <nav className="topbar wrap" aria-label="Main navigation">
        <div className="brand-placeholder" aria-label="Home">HI</div>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <header className="hero wrap" id="home">
        <div className="hero-copy">
          <p className="eyebrow">B.TECH CSE STUDENT · MANGALORE, INDIA</p>
          <h1>
            I’m <span>Abhinav</span>
          </h1>
          <p className="lead">
            I’m a Computer Science Engineering student building skills in software engineering,
            cybersecurity, and practical technology projects with a strong curiosity for real-world problem solving.
          </p>
          <div className="hero-actions">
            <a href="#projects" className="primary-btn">Explore my work</a>
            <a href="#about" className="secondary-link">About me</a>
          </div>
          <div className="mini-stats">
            <div>
              <strong>2+</strong>
              <span>Core projects</span>
            </div>
            <div>
              <strong>4+</strong>
              <span>Tech interests</span>
            </div>
            <div>
              <strong>100%</strong>
              <span>Curiosity-driven</span>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="photo-frame">
            <Image
              src="/profile.jpeg"
              alt="Abhi portrait"
              width={700}
              height={860}
              priority
              className="profile-photo"
            />
          </div>
          <div className="floating-card card-top">CURIOUS · BUILDER</div>
          <div className="floating-card card-bottom">LEARNING EVERY DAY</div>
        </div>
      </header>

      <main className="content wrap">
        <section className="section" id="about">
          <div className="section-header">
            <p className="eyebrow accent">01 / ABOUT</p>
            <h2>Learning tech. Building ideas.</h2>
          </div>

          <div className="about-grid">
            <div className="about-copy">
              <p>
                I’m a motivated Computer Science Engineering student who enjoys exploring software development,
                artificial intelligence, cybersecurity, and emerging technologies.
              </p>
              <p>
                I’m constantly learning through coursework, self-study, and practical projects, aiming to transform
                ideas into useful and meaningful digital experiences.
              </p>
            </div>

            <div className="table-card">
              <table>
                <thead>
                  <tr>
                    <th>Category</th>
                    <th>Details</th>
                  </tr>
                </thead>
                <tbody>
                  {educationRows.map(([label, value]) => (
                    <tr key={label}>
                      <td>{label}</td>
                      <td>{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="section-header">
            <p className="eyebrow accent">02 / SKILLS</p>
            <h2>Technical stack & core focus.</h2>
          </div>

          <div className="table-card large">
            <table>
              <thead>
                <tr>
                  <th>Category</th>
                  <th>Skills</th>
                </tr>
              </thead>
              <tbody>
                {skillRows.map(([label, value]) => (
                  <tr key={label}>
                    <td>{label}</td>
                    <td>{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="section two-col">
          <div className="section-header narrow">
            <p className="eyebrow accent">03 / CYBERSECURITY</p>
            <h2>Security-minded and curious.</h2>
          </div>

          <div className="panel-list">
            <div className="panel">
              <h3>Interests</h3>
              <ul>
                <li>Cybersecurity & ethical hacking</li>
                <li>Network and digital safety</li>
                <li>Secure software practices</li>
                <li>Threat awareness and defense basics</li>
              </ul>
            </div>

            <div className="panel">
              <h3>Focus areas</h3>
              <ul>
                <li>Linux and command-line workflows</li>
                <li>Data protection fundamentals</li>
                <li>Web security awareness</li>
                <li>Continuous learning in emerging tech</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="section-header">
            <p className="eyebrow accent">04 / ACHIEVEMENTS</p>
            <h2>Beyond the screen.</h2>
          </div>

          <div className="achievement-list">
            {achievements.map((item) => (
              <div className="achievement-item" key={item}>
                <span className="badge">✦</span>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="section" id="projects">
          <div className="section-header">
            <p className="eyebrow accent">05 / PROJECTS</p>
            <h2>Ideas turned into experiments.</h2>
          </div>

          <div className="project-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.title}>
                <p className="project-type">{project.type}</p>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section">
          <div className="section-header">
            <p className="eyebrow accent">06 / HOBBIES</p>
            <h2>Life outside coding.</h2>
          </div>

          <div className="tag-list">
            {interests.map((item) => (
              <span key={item} className="tag">{item}</span>
            ))}
          </div>
        </section>

        <section className="section contact-section" id="contact">
          <div className="section-header narrow">
            <p className="eyebrow accent">07 / CONTACT</p>
            <h2>Let’s build something meaningful.</h2>
          </div>

          <div className="contact-box">
            <div>
              <p>Email</p>
              <a href="mailto:abhinav07@gmail.com">abhinav07@gmail.com</a>
            </div>
            <div>
              <p>Location</p>
              <span>Mangalore, Karnataka, India</span>
            </div>
            <div>
              <p>Availability</p>
              <span>Open to learning and internships</span>
            </div>
          </div>
        </section>
      </main>
    </main>
  );
}
