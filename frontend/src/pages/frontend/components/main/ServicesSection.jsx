import React from "react";
import { motion } from "framer-motion";
import {
  FaShoppingCart, FaPlane, FaPenNib, FaUser, FaChartBar, FaDatabase,
  FaGraduationCap, FaBullhorn
} from "react-icons/fa";

const AnimatedIcon = ({ children }) => (
  <motion.div
    whileHover={{ scale: 1.15, rotate: 5 }}
    transition={{ duration: 0.4 }}
  >
    {children}
  </motion.div>
);

const services = [
  {
    title: "Web/App Development",
    description: "Personal or business portfolios with modern layouts, animations, downloadable resume, contact forms, and social links.",
    icon: <FaUser size={36} className="mb-3 text-warning" />,
    link: "/rcm-lead"
  },
  {
    title: "Lead Generation Sites",
    description: "Online stores with cart, payment gateway, inventory, order tracking, and responsive UI to boost sales.",
    icon: <FaShoppingCart size={36} className="mb-3 text-primary" />,
    link: "/ecommerce-development"
  },
  {
    title: "Admission & Booking Systems",
    description: "Booking systems for flights, hotels, buses, and cabs with payment integration and admin dashboards.",
    icon: <FaPlane size={36} className="mb-3 text-success" />,
    link: "/travel-solutions"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

const ServicesSection = () => {
  return (
    <motion.div
      className="container py-1"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <h2 className="text-center mb-1 fw-bold">Our Services</h2>

      <div className="row g-4">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="col-sm-6 col-md-4"
            variants={cardVariants}
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ type: "spring", stiffness: 250 }}
          >
            <a
              href={service.link}
              className="text-decoration-none"
              style={{ color: "inherit" }}
            >
              <div
                className="card h-100 p-3 border-0 shadow-lg rounded-4"
                style={{
                  background:
                    "linear-gradient(135deg, #ffffff 0%, #f8f9fa 50%, #eef1f5 100%)",
                  transition: "all 0.3s ease"
                }}
              >
                <div className="card-body text-center d-flex flex-column">
                  <AnimatedIcon>{service.icon}</AnimatedIcon>

                  <h5 className="card-title fw-bold mt-2">{service.title}</h5>

                  <p className="card-text flex-grow-1 text-muted mt-2">
                    {service.description}
                  </p>

                  <motion.div
                    whileHover={{ x: 5 }}
                    className="fw-semibold mt-3 text-primary"
                  >
                    Learn More →
                  </motion.div>
                </div>
              </div>
            </a>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default ServicesSection;