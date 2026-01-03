import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Swal from 'sweetalert2';
import { apiPost } from '../../../../utils/api';
import { 
  FaReact, FaNodeJs, FaPhp, FaLaravel, FaPython, FaVuejs, 
  FaCheckCircle, FaClock, FaUserTie, FaStar, FaArrowRight,
  FaCode, FaMobile, FaDatabase, FaCloud
} from 'react-icons/fa';

function HireDeveloper() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectType: '',
    budget: '',
    timeline: '',
    description: '',
    skills: []
  });
  const [loading, setLoading] = useState(false);

  const developers = [
    {
      name: "React Developer",
      icon: <FaReact />,
      color: "#61dafb",
      skills: ["React.js", "Next.js", "Redux", "TypeScript"],
      experience: "5+ years",
      rate: "$50-80/hr"
    },
    {
      name: "Laravel Developer",
      icon: <FaLaravel />,
      color: "#ff2d20",
      skills: ["Laravel", "PHP", "MySQL", "API Development"],
      experience: "4+ years",
      rate: "$45-75/hr"
    },
    {
      name: "Full Stack Developer",
      icon: <FaCode />,
      color: "#10b981",
      skills: ["React", "Node.js", "MongoDB", "AWS"],
      experience: "6+ years",
      rate: "$60-90/hr"
    },
    {
      name: "Mobile Developer",
      icon: <FaMobile />,
      color: "#8b5cf6",
      skills: ["React Native", "Flutter", "iOS", "Android"],
      experience: "5+ years",
      rate: "$55-85/hr"
    },
    {
      name: "Node.js Developer",
      icon: <FaNodeJs />,
      color: "#68a063",
      skills: ["Node.js", "Express", "PostgreSQL", "Docker"],
      experience: "5+ years",
      rate: "$50-80/hr"
    },
    {
      name: "Python Developer",
      icon: <FaPython />,
      color: "#3776ab",
      skills: ["Python", "Django", "Flask", "Data Science"],
      experience: "4+ years",
      rate: "$55-85/hr"
    }
  ];

  const benefits = [
    { icon: <FaCheckCircle />, title: "Vetted Experts", desc: "Pre-screened top 3% developers" },
    { icon: <FaClock />, title: "Quick Hiring", desc: "Start within 48 hours" },
    { icon: <FaUserTie />, title: "Dedicated Team", desc: "Full-time commitment" },
    { icon: <FaStar />, title: "Quality Assured", desc: "100% satisfaction guarantee" }
  ];

  const projectTypes = [
    "Web Development", "Mobile App", "E-commerce", "CRM/ERP", 
    "API Development", "UI/UX Design", "Consulting", "Other"
  ];

  const budgetRanges = [
    "< $5,000", "$5,000 - $10,000", "$10,000 - $25,000", 
    "$25,000 - $50,000", "$50,000+", "Not Sure"
  ];

  const timelineOptions = [
    "1-2 weeks", "1 month", "2-3 months", "3-6 months", "6+ months", "Ongoing"
  ];

  const skillsList = [
    "React", "Laravel", "Node.js", "Python", "Vue.js", 
    "PHP", "MongoDB", "MySQL", "AWS", "Docker"
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const toggleSkill = (skill) => {
    setFormData(prev => ({
      ...prev,
      skills: prev.skills.includes(skill)
        ? prev.skills.filter(s => s !== skill)
        : [...prev.skills, skill]
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const data = await apiPost('hire/submit', formData);
      console.log("API response:", data);

      Swal.fire({
        title: 'Request Submitted!',
        text: 'We will get back to you within 24 hours.',
        icon: 'success',
        confirmButtonText: 'Great!'
      });

      setFormData({
        name: '', email: '', phone: '', company: '',
        projectType: '', budget: '', timeline: '', description: '', skills: []
      });
    } catch (err) {
      console.error("Submission error:", err);
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

  return (
    <div style={{ background: "#f9fafb" }}>
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
                  Hire Top Developers
                </h1>
                <p className="lead mb-4">
                  Access pre-vetted, skilled developers ready to join your team. Scale fast with the best talent.
                </p>
                <motion.a
                  href="#hire-form"
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
                  Get Started <FaArrowRight className="ms-2" />
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
                {benefits.map((benefit, idx) => (
                  <motion.div 
                    className="col-6" 
                    key={idx}
                    whileHover={{ y: -5 }}
                  >
                    <div 
                      className="p-4 rounded-4 h-100"
                      style={{
                        background: "rgba(255, 255, 255, 0.15)",
                        backdropFilter: "blur(10px)",
                        border: "1px solid rgba(255, 255, 255, 0.2)"
                      }}
                    >
                      <div style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>
                        {benefit.icon}
                      </div>
                      <h5 className="fw-bold mb-2">{benefit.title}</h5>
                      <p className="small mb-0" style={{ opacity: 0.9 }}>{benefit.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Developers Section */}
      <section className="py-5">
        <div className="container">
          <motion.div 
            className="text-center mb-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="display-5 fw-bold mb-3">Our Expert Developers</h2>
            <p className="lead text-muted">Choose from our pool of talented developers</p>
          </motion.div>

          <div className="row g-4">
            {developers.map((dev, idx) => (
              <motion.div 
                className="col-md-6 col-lg-4" 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <motion.div 
                  className="card border-0 shadow-sm h-100 rounded-4 overflow-hidden"
                  whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(0,0,0,0.15)" }}
                >
                  <div 
                    className="p-4 text-white"
                    style={{ background: `linear-gradient(135deg, ${dev.color} 0%, ${dev.color}dd 100%)` }}
                  >
                    <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>
                      {dev.icon}
                    </div>
                    <h4 className="fw-bold mb-0">{dev.name}</h4>
                  </div>
                  <div className="card-body p-4">
                    <div className="d-flex justify-content-between mb-3">
                      <span className="text-muted">Experience:</span>
                      <span className="fw-bold">{dev.experience}</span>
                    </div>
                    <div className="d-flex justify-content-between mb-3">
                      <span className="text-muted">Rate:</span>
                      <span className="fw-bold text-success">{dev.rate}</span>
                    </div>
                    <div className="mb-3">
                      <p className="text-muted small mb-2">Skills:</p>
                      <div className="d-flex flex-wrap gap-2">
                        {dev.skills.map((skill, i) => (
                          <span 
                            key={i}
                            className="badge px-2 py-1"
                            style={{ 
                              background: `${dev.color}20`, 
                              color: dev.color,
                              border: `1px solid ${dev.color}40`
                            }}
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    <motion.button
                      className="btn w-100 text-white fw-semibold"
                      style={{ 
                        background: dev.color,
                        borderRadius: "8px"
                      }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => document.getElementById('hire-form').scrollIntoView({ behavior: 'smooth' })}
                    >
                      Hire Now
                    </motion.button>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Hiring Form Section */}
      <section className="py-5 bg-white" id="hire-form">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="text-center mb-5">
                  <h2 className="display-5 fw-bold mb-3">Start Your Project</h2>
                  <p className="lead text-muted">Tell us about your requirements</p>
                </div>

                <div className="card border-0 shadow-lg rounded-4 p-4 p-md-5">
                  <form onSubmit={handleSubmit}>
                    <div className="row g-4">
                      {/* Name & Email */}
                      <div className="col-md-6">
                        <label className="form-label fw-semibold">Full Name *</label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="form-control form-control-lg"
                          placeholder="John Doe"
                          required
                          style={{ borderRadius: "10px", border: "2px solid #e5e7eb" }}
                        />
                      </div>
                      <div className="col-md-6">
                        <label className="form-label fw-semibold">Email *</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="form-control form-control-lg"
                          placeholder="john@company.com"
                          required
                          style={{ borderRadius: "10px", border: "2px solid #e5e7eb" }}
                        />
                      </div>

                      {/* Phone & Company */}
                      <div className="col-md-6">
                        <label className="form-label fw-semibold">Phone</label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="form-control form-control-lg"
                          placeholder="+1 234 567 8900"
                          style={{ borderRadius: "10px", border: "2px solid #e5e7eb" }}
                        />
                      </div>
                      <div className="col-md-6">
                        <label className="form-label fw-semibold">Company</label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="form-control form-control-lg"
                          placeholder="Your Company"
                          style={{ borderRadius: "10px", border: "2px solid #e5e7eb" }}
                        />
                      </div>

                      {/* Project Type */}
                      <div className="col-12">
                        <label className="form-label fw-semibold">Project Type *</label>
                        <div className="row g-2">
                          {projectTypes.map((type) => (
                            <div className="col-6 col-md-3" key={type}>
                              <div
                                className={`p-3 rounded-3 text-center ${
                                  formData.projectType === type ? 'bg-primary text-white' : 'bg-light'
                                }`}
                                style={{ cursor: "pointer", transition: "all 0.3s" }}
                                onClick={() => setFormData(prev => ({ ...prev, projectType: type }))}
                              >
                                <small className="fw-semibold">{type}</small>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Budget & Timeline */}
                      <div className="col-md-6">
                        <label className="form-label fw-semibold">Budget Range *</label>
                        <select
                          name="budget"
                          value={formData.budget}
                          onChange={handleChange}
                          className="form-select form-select-lg"
                          required
                          style={{ borderRadius: "10px", border: "2px solid #e5e7eb" }}
                        >
                          <option value="">Select budget</option>
                          {budgetRanges.map((range) => (
                            <option key={range} value={range}>{range}</option>
                          ))}
                        </select>
                      </div>
                      <div className="col-md-6">
                        <label className="form-label fw-semibold">Timeline *</label>
                        <select
                          name="timeline"
                          value={formData.timeline}
                          onChange={handleChange}
                          className="form-select form-select-lg"
                          required
                          style={{ borderRadius: "10px", border: "2px solid #e5e7eb" }}
                        >
                          <option value="">Select timeline</option>
                          {timelineOptions.map((time) => (
                            <option key={time} value={time}>{time}</option>
                          ))}
                        </select>
                      </div>

                      {/* Skills Required */}
                      <div className="col-12">
                        <label className="form-label fw-semibold">Required Skills</label>
                        <div className="d-flex flex-wrap gap-2">
                          {skillsList.map((skill) => (
                            <button
                              key={skill}
                              type="button"
                              className={`btn ${
                                formData.skills.includes(skill) ? 'btn-primary' : 'btn-outline-secondary'
                              }`}
                              style={{ borderRadius: "20px" }}
                              onClick={() => toggleSkill(skill)}
                            >
                              {skill}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Description */}
                      <div className="col-12">
                        <label className="form-label fw-semibold">Project Description *</label>
                        <textarea
                          name="description"
                          value={formData.description}
                          onChange={handleChange}
                          className="form-control form-control-lg"
                          rows="5"
                          placeholder="Tell us about your project requirements..."
                          required
                          style={{ borderRadius: "10px", border: "2px solid #e5e7eb" }}
                        />
                      </div>

                      {/* Submit */}
                      <div className="col-12">
                        <motion.button
                          type="submit"
                          className="btn btn-lg w-100 text-white fw-bold"
                          disabled={loading}
                          style={{
                            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                            borderRadius: "12px",
                            padding: "14px"
                          }}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          {loading ? "Submitting..." : "Submit Request"}
                        </motion.button>
                      </div>
                    </div>
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

export default HireDeveloper;