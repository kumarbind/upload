import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  FaUsers, FaCog, FaShoppingCart, FaCheckCircle, FaArrowRight,
  FaStar, FaRocket, FaChartLine, FaShieldAlt
} from 'react-icons/fa';

function Products() {
  const navigate = useNavigate();

  const products = [
    {
      id: 1,
      name: "CRM System",
      tagline: "Manage Customer Relationships Effortlessly",
      icon: <FaUsers />,
      color: "#f59e0b",
      gradient: "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800",
      shortDesc: "Complete customer relationship management solution",
      description: "Streamline your sales process, track leads, and build stronger customer relationships with our powerful CRM.",
      features: [
        "Lead Management",
        "Sales Pipeline",
        "Email Integration",
        "Reports & Analytics",
        "Task Management",
        "Contact Management"
      ],
      pricing: {
        starter: "$49/mo",
        professional: "$99/mo",
        enterprise: "Custom"
      },
      highlights: [
        "Easy to use",
        "Cloud-based",
        "24/7 Support",
        "Regular updates"
      ]
    },
    {
      id: 2,
      name: "ERP Solution",
      tagline: "Unified Business Management Platform",
      icon: <FaCog />,
      color: "#ec4899",
      gradient: "linear-gradient(135deg, #ec4899 0%, #be185d 100%)",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
      shortDesc: "Enterprise resource planning for growing businesses",
      description: "Integrate all your business processes - from inventory to accounting - in one comprehensive ERP system.",
      features: [
        "Inventory Management",
        "Accounting & Finance",
        "HR Management",
        "Supply Chain",
        "Project Management",
        "Reporting Dashboard"
      ],
      pricing: {
        starter: "$199/mo",
        professional: "$399/mo",
        enterprise: "Custom"
      },
      highlights: [
        "Customizable",
        "Scalable",
        "Multi-user",
        "API Access"
      ]
    },
    {
      id: 3,
      name: "E-commerce Platform",
      tagline: "Sell Online with Ease",
      icon: <FaShoppingCart />,
      color: "#06b6d4",
      gradient: "linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800",
      shortDesc: "Complete e-commerce solution with payment integration",
      description: "Launch your online store quickly with our feature-rich e-commerce platform. Accept payments, manage inventory, and grow your business.",
      features: [
        "Product Management",
        "Shopping Cart",
        "Payment Gateway",
        "Order Tracking",
        "Customer Accounts",
        "Analytics Dashboard"
      ],
      pricing: {
        starter: "$79/mo",
        professional: "$149/mo",
        enterprise: "Custom"
      },
      highlights: [
        "Mobile-friendly",
        "SEO Optimized",
        "Secure Payments",
        "Easy Setup"
      ]
    }
  ];

  const benefits = [
    {
      icon: <FaRocket />,
      title: "Quick Deployment",
      description: "Get up and running in days, not months"
    },
    {
      icon: <FaShieldAlt />,
      title: "Secure & Reliable",
      description: "Enterprise-grade security and 99.9% uptime"
    },
    {
      icon: <FaChartLine />,
      title: "Scalable Solutions",
      description: "Grow your business without platform limitations"
    },
    {
      icon: <FaStar />,
      title: "Dedicated Support",
      description: "24/7 customer support to help you succeed"
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
                  Our Products
                </h1>
                <p className="lead mb-4">
                  Ready-to-use software solutions that accelerate your digital transformation
                </p>
                <motion.a
                  href="#products"
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
                  Explore Products <FaArrowRight className="ms-2" />
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
                      <p className="small mb-0" style={{ opacity: 0.9 }}>{benefit.description}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-5" id="products">
        <div className="container">
          <motion.div 
            className="text-center mb-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="display-5 fw-bold mb-3">Choose Your Solution</h2>
            <p className="lead text-muted">Powerful products designed to help your business thrive</p>
          </motion.div>

          <div className="row g-4">
            {products.map((product, idx) => (
              <motion.div 
                className="col-lg-4" 
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <motion.div 
                  className="card border-0 shadow-lg h-100 rounded-4 overflow-hidden"
                  whileHover={{ y: -10, boxShadow: "0 25px 50px rgba(0,0,0,0.2)" }}
                  style={{ cursor: "pointer" }}
                  onClick={() => navigate(`/products/${product.id}`)}
                >
                  {/* Image */}
                  <div className="position-relative" style={{ height: "250px", overflow: "hidden" }}>
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-100 h-100"
                      style={{ objectFit: "cover" }}
                    />
                    <div 
                      className="position-absolute top-0 start-0 w-100 h-100"
                      style={{ background: `${product.gradient}, opacity: 0.3` }}
                    />
                    <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center">
                      <div 
                        className="rounded-circle d-flex align-items-center justify-content-center"
                        style={{
                          width: "100px",
                          height: "100px",
                          background: "rgba(255, 255, 255, 0.95)",
                          fontSize: "3rem",
                          color: product.color
                        }}
                      >
                        {product.icon}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="card-body p-4">
                    <h3 className="fw-bold mb-2">{product.name}</h3>
                    <p className="text-muted small mb-3">{product.tagline}</p>
                    <p className="mb-4">{product.shortDesc}</p>

                    {/* Features */}
                    <div className="mb-4">
                      <h6 className="fw-bold mb-3">Key Features:</h6>
                      <div className="row g-2">
                        {product.features.slice(0, 4).map((feature, i) => (
                          <div key={i} className="col-12">
                            <div className="d-flex align-items-center gap-2">
                              <FaCheckCircle style={{ color: product.color, fontSize: "0.9rem" }} />
                              <small>{feature}</small>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Pricing */}
                    <div 
                      className="p-3 rounded-3 mb-4"
                      style={{ background: `${product.color}15` }}
                    >
                      <div className="d-flex justify-content-between align-items-center">
                        <div>
                          <small className="text-muted d-block">Starting from</small>
                          <h4 className="mb-0 fw-bold" style={{ color: product.color }}>
                            {product.pricing.starter}
                          </h4>
                        </div>
                        <div className="text-end">
                          <small className="text-muted d-block">Enterprise</small>
                          <strong>{product.pricing.enterprise}</strong>
                        </div>
                      </div>
                    </div>

                    {/* Highlights */}
                    <div className="d-flex flex-wrap gap-2 mb-4">
                      {product.highlights.map((highlight, i) => (
                        <span 
                          key={i}
                          className="badge px-2 py-1"
                          style={{ 
                            background: `${product.color}20`,
                            color: product.color,
                            border: `1px solid ${product.color}40`
                          }}
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <motion.button
                      className="btn w-100 text-white fw-semibold d-flex align-items-center justify-content-center gap-2"
                      style={{ 
                        background: product.gradient,
                        borderRadius: "10px",
                        padding: "12px"
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

      {/* Comparison Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <motion.div 
            className="text-center mb-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="display-5 fw-bold mb-3">All Products Include</h2>
            <p className="lead text-muted">Standard features across all our products</p>
          </motion.div>

          <div className="row g-4">
            {[
              { icon: <FaCheckCircle />, title: "Cloud Hosting", desc: "Secure cloud infrastructure" },
              { icon: <FaCheckCircle />, title: "Regular Updates", desc: "Free updates & new features" },
              { icon: <FaCheckCircle />, title: "Data Backup", desc: "Automated daily backups" },
              { icon: <FaCheckCircle />, title: "Mobile Access", desc: "iOS & Android apps" },
              { icon: <FaCheckCircle />, title: "API Access", desc: "RESTful API integration" },
              { icon: <FaCheckCircle />, title: "Support", desc: "24/7 customer support" }
            ].map((item, idx) => (
              <motion.div 
                className="col-md-4 col-lg-2" 
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
              >
                <div className="text-center">
                  <div 
                    className="d-inline-flex align-items-center justify-content-center rounded-circle mb-3"
                    style={{
                      width: "60px",
                      height: "60px",
                      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                      color: "white",
                      fontSize: "1.5rem"
                    }}
                  >
                    {item.icon}
                  </div>
                  <h6 className="fw-bold mb-1">{item.title}</h6>
                  <small className="text-muted">{item.desc}</small>
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
            <h2 className="display-5 fw-bold mb-3">Need a Custom Solution?</h2>
            <p className="lead mb-4">We can customize any product to match your specific requirements</p>
            <div className="d-flex gap-3 justify-content-center flex-wrap">
              <motion.a
                href="/hiredevelopers"
                className="btn btn-lg btn-light px-5 py-3 fw-bold"
                style={{ borderRadius: "12px" }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Talk to Sales
              </motion.a>
              <motion.a
                href="#contact"
                className="btn btn-lg btn-outline-light px-5 py-3 fw-bold"
                style={{ borderRadius: "12px" }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Request Demo
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Products;