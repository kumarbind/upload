import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useParams, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { apiPost } from '../../../../utils/api';
import { 
  FaCode, FaMobile, FaLightbulb, FaRocket, FaCheckCircle,
  FaArrowLeft, FaStar, FaQuoteLeft, FaClock, FaDollarSign,
  FaUsers, FaChartLine
} from 'react-icons/fa';

function ServiceDetails() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [service, setService] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);

  const servicesData = {
    'Web-Development': {
      id: 1,
      name: "Web Development",
      icon: <FaCode />,
      color: "#3b82f6",
      gradient: "linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)",
      heroImage: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200",
      description: "Build powerful, scalable web applications using React, Laravel, and cutting-edge technologies. We create responsive, fast, and SEO-optimized websites that drive results.",
      detailedDesc: "Our web development services combine cutting-edge technology with proven best practices to deliver exceptional digital experiences. From simple landing pages to complex enterprise applications, we have the expertise to bring your vision to life.",
      features: [
        "Responsive Design",
        "Fast Performance",
        "SEO Optimized",
        "Secure & Scalable",
        "Modern UI/UX",
        "Cross-browser Compatible",
        "API Integration",
        "Admin Dashboard"
      ],
      technologies: ["React", "Laravel", "Node.js", "PHP", "MySQL", "MongoDB", "Tailwind CSS", "Bootstrap"],
      startingPrice: "$2,999",
      timeline: "4-8 weeks",
      deliverables: [
        "Fully functional website",
        "Source code",
        "Documentation",
        "Training session",
        "3 months support"
      ],
      process: [
        { step: "Requirements Gathering", duration: "1 week" },
        { step: "Design & Prototyping", duration: "1-2 weeks" },
        { step: "Development", duration: "2-4 weeks" },
        { step: "Testing & QA", duration: "1 week" },
        { step: "Deployment & Launch", duration: "Few days" }
      ],
      testimonials: [
        {
          name: "Sarah Johnson",
          role: "CEO, TechStart Inc",
          image: "https://i.pravatar.cc/150?img=1",
          text: "They delivered an amazing website that exceeded our expectations. Professional, timely, and excellent communication."
        },
        {
          name: "Michael Chen",
          role: "Founder, GrowthLabs",
          image: "https://i.pravatar.cc/150?img=2",
          text: "Best web development team we've worked with. They understood our vision and brought it to life perfectly."
        }
      ],
      faqs: [
        {
          question: "What's included in the starting price?",
          answer: "Our starting price includes a fully responsive website with up to 5 pages, basic SEO optimization, contact forms, and 3 months of support."
        },
        {
          question: "Do you provide hosting services?",
          answer: "Yes, we can help set up hosting on your preferred platform or recommend reliable hosting providers."
        },
        {
          question: "Can you redesign my existing website?",
          answer: "Absolutely! We specialize in website redesigns and can modernize your existing site while preserving your brand identity."
        }
      ]
    },
    2: {
      id: 2,
      name: "App Development",
      icon: <FaMobile />,
      color: "#8b5cf6",
      gradient: "linear-gradient(135deg, #8b5cf6 0%, #6d28d9 100%)",
      heroImage: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200",
      description: "Create stunning mobile apps for iOS and Android with seamless user experience and native performance.",
      detailedDesc: "We build high-performance mobile applications that engage users and drive business growth. Whether you need a consumer app or enterprise solution, we deliver quality apps that work flawlessly across devices.",
      features: [
        "Cross-Platform Development",
        "Native Performance",
        "Push Notifications",
        "Offline Support",
        "In-App Purchases",
        "Social Integration",
        "Analytics Integration",
        "App Store Optimization"
      ],
      technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase", "AWS", "Redux", "TypeScript"],
      startingPrice: "$4,999",
      timeline: "6-12 weeks",
      deliverables: [
        "iOS & Android apps",
        "Backend API",
        "Admin panel",
        "Source code",
        "App store submission",
        "6 months support"
      ],
      process: [
        { step: "Requirement Analysis", duration: "1 week" },
        { step: "UI/UX Design", duration: "2 weeks" },
        { step: "Development & Testing", duration: "4-8 weeks" },
        { step: "App Store Submission", duration: "1 week" },
        { step: "Launch & Support", duration: "Ongoing" }
      ],
      testimonials: [
        {
          name: "Emily Rodriguez",
          role: "Product Manager, HealthTech",
          image: "https://i.pravatar.cc/150?img=3",
          text: "Our app has over 50,000 downloads and excellent ratings. The development process was smooth and professional."
        }
      ],
      faqs: [
        {
          question: "Do you develop for both iOS and Android?",
          answer: "Yes, we use cross-platform technologies like React Native to develop for both platforms simultaneously, reducing cost and time."
        },
        {
          question: "How long does app store approval take?",
          answer: "Apple typically takes 1-3 days for review, while Google Play is usually faster at 1-2 days. We handle the entire submission process."
        }
      ]
    },
    'consulting': {
      id: 3,
      name: "Consulting",
      icon: <FaLightbulb />,
      color: "#10b981",
      gradient: "linear-gradient(135deg, #10b981 0%, #047857 100%)",
      heroImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200",
      description: "Get professional advice on technology stack, architecture, and digital transformation strategies.",
      detailedDesc: "Our consulting services help businesses make informed technology decisions. We provide expert guidance on architecture, best practices, team building, and digital transformation.",
      features: [
        "Technical Audits",
        "Architecture Review",
        "Code Review",
        "Team Training",
        "Technology Selection",
        "Performance Optimization",
        "Security Assessment",
        "Scalability Planning"
      ],
      technologies: ["All Stack", "DevOps", "Cloud", "Microservices", "CI/CD", "Docker", "Kubernetes", "Architecture"],
      startingPrice: "$150/hr",
      timeline: "Flexible",
      deliverables: [
        "Detailed assessment report",
        "Recommendations document",
        "Implementation roadmap",
        "Best practices guide",
        "Follow-up sessions"
      ],
      process: [
        { step: "Initial Assessment", duration: "1 week" },
        { step: "Deep Dive Analysis", duration: "1-2 weeks" },
        { step: "Recommendations", duration: "1 week" },
        { step: "Implementation Support", duration: "Ongoing" }
      ],
      testimonials: [
        {
          name: "David Park",
          role: "CTO, FinanceFlow",
          image: "https://i.pravatar.cc/150?img=4",
          text: "Their consulting saved us months of development time and helped us avoid costly mistakes."
        }
      ],
      faqs: [
        {
          question: "What types of consulting do you offer?",
          answer: "We offer technical consulting, architecture review, code audits, team training, and digital transformation strategy."
        },
        {
          question: "Is there a minimum engagement period?",
          answer: "We offer flexible engagement models from single sessions to long-term partnerships based on your needs."
        }
      ]
    }
  };

  useEffect(() => {
    const serviceData = servicesData[slug];
    console.log(serviceData, slug, 'serviceData', servicesData);
    
    if (serviceData) {
      setService(serviceData);
    } else {
      navigate('/services');
    }
  }, [slug, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const data = await apiPost('services/inquiry', {
        ...formData,
        serviceId: service.id,
        serviceName: service.name
      });

      Swal.fire({
        title: 'Inquiry Sent!',
        text: 'We will get back to you within 24 hours.',
        icon: 'success',
        confirmButtonText: 'Great!'
      });

      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (err) {
      Swal.fire({
        title: 'Oops!',
        text: 'Something went wrong. Please try again.',
        icon: 'error',
        confirmButtonText: 'OK'
      });
    } finally {
      setLoading(false);
    }
  };

  if (!service) return null;

  return (
    <div>
      {/* Hero Section */}
      <section 
        className="text-white position-relative"
        style={{
          backgroundImage: `url(${service.heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "60vh"
        }}
      >
        <div 
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{ background: "rgba(0, 0, 0, 0.7)" }}
        />
        <div className="container position-relative py-5">
          <motion.div
            className="py-5"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <button
              onClick={() => navigate('/services')}
              className="btn btn-light mb-4 d-inline-flex align-items-center gap-2"
              style={{ borderRadius: "8px" }}
            >
              <FaArrowLeft /> Back to Services
            </button>
            
            <div className="row align-items-center">
              <div className="col-lg-8">
                <div 
                  className="d-inline-flex align-items-center justify-content-center rounded-circle mb-3"
                  style={{
                    width: "80px",
                    height: "80px",
                    background: service.gradient,
                    fontSize: "2.5rem"
                  }}
                >
                  {service.icon}
                </div>
                <h1 className="display-3 fw-bold mb-3">{service.name}</h1>
                <p className="lead mb-4">{service.description}</p>
                
                <div className="d-flex flex-wrap gap-4 mb-4">
                  <div>
                    <div className="d-flex align-items-center gap-2 mb-1">
                      <FaDollarSign />
                      <strong>Starting From</strong>
                    </div>
                    <h4 className="mb-0">{service.startingPrice}</h4>
                  </div>
                  <div>
                    <div className="d-flex align-items-center gap-2 mb-1">
                      <FaClock />
                      <strong>Timeline</strong>
                    </div>
                    <h4 className="mb-0">{service.timeline}</h4>
                  </div>
                </div>

                <a 
                  href="#contact-form"
                  className="btn btn-lg px-5 py-3 fw-bold"
                  style={{
                    background: service.gradient,
                    border: "none",
                    borderRadius: "12px",
                    color: "white"
                  }}
                >
                  Get Started
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="fw-bold mb-4">Service Overview</h2>
                <p className="lead text-muted mb-4">{service.detailedDesc}</p>

                {/* Features */}
                <h3 className="fw-bold mb-3 mt-5">Key Features</h3>
                <div className="row g-3">
                  {service.features.map((feature, idx) => (
                    <div className="col-md-6" key={idx}>
                      <div className="d-flex align-items-start gap-2">
                        <FaCheckCircle 
                          style={{ color: service.color, fontSize: "1.2rem", marginTop: "0.2rem" }} 
                        />
                        <span>{feature}</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Technologies */}
                <h3 className="fw-bold mb-3 mt-5">Technologies We Use</h3>
                <div className="d-flex flex-wrap gap-2">
                  {service.technologies.map((tech, idx) => (
                    <span 
                      key={idx}
                      className="badge px-3 py-2"
                      style={{ 
                        background: `${service.color}20`,
                        color: service.color,
                        fontSize: "0.9rem",
                        border: `1px solid ${service.color}40`
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Process */}
                <h3 className="fw-bold mb-4 mt-5">Our Process</h3>
                {service.process.map((item, idx) => (
                  <motion.div 
                    key={idx}
                    className="d-flex gap-3 mb-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <div 
                      className="rounded-circle d-flex align-items-center justify-content-center fw-bold"
                      style={{
                        width: "40px",
                        height: "40px",
                        minWidth: "40px",
                        background: service.gradient,
                        color: "white"
                      }}
                    >
                      {idx + 1}
                    </div>
                    <div>
                      <h5 className="mb-1">{item.step}</h5>
                      <p className="text-muted mb-0">{item.duration}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="col-lg-4">
              <div className="sticky-top" style={{ top: "100px" }}>
                {/* Deliverables Card */}
                <div className="card border-0 shadow-sm rounded-4 mb-4">
                  <div 
                    className="card-header text-white p-4"
                    style={{ background: service.gradient }}
                  >
                    <h5 className="mb-0 fw-bold">What You'll Get</h5>
                  </div>
                  <div className="card-body p-4">
                    {service.deliverables.map((item, idx) => (
                      <div key={idx} className="d-flex align-items-center gap-2 mb-2">
                        <FaCheckCircle style={{ color: service.color }} />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Card */}
                <div 
                  className="card border-0 shadow-lg rounded-4 text-white p-4"
                  style={{ background: service.gradient }}
                >
                  <h5 className="fw-bold mb-3">Ready to Start?</h5>
                  <p className="mb-3">Let's discuss your project and create something amazing together.</p>
                  <a 
                    href="#contact-form"
                    className="btn btn-light btn-lg w-100 fw-bold"
                    style={{ borderRadius: "8px" }}
                  >
                    Get Free Quote
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      {service.testimonials && service.testimonials.length > 0 && (
        <section className="py-5 bg-light">
          <div className="container">
            <h2 className="fw-bold text-center mb-5">What Our Clients Say</h2>
            <div className="row g-4">
              {service.testimonials.map((testimonial, idx) => (
                <motion.div 
                  className="col-md-6" 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <div className="card border-0 shadow-sm rounded-4 h-100 p-4">
                    <FaQuoteLeft 
                      style={{ fontSize: "2rem", color: service.color, opacity: 0.3 }} 
                    />
                    <p className="my-3">{testimonial.text}</p>
                    <div className="d-flex align-items-center gap-3">
                      <img 
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="rounded-circle"
                        style={{ width: "50px", height: "50px" }}
                      />
                      <div>
                        <h6 className="mb-0 fw-bold">{testimonial.name}</h6>
                        <small className="text-muted">{testimonial.role}</small>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQs */}
      <section className="py-5">
        <div className="container">
          <h2 className="fw-bold text-center mb-5">Frequently Asked Questions</h2>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              {service.faqs.map((faq, idx) => (
                <motion.div 
                  key={idx}
                  className="card border-0 shadow-sm rounded-4 mb-3"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <div className="card-body p-4">
                    <h5 className="fw-bold mb-2">{faq.question}</h5>
                    <p className="text-muted mb-0">{faq.answer}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-5 bg-light" id="contact-form">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="text-center mb-4">
                  <h2 className="fw-bold mb-3">Get a Free Quote</h2>
                  <p className="text-muted">Fill out the form and we'll get back to you within 24 hours</p>
                </div>

                <div className="card border-0 shadow-lg rounded-4 p-4">
                  <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                      <label className="form-label fw-semibold">Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="form-control form-control-lg"
                        required
                        style={{ borderRadius: "10px", border: "2px solid #e5e7eb" }}
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label fw-semibold">Email *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="form-control form-control-lg"
                        required
                        style={{ borderRadius: "10px", border: "2px solid #e5e7eb" }}
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label fw-semibold">Phone</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="form-control form-control-lg"
                        style={{ borderRadius: "10px", border: "2px solid #e5e7eb" }}
                      />
                    </div>
                    <div className="mb-4">
                      <label className="form-label fw-semibold">Project Details *</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className="form-control form-control-lg"
                        rows="5"
                        required
                        style={{ borderRadius: "10px", border: "2px solid #e5e7eb" }}
                      />
                    </div>
                    <button
                      type="submit"
                      className="btn btn-lg w-100 text-white fw-bold"
                      disabled={loading}
                      style={{
                        background: service.gradient,
                        borderRadius: "10px"
                      }}
                    >
                      {loading ? "Sending..." : "Send Inquiry"}
                    </button>
                  </form>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ServiceDetails;