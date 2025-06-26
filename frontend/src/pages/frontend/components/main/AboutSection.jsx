import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaPhp, FaLaravel } from 'react-icons/fa';
import { SiBootstrap, SiCodeigniter, SiYii } from 'react-icons/si';

function AboutSection() {
  return (
    <section id="about" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-4">About Me</h2>
        <div className="row align-items-center">
          <div className="col-md-6">
            <p className="lead">
              I’m <strong>Sandip Kumar</strong>, a web developer with 7 years of experience building dynamic websites and web applications using modern frontend and backend technologies.
            </p>
            <p>
              I specialize in crafting responsive UI and developing powerful backend systems that scale.
            </p>
          </div>
          <div className="col-md-6">
            <h5 className="mb-3">Skills & Technologies</h5>
            <div className="d-flex flex-wrap gap-3 fs-3">
              <FaHtml5 title="HTML5" className="text-danger" />
              <FaCss3Alt title="CSS3" className="text-primary" />
              <SiBootstrap title="Bootstrap" className="text-purple" />
              <FaReact title="React" className="text-info" />
              <FaNodeJs title="Node.js" className="text-success" />
              <FaPhp title="PHP" className="text-dark" />
              <FaLaravel title="Laravel" className="text-danger" />
              <SiCodeigniter title="CodeIgniter" className="text-warning" />
              <SiYii title="Yii" className="text-success" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
