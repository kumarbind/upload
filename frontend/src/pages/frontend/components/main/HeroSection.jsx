import React, { useState } from "react";
import { apiPost } from '../../../../utils/api';
import Swal from 'sweetalert2';
import { motion } from "framer-motion";
import { FaMobileAlt, FaShoppingCart, FaChartLine, FaUsers, FaTools, FaCogs, FaArrowRight, FaStar, FaPhone, FaEnvelope, FaCalendarAlt, FaCheckCircle } from "react-icons/fa";
import GrowImage from "./assets/4737369_45241.jpg";

function HeroSection() {
  const services = [
    { 
      title: "Mobile Apps", 
      icon: <FaMobileAlt />, 
      desc: "Beautiful apps for iOS & Android",
      color: "#3b82f6",
      gradient: "linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)"
    },
    { 
      title: "Booking System", 
      icon: <FaUsers />, 
      desc: "Easy scheduling & appointments",
      color: "#8b5cf6",
      gradient: "linear-gradient(135deg, #8b5cf6 0%, #6d28d9 100%)"
    },
    { 
      title: "Business Management", 
      icon: <FaCogs />, 
      desc: "Streamline your operations",
      color: "#ec4899",
      gradient: "linear-gradient(135deg, #ec4899 0%, #be185d 100%)"
    },
    { 
      title: "Lead Generation", 
      icon: <FaChartLine />, 
      desc: "Grow your customer base",
      color: "#10b981",
      gradient: "linear-gradient(135deg, #10b981 0%, #047857 100%)"
    },
    { 
      title: "Admin Dashboards", 
      icon: <FaTools />, 
      desc: "Manage everything in one place",
      color: "#f59e0b",
      gradient: "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)"
    },
    { 
      title: "Online Stores", 
      icon: <FaShoppingCart />, 
      desc: "Sell products online easily",
      color: "#06b6d4",
      gradient: "linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)"
    },
  ];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const data = await apiPost('main/createlead', formData);
      console.log("API response:", data);

      Swal.fire({
        title: 'Thank you!',
        text: 'Your message has been sent successfully.',
        icon: 'success',
        confirmButtonText: 'OK'
      });

      setSubmitted(true);
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (err) {
      console.error("Submission error:", err);

      Swal.fire({
        title: 'Oops!',
        text: 'Something went wrong. Please try again later.',
        icon: 'error',
        confirmButtonText: 'OK'
      });

      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.header
      className="text-white position-relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      style={{
        backgroundImage: `url(${GrowImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "70vh",
      }}
    >
      {/* Modern gradient overlay with shimmer effect */}
      <div 
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{ 
          background: "linear-gradient(135deg, rgba(15, 23, 42, 0.95) 0%, rgba(88, 28, 135, 0.92) 50%, rgba(30, 64, 175, 0.90) 100%)",
          zIndex: 0 
        }}
      />

      {/* Animated gradient orbs */}
      <motion.div 
        className="position-absolute rounded-circle"
        style={{
          width: "500px",
          height: "500px",
          background: "radial-gradient(circle, rgba(139, 92, 246, 0.3) 0%, transparent 70%)",
          top: "-10%",
          right: "5%",
          filter: "blur(80px)",
          zIndex: 0
        }}
        animate={{
          y: [0, 30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="position-absolute rounded-circle"
        style={{
          width: "400px",
          height: "400px",
          background: "radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, transparent 70%)",
          bottom: "-5%",
          left: "10%",
          filter: "blur(80px)",
          zIndex: 0
        }}
        animate={{
          y: [0, -30, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="container position-relative" style={{ zIndex: 1 }}>
        <div className="row g-4 align-items-center py-2" style={{ minHeight: "70vh" }}>

          {/* LEFT SIDE - Enhanced Message */}
          <div className="col-lg-4">
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              

              {/* Animated Headline */}
              <motion.h1 
                className="display-4 fw-bold mb-3" 
                style={{ lineHeight: "1.2" }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                Build Your{" "}
                <span 
                  className="d-block"
                  style={{
                    background: "linear-gradient(90deg, #fbbf24 0%, #f59e0b 50%, #fbbf24 100%)",
                    backgroundSize: "200% 100%",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    animation: "shimmer 3s linear infinite"
                  }}
                >
                  Dream Website
                </span>
              </motion.h1>

              <style>
                {`
                  @keyframes shimmer {
                    0% { background-position: 200% center; }
                    100% { background-position: -200% center; }
                  }
                `}
              </style>

              {/* Enhanced Description */}
              <p className="fs-5 mb-2" style={{ opacity: 0.95, lineHeight: "1.7" }}>
                We create <strong style={{ color: "#fbbf24" }}>fast, modern websites</strong> that help your business grow. Professional results, no hassle.
              </p>

              {/* Dual CTAs with Icons */}
              <div className="d-flex flex-wrap gap-3 mb-2">
                <motion.a 
                  href="#contact" 
                  className="btn btn-lg px-2 py-1 text-dark fw-bold d-inline-flex align-items-center gap-2 flex-fill"
                  style={{
                    background: "linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)",
                    border: "none",
                    borderRadius: "12px",
                    fontSize: "1rem",
                    boxShadow: "0 4px 15px rgba(251, 191, 36, 0.4)"
                  }}
                  whileHover={{ 
                    scale: 1.05, 
                    boxShadow: "0 8px 25px rgba(251, 191, 36, 0.6)"
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>Get Free Consultation</span>
                  <FaArrowRight />
                </motion.a>
                <motion.a 
                  href="#create" 
                  className="btn btn-lg px-4 py-3 text-white fw-bold d-inline-flex align-items-center gap-2 flex-fill"
                  style={{
                    background: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
                    border: "none",
                    borderRadius: "12px",
                    fontSize: "1rem",
                    boxShadow: "0 4px 15px rgba(16, 185, 129, 0.4)"
                  }}
                  whileHover={{ 
                    scale: 1.05, 
                    boxShadow: "0 8px 25px rgba(16, 185, 129, 0.6)"
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>Create Own Site</span>
                  <FaArrowRight />
                </motion.a>
              </div>

              {/* Enhanced Contact Links */}
              <div className="d-flex flex-wrap align-items-center gap-3 mb-1" style={{ borderBottom: "1px solid rgba(255, 255, 255, 0.2)" }}>
                <motion.a 
                  href="tel:+1234567890" 
                  className="text-white text-decoration-none d-flex align-items-center gap-2 px-3 py-2 rounded-3"
                  style={{ 
                    background: "rgba(255, 255, 255, 0.1)",
                    backdropFilter: "blur(10px)",
                    transition: "all 0.3s ease"
                  }}
                  whileHover={{ 
                    background: "rgba(251, 191, 36, 0.2)",
                    scale: 1.05
                  }}
                >
                  <FaPhone style={{ fontSize: "0.9rem" }} />
                  <span style={{ fontSize: "0.95rem" }}>Call Us</span>
                </motion.a>
                <motion.a 
                  href="mailto:info@webdevcreates.com" 
                  className="text-white text-decoration-none d-flex align-items-center gap-2 px-3 py-2 rounded-3"
                  style={{ 
                    background: "rgba(255, 255, 255, 0.1)",
                    backdropFilter: "blur(10px)",
                    transition: "all 0.3s ease"
                  }}
                  whileHover={{ 
                    background: "rgba(251, 191, 36, 0.2)",
                    scale: 1.05
                  }}
                >
                  <FaEnvelope style={{ fontSize: "0.9rem" }} />
                  <span style={{ fontSize: "0.95rem" }}>Email Us</span>
                </motion.a>
                <motion.a 
                  href="#schedule" 
                  className="text-white text-decoration-none d-flex align-items-center gap-2 px-3 py-2 rounded-3"
                  style={{ 
                    background: "rgba(255, 255, 255, 0.1)",
                    backdropFilter: "blur(10px)",
                    transition: "all 0.3s ease"
                  }}
                  whileHover={{ 
                    background: "rgba(251, 191, 36, 0.2)",
                    scale: 1.05
                  }}
                >
                  <FaCalendarAlt style={{ fontSize: "0.9rem" }} />
                  <span style={{ fontSize: "0.95rem" }}>Schedule Call</span>
                </motion.a>
              </div>

              {/* Enhanced Stats with Icons */}
              <div className="p-1 row g-3">
                {[
                  { value: "50+", label: "Happy Clients", icon: "😊" },
                  { value: "7 Years", label: "Experience", icon: "🏆" },
                  { value: "100%", label: "Satisfaction", icon: "⭐" }
                ].map((stat, idx) => (
                  <motion.div 
                    className="col-4" 
                    key={idx}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.5 + idx * 0.1, type: "spring" }}
                  >
                    <motion.div 
                      className="text-center p-3 rounded-3"
                      style={{
                        background: "rgba(255, 255, 255, 0.1)",
                        backdropFilter: "blur(10px)",
                        border: "1px solid rgba(255, 255, 255, 0.2)"
                      }}
                      whileHover={{ 
                        scale: 1.05,
                        background: "rgba(255, 255, 255, 0.15)"
                      }}
                    >
                      <div style={{ fontSize: "1.5rem", marginBottom: "0.25rem" }}>{stat.icon}</div>
                      <h4 className="mb-0 fw-bold">{stat.value}</h4>
                      <small style={{ opacity: 0.9, fontSize: "0.8rem" }}>{stat.label}</small>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* RIGHT SIDE - Enhanced Service Cards */}
          <motion.div 
            className="col-lg-8"
            initial={{ x: 30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {/* Enhanced Section Header */}
            <div className="text-start mb-1">
              <motion.p 
                style={{ opacity: 0.9, fontSize: "1.05rem" }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                What We Build For You (Click any service to explore our portfolio)
              </motion.p>
            </div>

            {/* Enhanced Service Grid */}
            <div className="row g-3 mb-3">
              {services.map((service, idx) => (
                <motion.div 
                  className="col-6 col-md-4" 
                  key={idx}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.5 + idx * 0.08, type: "spring", stiffness: 200 }}
                >
                  <motion.a 
                    href={service.link} 
                    className="text-decoration-none d-block rounded-4 p-4 text-center h-100 position-relative overflow-hidden"
                    style={{
                      background: "rgba(255, 255, 255, 0.98)",
                      border: "2px solid transparent",
                      transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)"
                    }}
                    whileHover={{ 
                      y: -10,
                      scale: 1.03,
                      borderColor: service.color,
                      boxShadow: `0 20px 40px ${service.color}40`,
                      transition: { duration: 0.2 }
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {/* Gradient background on hover */}
                    <motion.div 
                      className="position-absolute top-0 start-0 w-100 h-100"
                      style={{
                        background: service.gradient,
                        opacity: 0,
                        zIndex: 0
                      }}
                      whileHover={{ opacity: 0.05 }}
                    />
                    
                    <div className="position-relative" style={{ zIndex: 1 }}>
                      {/* Icon with gradient */}
                      <motion.div 
                        className="mx-auto mb-3 d-flex align-items-center justify-content-center rounded-4"
                        style={{
                          width: "65px",
                          height: "65px",
                          background: service.gradient,
                          fontSize: "1.8rem",
                          color: "white",
                          boxShadow: `0 8px 16px ${service.color}40`
                        }}
                        whileHover={{ 
                          rotate: [0, -10, 10, -10, 0],
                          transition: { duration: 0.5 }
                        }}
                      >
                        {service.icon}
                      </motion.div>
                      
                      {/* Title */}
                      <h6 className="text-dark fw-bold mb-2" style={{ fontSize: "1rem" }}>
                        {service.title}
                      </h6>
                      
                      {/* Description */}
                      <p className="text-muted small mb-0" style={{ fontSize: "0.85rem", lineHeight: "1.5" }}>
                        {service.desc}
                      </p>
                    </div>
                  </motion.a>
                </motion.div>
              ))}
            </div>

            {/* Enhanced Trust Badge */}
            <motion.div 
              className="p-1 rounded-4"
              style={{
                background: "linear-gradient(135deg, rgba(16, 185, 129, 0.2) 0%, rgba(5, 150, 105, 0.15) 100%)",
                border: "1px solid rgba(16, 185, 129, 0.4)",
                backdropFilter: "blur(10px)"
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="d-flex align-items-start gap-3">
                <div 
                  className="rounded-circle flex-shrink-0 d-flex align-items-center justify-content-center"
                  style={{
                    width: "60px",
                    height: "60px",
                    background: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
                    fontSize: "1.8rem",
                    boxShadow: "0 4px 12px rgba(16, 185, 129, 0.3)"
                  }}
                >
                  😊
                </div>
                <div className="flex-grow-1">
                  <div className="d-flex gap-1 mb-1">
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ delay: 1.2 + i * 0.1, type: "spring" }}
                      >
                        <FaStar style={{ color: "#fbbf24", fontSize: "1.1rem" }} />
                      </motion.div>
                    ))}
                  </div>
                  <p className="mb-1 text-white fw-semibold" style={{ lineHeight: "1.6" }}>
                    "Amazing team! They built our website in just 2 weeks. Highly recommended!" 
                  </p>
                  <div className="d-flex align-items-center gap-2">
                    <small className="text-white" style={{ opacity: 0.9 }}>— John D., Business Owner</small>
                    <FaCheckCircle style={{ color: "#10b981", fontSize: "0.9rem" }} />
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.header>
  );
}

export default HeroSection;