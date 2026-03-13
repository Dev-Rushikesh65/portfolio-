import React, { useState } from "react";
import "./App.css";
/* Icons */
import {
  BiHomeAlt, BiUser, BiFile, BiBriefcaseAlt, BiImage, BiSend,
  BiX, BiMenu, BiMouse, BiDownArrowAlt, BiRightArrowAlt,
  BiBadgeCheck, BiSupport, BiBook, BiEnvelope, BiPhone, BiMessageRoundedDots
} from "react-icons/bi";
import { FiGithub, FiTwitter, FiInstagram, FiLinkedin } from "react-icons/fi";
import { HiOutlineBadgeCheck } from "react-icons/hi";

function App() {
  const [toggleState, setToggleState] = useState(0);
  const [qualToggle, setQualToggle] = useState(1);
  const [menuOpen, setMenuOpen] = useState(false);
  const [formStatus, setFormStatus] = useState(''); // 'success', 'error', or ''

  const toggleTab = (index) => {
    setToggleState(index);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/mlgwnjgd', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setFormStatus('success');
        form.reset();
        setTimeout(() => setFormStatus(''), 5000);
      } else {
        setFormStatus('error');
        setTimeout(() => setFormStatus(''), 5000);
      }
    } catch (error) {
      setFormStatus('error');
      setTimeout(() => setFormStatus(''), 5000);
    }
  };

  return (
    <div className="App">
      {/* HEADER */}
      <header className="header">
        <nav className="nav container">
          <a href="#home" className="nav__logo">Rushikesh Bhagat</a>

          <div className={menuOpen ? "nav__menu show-menu" : "nav__menu"}>
            <ul className="nav__list">
              <li className="nav__item"><a href="#home" className="nav__link active-link"><BiHomeAlt className="nav__icon" /> Home</a></li>
              <li className="nav__item"><a href="#about" className="nav__link"><BiUser className="nav__icon" /> About</a></li>
              <li className="nav__item"><a href="#skills" className="nav__link"><BiFile className="nav__icon" /> Skills</a></li>
              <li className="nav__item"><a href="#services" className="nav__link"><BiBriefcaseAlt className="nav__icon" /> Services</a></li>
              <li className="nav__item"><a href="#portfolio" className="nav__link"><BiImage className="nav__icon" /> Portfolio</a></li>
              <li className="nav__item"><a href="#contact" className="nav__link"><BiSend className="nav__icon" /> Contact</a></li>
            </ul>
            <BiX className="nav__close" onClick={() => setMenuOpen(false)} />
          </div>

          <div className="nav__toggle" onClick={() => setMenuOpen(!menuOpen)}>
            <BiMenu />
          </div>
        </nav>
      </header>

      <main className="main">
        {/* HOME SECTION */}
        <section className="home section" id="home">
          <div className="home__container container grid">
            <div className="home__content grid">
              <div className="home__social">
                <a href="https://www.linkedin.com/in/rushikeshbhagat-" target="_blank" rel="noopener noreferrer" className="home__social-icon"><FiLinkedin /></a>
                <a href="https://github.com/Dev-Rushikesh65" target="_blank" rel="noopener noreferrer" className="home__social-icon"><FiGithub /></a>
                <a href="https://instagarm.com/_rushi_65_" target="_blank" rel="noopener noreferrer" className="home__social-icon"><FiInstagram /></a>
              </div>

              <div className="home__img"></div>

              <div className="home__data">
                <h3 className="home__title">Rushikesh</h3>
                <h3 className="home__subtitle">Java Full Stack Developer</h3>
                <p className="home__description">
                  Aspiring Full Stack Developer with skills in HTML, CSS, JavaScript, React, Java, and MySQL. Interested in building modern web applications, learning new technologies, and creating efficient solutions.</p><br></br>
                <a href="#contact" className="button button--flex">
                  Say Hello <BiSend className="button__icon" />
                </a>
              </div>
            </div>

            <div className="home__scroll">
              <a href="#about" className="home__scroll-button button--flex">
                <BiMouse className="home__scroll-mouse" />
                <span className="home__scroll-name">Scroll down</span>
                <BiDownArrowAlt className="home__scroll-arrow" />
              </a>
            </div>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section className="about section" id="about">
          <h2 className="section__title">About Me</h2>
          <span className="section__subtitle"></span>

          <div className="about__container container grid">
            <img src="/2.jpg" alt="Rushikesh Bhagat - Full Stack Developer professional photo" className="about__img" />

            <div className="about__data">
              <div className="about__info">
                <div className="about__box">
                  <BiBadgeCheck className="about__icon" />
                  <h3 className="about__title">Experience</h3>
                  <span className="about__subtitle">Fresher </span>
                </div>
                <div className="about__box">
                  <BiBriefcaseAlt className="about__icon" />
                  <h3 className="about__title">Completed</h3>
                  <span className="about__subtitle">2+ Projects</span>
                </div>
                <div className="about__box">
                  <BiBook className="about__icon" />
                  <h3 className="about__title">Education</h3>
                  <span className="about__subtitle">MCA Student</span>
                </div>
              </div>

              <p className="about__description">
                Full Stack Developer with expertise in modern web technologies. I build responsive web applications using React.js, Node.js, and databases like MySQL and MongoDB. Quick learner with strong problem-solving abilities and a keen interest in leveraging AI-based tools for efficient development.
              </p>

              <a href="#" className="button button--flex">
                Download CV <BiFile className="button__icon" />
              </a>
            </div>
          </div>
        </section>

        {/* SKILLS SECTION */}
        <section className="skills section" id="skills">
          <h2 className="section__title">Skills</h2>

          <div className="skills__container container grid">
            {/* Frontend */}
            <div className="skills__content">
              <h3 className="skills__title">Frontend Developer</h3>
              <div className="skills__box">
                <div className="skills__group">
                  <div className="skills__data">
                    <HiOutlineBadgeCheck className="skills__icon" />
                    <div>
                      <h3 className="skills__name">HTML</h3>
                      <span className="skills__level"></span>
                    </div>
                  </div>
                  <div className="skills__data">
                    <HiOutlineBadgeCheck className="skills__icon" />
                    <div>
                      <h3 className="skills__name">CSS</h3>
                      <span className="skills__level"></span>
                    </div>
                  </div>
                  <div className="skills__data">
                    <HiOutlineBadgeCheck className="skills__icon" />
                    <div>
                      <h3 className="skills__name">JavaScript</h3>
                      <span className="skills__level"></span>
                    </div>
                  </div>
                </div>
                <div className="skills__group">
                  <div className="skills__data">
                    <HiOutlineBadgeCheck className="skills__icon" />
                    <div>
                      <h3 className="skills__name">Bootstrap</h3>
                      <span className="skills__level"></span>
                    </div>
                  </div>
                  <div className="skills__data">
                    <HiOutlineBadgeCheck className="skills__icon" />
                    <div>
                      <h3 className="skills__name">Git</h3>
                      <span className="skills__level"></span>
                    </div>
                  </div>
                  <div className="skills__data">
                    <HiOutlineBadgeCheck className="skills__icon" />
                    <div>
                      <h3 className="skills__name">React</h3>
                      <span className="skills__level"></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Backend */}
            <div className="skills__content">
              <h3 className="skills__title">Backend Developer</h3>
              <div className="skills__box">
                <div className="skills__group">
                  <div className="skills__data">
                    <HiOutlineBadgeCheck className="skills__icon" />
                    <div>
                      <h3 className="skills__name">Java</h3>
                      <span className="skills__level"></span>
                    </div>
                  </div>
                  <div className="skills__data">
                    <HiOutlineBadgeCheck className="skills__icon" />
                    <div>
                      <h3 className="skills__name">Node.js</h3>
                      <span className="skills__level"></span>
                    </div>
                  </div>
                  <div className="skills__data">
                    <HiOutlineBadgeCheck className="skills__icon" />
                    <div>
                      <h3 className="skills__name">Spring Boot</h3>
                      <span className="skills__level"></span>
                    </div>
                  </div>
                </div>
                <div className="skills__group">
                  <div className="skills__data">
                    <HiOutlineBadgeCheck className="skills__icon" />
                    <div>
                      <h3 className="skills__name">MySQL</h3>
                      <span className="skills__level"></span>
                    </div>
                  </div>
                  <div className="skills__data">
                    <HiOutlineBadgeCheck className="skills__icon" />
                    <div>
                      <h3 className="skills__name">MongoDB</h3>
                      <span className="skills__level"></span>
                    </div>
                  </div>
                  <div className="skills__data">
                    <HiOutlineBadgeCheck className="skills__icon" />
                    <div>
                      <h3 className="skills__name">PostgreSQL</h3>
                      <span className="skills__level"></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES SECTION */}
        <section className="services section" id="services">
          <h2 className="section__title">Services</h2>
          <span className="section__subtitle"></span>

          <div className="services__container container grid">
            <div className="services__content">
              <div>
                <BiFile className="services__icon" />
                <h3 className="services__title">Full Stack <br /> Development</h3>
              </div>
              <span className="services__button" onClick={() => toggleTab(1)}>
                View More <BiRightArrowAlt className="services__button-icon" />
              </span>
              <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal"}>
                <div className="services__modal-content">
                  <BiX className="services__modal-close" onClick={() => toggleTab(0)} />
                  <h3 className="services__modal-title">Full Stack Development</h3>
                  <p className="services__modal-description">Building modern web applications with React, Node.js, and databases. Creating efficient, scalable solutions with clean code.</p>
                  <ul className="services__modal-services grid">
                    <li className="services__modal-service"><HiOutlineBadgeCheck className="services__modal-icon" /> <p>Responsive web application development.</p></li>
                    <li className="services__modal-service"><HiOutlineBadgeCheck className="services__modal-icon" /> <p>RESTful API development and integration.</p></li>
                    <li className="services__modal-service"><HiOutlineBadgeCheck className="services__modal-icon" /> <p>Database design and optimization.</p></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="services__content">
              <div>
                <BiBriefcaseAlt className="services__icon" />
                <h3 className="services__title">Frontend <br /> Development</h3>
              </div>
              <span className="services__button" onClick={() => toggleTab(2)}>
                View More <BiRightArrowAlt className="services__button-icon" />
              </span>
              <div className={toggleState === 2 ? "services__modal active-modal" : "services__modal"}>
                <div className="services__modal-content">
                  <BiX className="services__modal-close" onClick={() => toggleTab(0)} />
                  <h3 className="services__modal-title">Frontend Development</h3>
                  <p className="services__modal-description">Creating interactive and responsive user interfaces using modern frameworks and best practices.</p>
                  <ul className="services__modal-services grid">
                    <li className="services__modal-service"><HiOutlineBadgeCheck className="services__modal-icon" /> <p>React.js component development.</p></li>
                    <li className="services__modal-service"><HiOutlineBadgeCheck className="services__modal-icon" /> <p>Responsive design with Bootstrap.</p></li>
                    <li className="services__modal-service"><HiOutlineBadgeCheck className="services__modal-icon" /> <p>Modern JavaScript (ES6+).</p></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="services__content">
              <div>
                <BiImage className="services__icon" />
                <h3 className="services__title">Backend <br /> Development</h3>
              </div>
              <span className="services__button" onClick={() => toggleTab(3)}>
                View More <BiRightArrowAlt className="services__button-icon" />
              </span>
              <div className={toggleState === 3 ? "services__modal active-modal" : "services__modal"}>
                <div className="services__modal-content">
                  <BiX className="services__modal-close" onClick={() => toggleTab(0)} />
                  <h3 className="services__modal-title">Backend Development</h3>
                  <p className="services__modal-description">Building robust server-side applications with Node.js, Java, and database management.</p>
                  <ul className="services__modal-services grid">
                    <li className="services__modal-service"><HiOutlineBadgeCheck className="services__modal-icon" /> <p>Node.js and Express.js APIs.</p></li>
                    <li className="services__modal-service"><HiOutlineBadgeCheck className="services__modal-icon" /> <p>MySQL and MongoDB databases.</p></li>
                    <li className="services__modal-service"><HiOutlineBadgeCheck className="services__modal-icon" /> <p>Spring Boot applications.</p></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* QUALIFICATION SECTION */}
        <section className="qualification section">
          <h2 className="section__title">Qualification</h2>
          <span className="section__subtitle"></span>

          <div className="qualification__container container">
            <div className="qualification__tabs">
              <div className={qualToggle === 1 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"} onClick={() => setQualToggle(1)}>
                <BiBriefcaseAlt className="qualification__icon" /> Education
              </div>
              <div className={qualToggle === 2 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"} onClick={() => setQualToggle(2)}>
                <BiBriefcaseAlt className="qualification__icon" /> Experience
              </div>
            </div>

            <div className="qualification__sections">
              <div className={qualToggle === 1 ? "qualification__content qualification__content-active" : "qualification__content"}>
                <div className="qualification__data">
                  <div>
                    <h3 className="qualification__title">Master of Computer Applications</h3>
                    <span className="qualification__subtitle">Sinhgad Institute of Management, Pune</span>
                    <div className="qualification__calendar">2025 - 2027</div>
                  </div>
                  <div>
                    <span className="qualification__rounder"></span>
                    <span className="qualification__line"></span>
                  </div>
                </div>
                <div className="qualification__data">
                  <div></div>
                  <div>
                    <span className="qualification__rounder"></span>
                    <span className="qualification__line"></span>
                  </div>
                  <div>
                    <h3 className="qualification__title">Bachelor of Science in Computer Science</h3>
                    <span className="qualification__subtitle">Samarth College of Computer Science</span>
                    <div className="qualification__calendar">2022 - 2025</div>
                  </div>
                </div>
              </div>

              <div className={qualToggle === 2 ? "qualification__content qualification__content-active" : "qualification__content"}>
                <div className="qualification__data">
                  <div>
                    <h3 className="qualification__title"></h3>
                    <span className="qualification__subtitle">Auto Web Application (Car Service Platform)</span>
                    <div className="qualification__calendar">2025</div>
                  </div>
                  <div>
                    <span className="qualification__rounder"></span>
                    <span className="qualification__line"></span>
                  </div>
                </div>
                <div className="qualification__data">
                  <div></div>
                  <div>
                    <span className="qualification__rounder"></span>
                    <span className="qualification__line"></span>
                  </div>
                  <div>
                    <h3 className="qualification__title"></h3>
                    <span className="qualification__subtitle">EARS (Employment Application Review System)</span>
                    <div className="qualification__calendar">2024</div>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </section>

        {/* PORTFOLIO */}
        <section className="portfolio section" id="portfolio">
          <h2 className="section__title">Portfolio</h2>
          <span className="section__subtitle"></span>

          <div className="portfolio__filters">
            <span className="portfolio__item portfolio__item-active">All</span>
            <span className="portfolio__item">Web</span>
            <span className="portfolio__item">App</span>
            <span className="portfolio__item">Design</span>
          </div>

          <div className="portfolio__container container grid">
            <div className="portfolio__card">
              <img src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Auto Web Application - Car Service Platform built with React and Node.js" className="portfolio__img" />
              <h3 className="portfolio__title">Auto Web Application</h3>
              <a href="#" className="portfolio__button">Demo <BiRightArrowAlt className="portfolio__button-icon" /></a>
            </div>
            <div className="portfolio__card">
              <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="EARS System - Employment Application Review System full stack web application" className="portfolio__img" />
              <h3 className="portfolio__title">EARS System</h3>
              <a href="https://github.com/Dev-Rushikesh65/EARS" className="portfolio__button">Demo <BiRightArrowAlt className="portfolio__button-icon" /></a>
            </div>
            <div className="portfolio__card">
              <img src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Portfolio Website - Personal developer portfolio built with React and Vite" className="portfolio__img" />
              <h3 className="portfolio__title">Portfolio Website</h3>
              <a href="#" className="portfolio__button">Demo <BiRightArrowAlt className="portfolio__button-icon" /></a>
            </div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section className="contact section" id="contact">
          <h2 className="section__title">Contact Me</h2>
          <span className="section__subtitle"></span>

          <div className="contact__container container grid">
            <div className="contact__content">
              <h3 className="contact__title">Talk to me</h3>
              <div className="contact__info">
                <div className="contact__card">
                  <BiEnvelope className="contact__card-icon" />
                  <h3 className="contact__card-title">Email</h3>
                  <span className="contact__card-data"></span>
                  <a href="mailto:rushikeshbhagat4209@gmail.com" className="contact__button">Write me <BiRightArrowAlt className="contact__button-icon" /></a>
                </div>
                <div className="contact__card">
                  <BiPhone className="contact__card-icon" />
                  <h3 className="contact__card-title">Phone</h3>
                  <span className="contact__card-data"></span>
                  <a href="tel:+919730113159" className="contact__button">Call me <BiRightArrowAlt className="contact__button-icon" /></a>
                </div>
              </div>
            </div>

            <div className="contact__content">
              <h3 className="contact__title">Write me your project</h3>
              <form className="contact__form" onSubmit={handleSubmit}>
                <div className="contact__form-div">
                  <label className="contact__form-tag">Name</label>
                  <input type="text" name="name" className="contact__form-input" placeholder="Insert your name" required />
                </div>
                <div className="contact__form-div">
                  <label className="contact__form-tag">Mail</label>
                  <input type="email" name="email" className="contact__form-input" placeholder="Insert your email" required />
                </div>
                <div className="contact__form-div contact__form-area">
                  <label className="contact__form-tag">Project</label>
                  <textarea name="project" cols="30" rows="10" className="contact__form-input" placeholder="Write your project" required></textarea>
                </div>

                {formStatus === 'success' && (
                  <div className="contact__form-message contact__form-message--success">
                    ✓ Message sent successfully! I'll get back to you soon.
                  </div>
                )}

                {formStatus === 'error' && (
                  <div className="contact__form-message contact__form-message--error">
                    ✗ Oops! Something went wrong. Please try again.
                  </div>
                )}

                <button type="submit" className="button button--flex">
                  Send Message <BiSend className="button__icon" />
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* FOOTER - ADDED HERE */}
        <footer className="footer">
          <div className="footer__bg">
            <div className="footer__container container grid">
              <div>
                <h2 className="footer__title">Rushikesh Bhagat</h2>
                <span className="footer__subtitle">Full Stack Developer</span>
              </div>

              <ul className="footer__links">
                <li><a href="#services" className="footer__link">Services</a></li>
                <li><a href="#portfolio" className="footer__link">Portfolio</a></li>
                <li><a href="#contact" className="footer__link">Contact</a></li>
              </ul>

              <div className="footer__socials">
                <a href="https://www.linkedin.com/in/rushikeshbhagat" target="_blank" rel="noopener noreferrer" className="footer__social"><FiLinkedin /></a>
                <a href="https://github.com/Dev-Rushikesh65" target="_blank" rel="noopener noreferrer" className="footer__social"><FiGithub /></a>
                <a href="#" className="footer__social"><FiInstagram /></a>
              </div>
            </div>
            <p className="footer__copy">&#169; Rushikesh Bhagat. All rights reserved</p>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;