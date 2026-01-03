import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { apiPost } from '../../../../utils/api';
import { 
  FaGlobe, FaExternalLinkAlt, FaFilter, FaTimes, 
  FaReact, FaLaravel, FaShoppingCart, FaMobile,
  FaSearch, FaChevronRight
} from 'react-icons/fa';

function Portfolio() {
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [selectedProject, setSelectedProject] = useState(null);

  // Demo projects (replace with API data)
  const demoProjects = [
    {
      id: 1,
      name: "E-commerce Platform",
      category: "E-commerce",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800",
      url: "https://example.com",
      description: "A full-featured e-commerce platform with payment integration, inventory management, and analytics dashboard.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      features: ["Payment Gateway", "Admin Dashboard", "Real-time Analytics", "Multi-vendor Support"],
      year: "2024"
    },
    {
      id: 2,
      name: "CRM System",
      category: "Business Website",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
      url: "https://example.com",
      description: "Customer relationship management system with lead tracking, automation, and reporting features.",
      technologies: ["Laravel", "Vue.js", "MySQL", "Redis"],
      features: ["Lead Management", "Email Automation", "Custom Reports", "API Integration"],
      year: "2024"
    },
    {
      id: 3,
      name: "Mobile Banking App",
      category: "Mobile App",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800",
      url: "https://example.com",
      description: "Secure mobile banking application with biometric authentication and real-time transactions.",
      technologies: ["React Native", "Firebase", "Node.js"],
      features: ["Biometric Auth", "Real-time Transactions", "Bill Payments", "Investment Tracking"],
      year: "2023"
    },
    {
      id: 4,
      name: "Portfolio Website",
      category: "Portfolio",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800",
      url: "https://example.com",
      description: "Modern portfolio website for a creative agency with smooth animations and interactive elements.",
      technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
      features: ["Smooth Animations", "Dark Mode", "Blog Integration", "Contact Form"],
      year: "2024"
    },
    {
      id: 5,
      name: "Food Delivery App",
      category: "Mobile App",
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800",
      url: "https://example.com",
      description: "Food delivery platform connecting restaurants with customers, featuring real-time tracking.",
      technologies: ["React Native", "Laravel", "Google Maps API"],
      features: ["Real-time Tracking", "Multiple Payments", "Restaurant Dashboard", "Order Management"],
      year: "2023"
    },
    {
      id: 6,
      name: "SaaS Dashboard",
      category: "SaaS Platform",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
      url: "https://example.com",
      description: "Analytics dashboard for SaaS companies with data visualization and reporting tools.",
      technologies: ["React", "Chart.js", "Node.js", "PostgreSQL"],
      features: ["Data Visualization", "Custom Reports", "User Management", "API Access"],
      year: "2024"
    },
    {
      id: 7,
      name: "Booking System",
      category: "Business Website",
      image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=800",
      url: "https://example.com",
      description: "Complete booking and reservation system for hotels and vacation rentals.",
      technologies: ["Laravel", "React", "Stripe", "MySQL"],
      features: ["Calendar Integration", "Payment Processing", "Availability Management", "Email Notifications"],
      year: "2023"
    },
    {
      id: 8,
      name: "Blog Platform",
      category: "Blog",
      image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800",
      url: "https://example.com",
      description: "Modern blogging platform with markdown support and social media integration.",
      technologies: ["Next.js", "MongoDB", "AWS S3"],
      features: ["Markdown Editor", "SEO Optimized", "Social Sharing", "Comments System"],
      year: "2024"
    }
  ];

  const categories = [
    "All", "E-commerce", "Business Website", "Portfolio", 
    "Blog", "SaaS Platform", "Mobile App"
  ];

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setProjects(demoProjects);
      setFilteredProjects(demoProjects);
      setLoading(false);
    }, 1000);
  }, []);

  useEffect(() => {
    let filtered = projects;

    if (selectedCategory !== 'All') {
      filtered = filtered.filter(p => p.category === selectedCategory);
    }

    if (searchTerm) {
      filtered = filtered.filter(p => 
        p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.technologies.some(t => t.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    setFilteredProjects(filtered);
  }, [selectedCategory, searchTerm, projects]);

  return (
    <div>
      {/* Hero Section */}
      <section 
        className="text-white position-relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          minHeight: "50vh"
        }}
      >
        <div className="container py-5">
          <motion.div 
            className="text-center py-5"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="display-3 fw-bold mb-3">Our Portfolio</h1>
            <p className="lead mb-4">
              Explore our successful projects and see how we've helped businesses grow
            </p>
            <div className="d-flex justify-content-center gap-3">
              <div className="text-center">
                <h3 className="fw-bold mb-0">50+</h3>
                <small>Projects Completed</small>
              </div>
              <div className="text-center">
                <h3 className="fw-bold mb-0">40+</h3>
                <small>Happy Clients</small>
              </div>
              <div className="text-center">
                <h3 className="fw-bold mb-0">7+</h3>
                <small>Years Experience</small>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row g-4 align-items-center">
            {/* Search */}
            <div className="col-lg-4">
              <div className="position-relative">
                <FaSearch 
                  className="position-absolute text-muted"
                  style={{ left: "15px", top: "50%", transform: "translateY(-50%)" }}
                />
                <input
                  type="text"
                  className="form-control form-control-lg ps-5"
                  placeholder="Search projects..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  style={{ borderRadius: "12px", border: "2px solid #e5e7eb" }}
                />
              </div>
            </div>

            {/* Category Filters */}
            <div className="col-lg-8">
              <div className="d-flex flex-wrap gap-2 justify-content-lg-end">
                {categories.map((cat) => (
                  <motion.button
                    key={cat}
                    className={`btn ${
                      selectedCategory === cat ? 'btn-primary' : 'btn-outline-secondary'
                    }`}
                    style={{ borderRadius: "20px" }}
                    onClick={() => setSelectedCategory(cat)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {cat}
                  </motion.button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-5">
        <div className="container">
          {loading ? (
            <div className="text-center py-5">
              <div className="spinner-border text-primary" style={{ width: "3rem", height: "3rem" }}>
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          ) : filteredProjects.length === 0 ? (
            <div className="text-center py-5">
              <h4 className="text-muted">No projects found</h4>
              <p>Try adjusting your filters or search term</p>
            </div>
          ) : (
            <motion.div 
              className="row g-4"
              layout
            >
              {filteredProjects.map((project, idx) => (
                <motion.div
                  key={project.id}
                  className="col-md-6 col-lg-4"
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: idx * 0.1 }}
                >
                  <motion.div 
                    className="card border-0 shadow-sm h-100 rounded-4 overflow-hidden"
                    whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(0,0,0,0.15)" }}
                    style={{ cursor: "pointer" }}
                    onClick={() => setSelectedProject(project)}
                  >
                    <div className="position-relative overflow-hidden" style={{ height: "250px" }}>
                      <img
                        src={project.image}
                        alt={project.name}
                        className="w-100 h-100"
                        style={{ objectFit: "cover" }}
                      />
                      <div 
                        className="position-absolute top-0 end-0 m-3 badge bg-primary"
                        style={{ fontSize: "0.85rem" }}
                      >
                        {project.year}
                      </div>
                    </div>
                    <div className="card-body p-4">
                      <div className="d-flex justify-content-between align-items-start mb-2">
                        <h5 className="fw-bold mb-0">{project.name}</h5>
                        <FaExternalLinkAlt className="text-primary" />
                      </div>
                      <p className="text-muted small mb-3">
                        {project.description.substring(0, 100)}...
                      </p>
                      <div className="d-flex flex-wrap gap-2 mb-3">
                        {project.technologies.slice(0, 3).map((tech, i) => (
                          <span 
                            key={i}
                            className="badge bg-light text-dark"
                            style={{ fontSize: "0.75rem" }}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="d-flex justify-content-between align-items-center">
                        <span className="badge bg-success-subtle text-success">
                          {project.category}
                        </span>
                        <span className="text-primary fw-semibold small">
                          View Details <FaChevronRight size={12} />
                        </span>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </section>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
            style={{
              background: "rgba(0, 0, 0, 0.8)",
              zIndex: 9999,
              padding: "20px"
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="bg-white rounded-4 shadow-lg position-relative"
              style={{ maxWidth: "900px", maxHeight: "90vh", overflowY: "auto" }}
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="btn-close position-absolute top-0 end-0 m-3"
                onClick={() => setSelectedProject(null)}
                style={{ zIndex: 1 }}
              />
              
              <img
                src={selectedProject.image}
                alt={selectedProject.name}
                className="w-100 rounded-top-4"
                style={{ maxHeight: "400px", objectFit: "cover" }}
              />
              
              <div className="p-4 p-md-5">
                <div className="d-flex justify-content-between align-items-start mb-3">
                  <div>
                    <h2 className="fw-bold mb-2">{selectedProject.name}</h2>
                    <div className="d-flex gap-2 align-items-center">
                      <span className="badge bg-primary">{selectedProject.category}</span>
                      <span className="text-muted">{selectedProject.year}</span>
                    </div>
                  </div>
                  <a
                    href={selectedProject.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary d-flex align-items-center gap-2"
                  >
                    <FaGlobe />
                    Visit Site
                  </a>
                </div>

                <p className="text-muted mb-4">{selectedProject.description}</p>

                <div className="mb-4">
                  <h5 className="fw-bold mb-3">Technologies Used</h5>
                  <div className="d-flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech, i) => (
                      <span 
                        key={i}
                        className="badge bg-light text-dark px-3 py-2"
                        style={{ fontSize: "0.9rem" }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h5 className="fw-bold mb-3">Key Features</h5>
                  <div className="row g-2">
                    {selectedProject.features.map((feature, i) => (
                      <div key={i} className="col-md-6">
                        <div className="d-flex align-items-center gap-2">
                          <div 
                            className="rounded-circle bg-success d-flex align-items-center justify-content-center"
                            style={{ width: "24px", height: "24px", minWidth: "24px" }}
                          >
                            <span className="text-white" style={{ fontSize: "0.75rem" }}>✓</span>
                          </div>
                          <span>{feature}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

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
            <h2 className="display-5 fw-bold mb-3">Ready to Start Your Project?</h2>
            <p className="lead mb-4">Let's build something amazing together</p>
            <motion.a
              href="/hiredevelopers"
              className="btn btn-lg btn-light px-5 py-3 fw-bold"
              style={{ borderRadius: "12px" }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Hire Our Team
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Portfolio;