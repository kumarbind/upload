import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaPhp, FaLaravel } from 'react-icons/fa';
import { SiBootstrap, SiCodeigniter, SiYii } from 'react-icons/si';

function AboutSection() {
  return (
    <section id="about" className="py-2 bg-light">
      <div className="container">
        <h2 className="text-center">About Us</h2>
        <div className="row align-items-center">
          <div className="col-md-6">
            <p className="lead">
              We are a creative team of web developers and designers led by <strong>WebDevCreatrs Developrs</strong>, bringing over 7 years of industry experience to help businesses go digital with confidence.
            </p>
            <p>
              Our mission is to build powerful, responsive, and user-friendly web applications that not only look great but also solve real business problems. From sleek landing pages to complex dashboards and scalable APIs — we craft solutions that grow with you.
            </p>
            <p>
              We believe in clean code, modern design, and transparent collaboration. Every project starts with understanding your unique vision and turning it into a product your users will love.
            </p>
            <p>
              Over the years, we’ve worked with startups, small businesses, and enterprises to deliver everything from e-commerce stores and travel booking systems to blog platforms, LMS solutions, and custom admin panels.
            </p>
          </div>
          <div className="col-md-6">
            <h5 className="mb-3">Our Skills & Technologies</h5>
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
            <p className="mt-3">
              We blend these modern technologies to deliver solutions that are fast, secure, and scalable.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
