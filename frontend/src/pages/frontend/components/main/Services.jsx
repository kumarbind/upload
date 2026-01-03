import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  FaCode, FaMobile, FaLightbulb, FaRocket, FaCheckCircle,
  FaArrowRight, FaClock, FaDollarSign, FaUsers, FaChartLine
} from 'react-icons/fa';

function Services() {
  const navigate = useNavigate();

  const services = [
    {
      id: 1,
      name: "Web Development",
      icon: <FaCode />,
      color: "#3b82f6",
      gradient: "linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)",
      shortDesc: "Custom websites built with modern technologies",
      description: "Build powerful, scalable web applications using React, Laravel, and cutting-edge technologies.",
      features: [
        "Responsive Design",
        "Fast Performance",
        "SEO Optimized",
        "Secure & Scalable"
      ],
      technologies: ["React", "Laravel", "Node.js", "PHP"],
      startingPrice: "$2,999",
      timeline: "4-8 weeks",
      projects: "150+"
    },
    {
      id: 2,
      name: "App Development",
      icon: <FaMobile />,
      color: "#8b5cf6",
      gradient: "linear-gradient(135deg, #8b5cf6 0%, #6d28d9 100%)",
      shortDesc: "Native and cross-platform mobile applications",
      description: "Create stunning mobile apps for iOS and Android with seamless user experience.",
      features: [
        "Cross-Platform",
        "Native Performance",
        "Push Notifications",
        "Offline Support"
      ],
      technologies: ["React Native", "Flutter", "Swift", "Kotlin"],
      startingPrice: "$4,999",
      timeline: "6-12 weeks",
      projects: "80+"
    },
    {
      id: 3,
      name: "Consulting",
      icon: <FaLightbulb />,
      color: "#10b981",
      gradient: "linear-gradient(135deg, #10b981 0%, #047857 100%)",
      shortDesc: "Expert technical guidance and strategy",
      description: "Get professional advice on technology stack, architecture, and digital transformation.",
      features: [
        "Technical Audits",
        "Strategy Planning",
        "Team Training",
        "Code Review"
      ],
      technologies: ["All Stack", "DevOps", "Cloud", "Architecture"],
      startingPrice: "$150/hr",
      timeline: "Flexible",
      projects: "200+"
    },
    {
      id: 4,
      name: "UI/UX Design",
      icon: <FaRocket />,
      color: "#f59e0b",
      gradient: "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)",
      shortDesc: "Beautiful, user-friendly interface design",
      description: "Design engaging user interfaces that convert visitors into customers.",
      features: [
        "User Research",
        "Wireframing",
        "Prototyping",
        "Usability Testing"
      ],
      technologies: ["Figma", "Adobe XD", "Sketch", "InVision"],
      startingPrice: "$1,999",
      timeline: "3-6 weeks",
      projects: "120+"
    },
    {
      id: 5,
      name: "API Development",
      icon: <FaChartLine />,
      color: "#ec4899",
      gradient: "linear-gradient(135deg, #ec4899 0%, #be185d 100%)",
      shortDesc: "RESTful and GraphQL API solutions",
      description: "Build robust APIs that power your applications and integrate with third-party services.",
      features: [
        "RESTful APIs",
        "GraphQL",
        "Documentation",
        "Authentication"
      ],
      technologies: ["Node.js", "Laravel", "Python", "FastAPI"],
      startingPrice: "$2,499",
      timeline: "3-5 weeks",
      projects: "90+"
    },
    {
      id: 6,
      name: "Cloud Solutions",
      icon: <FaUsers />,
      color: "#06b6d4",
      gradient: "linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)",
      shortDesc: "Scalable cloud infrastructure setup",
      description: "Deploy and manage your applications on AWS, Azure, or Google Cloud Platform.",
      features: [
        "Cloud Migration",
        "Auto Scaling",
        "Load Balancing",
        "Monitoring"
      ],
      technologies: ["AWS", "Azure", "GCP", "Docker"],
      startingPrice: "$3,499",
      timeline: "4-6 weeks",
      projects: "70+"
    }
  ];

  const stats = [
    { icon: <FaUsers />, value: "500+", label: "Happy Clients" },
    { icon: <FaCheckCircle />, value: "800+", label: "Projects Delivered" },
    { icon: <FaClock />, value: "7+", label: "Years Experience" },
    { icon: <FaDollarSign />, value: "98%", label: "Satisfaction Rate" }
  ];

  const processSteps = [
    {
      number: "01",
      title: "Discovery",
      description: "We understand your requirements and goals"
    },
    {
      number: "02",
      title: "Planning",
      description: "Create detailed roadmap and timeline"
    },
    {
      number: "03",
      title: "Development",
      description: "Build your solution with best practices"
    },
    {
      number: "04",
      title: "Launch",
      description: "Deploy and provide ongoing support"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section 
        className="text-white position-relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          minHeight: "60vh"
        }}
      >
        <div className="container py-5">
          <div className="row align-items-center min-vh-60">
            <div className="col-lg-6">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h1 className="display-3 fw-bold mb-4">
                  Our Services
                </h1>
                <p className="lead mb-4">
                  Comprehensive digital solutions to transform your business and drive growth
                </p>
                <motion.a
                  href="#services"
                  className="btn btn-lg px-5 py-3 fw-bold"
                  style={{
                    background: "white",
                    color: "#667eea",
                    borderRadius: "12px",
                    boxShadow: "0 4px 20px rgba(0,0,0,0.2)"
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Explore Services <FaArrowRight className="ms-2" />
                </motion.a>
              </motion.div>
            </div>
            <div className="col-lg-6">
              <motion.div
                className="row g-3"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                {stats.map((stat, idx) => (
                  <motion.div 
                    className="col-6" 
                    key={idx}
                    whileHover={{ y: -5 }}
                  >
                    <div 
                      className="p-4 rounded-4 h-100 text-center"
                      style={{
                        background: "rgba(255, 255, 255, 0.15)",
                        backdropFilter: "blur(10px)",
                        border: "1px solid rgba(255, 255, 255, 0.2)"
                      }}
                    >
                      <div style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>
                        {stat.icon}
                      </div>
                      <h3 className="fw-bold mb-1">{stat.value}</h3>
                      <p className="small mb-0" style={{ opacity: 0.9 }}>{stat.label}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-5" id="services">
        <div className="container">
          <motion.div 
            className="text-center mb-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="display-5 fw-bold mb-3">What We Offer</h2>
            <p className="lead text-muted">Choose the perfect service for your needs</p>
          </motion.div>

          <div className="row g-4">
            {services.map((service, idx) => (
              <motion.div 
                className="col-md-6 col-lg-4" 
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <motion.div 
                  className="card border-0 shadow-sm h-100 rounded-4 overflow-hidden"
                  whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(0,0,0,0.15)" }}
                  style={{ cursor: "pointer" }}
                  onClick={() => navigate(`/services/${service.id}`)}
                >
                  {/* Header with gradient */}
                  <div 
                    className="p-4 text-white"
                    style={{ background: service.gradient }}
                  >
                    <div className="d-flex justify-content-between align-items-start mb-3">
                      <div style={{ fontSize: "3rem" }}>
                        {service.icon}
                      </div>
                      <span className="badge bg-white bg-opacity-25">
                        {service.projects}
                      </span>
                    </div>
                    <h4 className="fw-bold mb-2">{service.name}</h4>
                    <p className="mb-0 small" style={{ opacity: 0.95 }}>
                      {service.shortDesc}
                    </p>
                  </div>

                  {/* Body */}
                  <div className="card-body p-4">
                    <p className="text-muted mb-3">{service.description}</p>

                    {/* Features */}
                    <div className="mb-4">
                      {service.features.map((feature, i) => (
                        <div key={i} className="d-flex align-items-center gap-2 mb-2">
                          <FaCheckCircle style={{ color: service.color, fontSize: "1rem" }} />
                          <small>{feature}</small>
                        </div>
                      ))}
                    </div>

                    {/* Info */}
                    <div className="d-flex justify-content-between mb-3 pb-3" style={{ borderBottom: "1px solid #e5e7eb" }}>
                      <div>
                        <small className="text-muted d-block">Starting From</small>
                        <strong style={{ color: service.color }}>{service.startingPrice}</strong>
                      </div>
                      <div>
                        <small className="text-muted d-block">Timeline</small>
                        <strong>{service.timeline}</strong>
                      </div>
                    </div>

                    {/* Technologies */}
                    <div className="d-flex flex-wrap gap-2 mb-3">
                      {service.technologies.map((tech, i) => (
                        <span 
                          key={i}
                          className="badge bg-light text-dark"
                          style={{ fontSize: "0.75rem" }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <motion.button
                      className="btn w-100 text-white fw-semibold d-flex align-items-center justify-content-center gap-2"
                      style={{ 
                        background: service.gradient,
                        borderRadius: "8px"
                      }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span>Learn More</span>
                      <FaArrowRight />
                    </motion.button>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <motion.div 
            className="text-center mb-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="display-5 fw-bold mb-3">Our Process</h2>
            <p className="lead text-muted">How we deliver exceptional results</p>
          </motion.div>

          <div className="row g-4">
            {processSteps.map((step, idx) => (
              <motion.div 
                className="col-md-6 col-lg-3" 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <div className="text-center">
                  <motion.div
                    className="d-inline-flex align-items-center justify-content-center rounded-circle mb-3"
                    style={{
                      width: "80px",
                      height: "80px",
                      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                      color: "white",
                      fontSize: "2rem",
                      fontWeight: "bold"
                    }}
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    {step.number}
                  </motion.div>
                  <h5 className="fw-bold mb-2">{step.title}</h5>
                  <p className="text-muted">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section 
        className="py-5 text-white"
        style={{ background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)" }}
      >
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="display-5 fw-bold mb-3">Ready to Get Started?</h2>
            <p className="lead mb-4">Let's discuss your project and bring your ideas to life</p>
            <div className="d-flex gap-3 justify-content-center flex-wrap">
              <motion.a
                href="/hiredevelopers"
                className="btn btn-lg btn-light px-5 py-3 fw-bold"
                style={{ borderRadius: "12px" }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Hire Our Team
              </motion.a>
              <motion.a
                href="#contact"
                className="btn btn-lg btn-outline-light px-5 py-3 fw-bold"
                style={{ borderRadius: "12px" }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Free Quote
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Services;