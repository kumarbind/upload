import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useParams, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { apiPost } from '../../../../utils/api';
import { 
  FaUsers, FaCog, FaShoppingCart, FaCheckCircle, FaArrowLeft,
  FaStar, FaQuoteLeft, FaPlay, FaDownload, FaTimes
} from 'react-icons/fa';

function ProductDetails() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [selectedPlan, setSelectedPlan] = useState('professional');
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: ''
  });
  const [loading, setLoading] = useState(false);

  const productsData = {
    'crm': {
      id: 1,
      name: "CRM System",
      tagline: "Manage Customer Relationships Effortlessly",
      icon: <FaUsers />,
      color: "#f59e0b",
      gradient: "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)",
      heroImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200",
      description: "Complete customer relationship management solution to streamline your sales process and build stronger customer relationships.",
      detailedDesc: "Our CRM system is designed to help businesses of all sizes manage their customer relationships more effectively. Track leads, manage sales pipelines, automate follow-ups, and gain valuable insights into your sales performance.",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      features: [
        {
          title: "Lead Management",
          description: "Capture, track, and nurture leads throughout the sales funnel",
          icon: "📊"
        },
        {
          title: "Sales Pipeline",
          description: "Visual pipeline to track deals and forecast revenue",
          icon: "🎯"
        },
        {
          title: "Email Integration",
          description: "Sync emails and track customer communications",
          icon: "📧"
        },
        {
          title: "Reports & Analytics",
          description: "Real-time insights into sales performance and metrics",
          icon: "📈"
        },
        {
          title: "Task Management",
          description: "Organize and prioritize your team's tasks and activities",
          icon: "✅"
        },
        {
          title: "Contact Management",
          description: "Centralized database for all customer information",
          icon: "👥"
        }
      ],
      pricing: [
        {
          name: "Starter",
          price: "$49",
          period: "/month",
          description: "Perfect for small teams",
          features: [
            "Up to 5 users",
            "1,000 contacts",
            "Basic reports",
            "Email support",
            "Mobile apps"
          ],
          popular: false
        },
        {
          name: "Professional",
          price: "$99",
          period: "/month",
          description: "Best for growing businesses",
          features: [
            "Up to 20 users",
            "10,000 contacts",
            "Advanced reports",
            "Priority support",
            "Custom fields",
            "API access",
            "Integrations"
          ],
          popular: true
        },
        {
          name: "Enterprise",
          price: "Custom",
          period: "",
          description: "For large organizations",
          features: [
            "Unlimited users",
            "Unlimited contacts",
            "Custom reports",
            "Dedicated support",
            "White-label option",
            "Custom integrations",
            "SLA guarantee",
            "Training & onboarding"
          ],
          popular: false
        }
      ],
      integrations: ["Slack", "Gmail", "Outlook", "Zapier", "Salesforce", "HubSpot"],
      testimonials: [
        {
          name: "John Smith",
          role: "Sales Director, TechCorp",
          image: "https://i.pravatar.cc/150?img=10",
          rating: 5,
          text: "This CRM transformed our sales process. We've seen a 40% increase in conversions since switching."
        },
        {
          name: "Sarah Williams",
          role: "CEO, GrowthStart",
          image: "https://i.pravatar.cc/150?img=11",
          rating: 5,
          text: "Easy to use, powerful features, and excellent support. Highly recommended!"
        }
      ],
      screenshots: [
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600",
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600",
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600"
      ]
    },
    'erp': {
      id: 2,
      name: "ERP Solution",
      tagline: "Unified Business Management Platform",
      icon: <FaCog />,
      color: "#ec4899",
      gradient: "linear-gradient(135deg, #ec4899 0%, #be185d 100%)",
      heroImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200",
      description: "Enterprise resource planning system that integrates all your business processes in one comprehensive platform.",
      detailedDesc: "Streamline operations, improve efficiency, and make data-driven decisions with our all-in-one ERP solution. From inventory management to financial reporting, we've got you covered.",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      features: [
        { title: "Inventory Management", description: "Track stock levels and automate reordering", icon: "📦" },
        { title: "Accounting & Finance", description: "Complete financial management and reporting", icon: "💰" },
        { title: "HR Management", description: "Employee records, payroll, and attendance", icon: "👔" },
        { title: "Supply Chain", description: "Manage suppliers and procurement", icon: "🚚" },
        { title: "Project Management", description: "Plan and track project progress", icon: "📋" },
        { title: "Reporting Dashboard", description: "Real-time business intelligence", icon: "📊" }
      ],
      pricing: [
        {
          name: "Starter",
          price: "$199",
          period: "/month",
          description: "For small businesses",
          features: ["Up to 10 users", "Core modules", "Basic reporting", "Email support", "Data storage"],
          popular: false
        },
        {
          name: "Professional",
          price: "$399",
          period: "/month",
          description: "For medium businesses",
          features: ["Up to 50 users", "All modules", "Advanced reporting", "Priority support", "API access", "Custom workflows"],
          popular: true
        },
        {
          name: "Enterprise",
          price: "Custom",
          period: "",
          description: "For large enterprises",
          features: ["Unlimited users", "Custom modules", "Custom reports", "Dedicated support", "Multi-location", "Advanced security"],
          popular: false
        }
      ],
      integrations: ["QuickBooks", "Xero", "Stripe", "PayPal", "AWS", "Azure"],
      testimonials: [
        {
          name: "Michael Brown",
          role: "COO, Manufacturing Co",
          image: "https://i.pravatar.cc/150?img=12",
          rating: 5,
          text: "Integrated all our business processes seamlessly. ROI achieved in 6 months!"
        }
      ],
      screenshots: [
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600",
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600"
      ]
    },
    'ecommerce': {
      id: 3,
      name: "E-commerce Platform",
      tagline: "Sell Online with Ease",
      icon: <FaShoppingCart />,
      color: "#06b6d4",
      gradient: "linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)",
      heroImage: "https://images.unsplash.com/photo-1557821552-17105176677c?w=1200",
      description: "Complete e-commerce solution with payment integration, inventory management, and analytics.",
      detailedDesc: "Launch your online store in minutes with our powerful e-commerce platform. Everything you need to start selling online - from product management to secure payments.",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      features: [
        { title: "Product Management", description: "Easy product catalog with variants", icon: "🛍️" },
        { title: "Shopping Cart", description: "Optimized checkout experience", icon: "🛒" },
        { title: "Payment Gateway", description: "Multiple payment options integrated", icon: "💳" },
        { title: "Order Tracking", description: "Real-time order status updates", icon: "📦" },
        { title: "Customer Accounts", description: "Member areas and wishlists", icon: "👤" },
        { title: "Analytics Dashboard", description: "Sales and customer insights", icon: "📊" }
      ],
      pricing: [
        {
          name: "Starter",
          price: "$79",
          period: "/month",
          description: "Launch your store",
          features: ["Up to 100 products", "Basic templates", "Payment gateway", "Email support", "SSL certificate"],
          popular: false
        },
        {
          name: "Professional",
          price: "$149",
          period: "/month",
          description: "Grow your business",
          features: ["Unlimited products", "Premium templates", "Advanced SEO", "Priority support", "Marketing tools", "Analytics"],
          popular: true
        },
        {
          name: "Enterprise",
          price: "Custom",
          period: "",
          description: "Scale unlimited",
          features: ["Custom design", "Dedicated server", "Multi-store", "API access", "Dedicated support", "Custom features"],
          popular: false
        }
      ],
      integrations: ["Stripe", "PayPal", "Shopify", "WooCommerce", "Mailchimp", "Google Analytics"],
      testimonials: [
        {
          name: "Emma Davis",
          role: "Owner, Fashion Boutique",
          image: "https://i.pravatar.cc/150?img=13",
          rating: 5,
          text: "Setup was incredibly easy. Now making $10k/month online!"
        }
      ],
      screenshots: [
        "https://images.unsplash.com/photo-1557821552-17105176677c?w=600",
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600"
      ]
    }
  };

  useEffect(() => {
    const productData = productsData[slug];
    if (productData) {
      setProduct(productData);
    } else {
      navigate('/products');
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
      await apiPost('products/demo-request', {
        ...formData,
        productId: product.id,
        productName: product.name,
        selectedPlan
      });

      Swal.fire({
        title: 'Demo Requested!',
        text: 'We will contact you shortly to schedule a demo.',
        icon: 'success',
        confirmButtonText: 'Great!'
      });

      setFormData({ name: '', email: '', company: '', phone: '' });
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

  if (!product) return null;

  return (
    <div>
      {/* Hero Section */}
      <section 
        className="text-white position-relative"
        style={{
          backgroundImage: `url(${product.heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "70vh"
        }}
      >
        <div 
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{ background: "rgba(0, 0, 0, 0.75)" }}
        />
        <div className="container position-relative py-5">
          <motion.div
            className="py-5"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <button
              onClick={() => navigate('/products')}
              className="btn btn-light mb-4 d-inline-flex align-items-center gap-2"
            >
              <FaArrowLeft /> Back to Products
            </button>
            
            <div className="row align-items-center">
              <div className="col-lg-7">
                <div 
                  className="d-inline-flex align-items-center justify-content-center rounded-circle mb-3"
                  style={{
                    width: "100px",
                    height: "100px",
                    background: product.gradient,
                    fontSize: "3rem"
                  }}
                >
                  {product.icon}
                </div>
                <h1 className="display-2 fw-bold mb-3">{product.name}</h1>
                <p className="lead mb-4" style={{ fontSize: "1.5rem" }}>{product.tagline}</p>
                <p className="fs-5 mb-4">{product.description}</p>
                
                <div className="d-flex gap-3 flex-wrap">
                  <a 
                    href="#demo-form"
                    className="btn btn-lg px-5 py-3 fw-bold"
                    style={{
                      background: product.gradient,
                      border: "none",
                      borderRadius: "12px"
                    }}
                  >
                    Request Demo
                  </a>
                  <button
                    className="btn btn-lg btn-outline-light px-5 py-3 fw-bold d-flex align-items-center gap-2"
                    style={{ borderRadius: "12px" }}
                    onClick={() => setShowVideoModal(true)}
                  >
                    <FaPlay /> Watch Video
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-5">
        <div className="container">
          <motion.div
            className="text-center mb-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="display-5 fw-bold mb-3">Powerful Features</h2>
            <p className="lead text-muted">{product.detailedDesc}</p>
          </motion.div>

          <div className="row g-4">
            {product.features.map((feature, idx) => (
              <motion.div 
                className="col-md-6 col-lg-4" 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <div className="card border-0 shadow-sm h-100 rounded-4 p-4">
                  <div 
                    className="d-inline-flex align-items-center justify-content-center rounded-circle mb-3"
                    style={{
                      width: "60px",
                      height: "60px",
                      background: `${product.color}20`,
                      fontSize: "2rem"
                    }}
                  >
                    {feature.icon}
                  </div>
                  <h5 className="fw-bold mb-2">{feature.title}</h5>
                  <p className="text-muted mb-0">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <motion.div
            className="text-center mb-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="display-5 fw-bold mb-3">Choose Your Plan</h2>
            <p className="lead text-muted">Flexible pricing for businesses of all sizes</p>
          </motion.div>

          <div className="row g-4 justify-content-center">
            {product.pricing.map((plan, idx) => (
              <motion.div 
                className="col-lg-4" 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <div 
                  className={`card border-0 h-100 rounded-4 overflow-hidden ${
                    plan.popular ? 'shadow-lg' : 'shadow-sm'
                  }`}
                  style={{
                    transform: plan.popular ? 'scale(1.05)' : 'scale(1)',
                    position: 'relative'
                  }}
                >
                  {plan.popular && (
                    <div 
                      className="position-absolute top-0 start-0 w-100 text-center py-2 text-white fw-bold"
                      style={{ background: product.gradient }}
                    >
                      MOST POPULAR
                    </div>
                  )}
                  <div className={`card-body p-4 ${plan.popular ? 'pt-5' : ''}`}>
                    <h4 className="fw-bold mb-2">{plan.name}</h4>
                    <p className="text-muted small mb-3">{plan.description}</p>
                    <div className="mb-4">
                      <h2 className="display-4 fw-bold mb-0" style={{ color: product.color }}>
                        {plan.price}
                      </h2>
                      <span className="text-muted">{plan.period}</span>
                    </div>
                    <ul className="list-unstyled mb-4">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="d-flex align-items-center gap-2 mb-2">
                          <FaCheckCircle style={{ color: product.color }} />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <button
                      className="btn btn-lg w-100 fw-bold"
                      style={{
                        background: plan.popular ? product.gradient : 'white',
                        color: plan.popular ? 'white' : product.color,
                        border: plan.popular ? 'none' : `2px solid ${product.color}`,
                        borderRadius: "10px"
                      }}
                      onClick={() => {
                        setSelectedPlan(plan.name.toLowerCase());
                        document.getElementById('demo-form').scrollIntoView({ behavior: 'smooth' });
                      }}
                    >
                      Get Started
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      {product.testimonials && product.testimonials.length > 0 && (
        <section className="py-5">
          <div className="container">
            <h2 className="fw-bold text-center mb-5">What Our Customers Say</h2>
            <div className="row g-4 justify-content-center">
              {product.testimonials.map((testimonial, idx) => (
                <motion.div 
                  className="col-md-6 col-lg-4" 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <div className="card border-0 shadow-sm rounded-4 h-100 p-4">
                    <div className="d-flex gap-1 mb-3">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <FaStar key={i} style={{ color: "#fbbf24" }} />
                      ))}
                    </div>
                    <FaQuoteLeft style={{ fontSize: "2rem", color: product.color, opacity: 0.3 }} />
                    <p className="my-3">{testimonial.text}</p>
                    <div className="d-flex align-items-center gap-3 mt-auto">
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

      {/* Demo Form */}
      <section className="py-5 bg-light" id="demo-form">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="text-center mb-4">
                  <h2 className="fw-bold mb-3">Request a Demo</h2>
                  <p className="text-muted">See {product.name} in action. Schedule your personalized demo today.</p>
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
                        style={{ borderRadius: "10px" }}
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
                        style={{ borderRadius: "10px" }}
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label fw-semibold">Company</label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="form-control form-control-lg"
                        style={{ borderRadius: "10px" }}
                      />
                    </div>
                    <div className="mb-4">
                      <label className="form-label fw-semibold">Phone</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="form-control form-control-lg"
                        style={{ borderRadius: "10px" }}
                      />
                    </div>
                    <button
                      type="submit"
                      className="btn btn-lg w-100 text-white fw-bold"
                      disabled={loading}
                      style={{
                        background: product.gradient,
                        borderRadius: "10px"
                      }}
                    >
                      {loading ? "Sending..." : "Request Demo"}
                    </button>
                  </form>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {showVideoModal && (
        <div
          className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
          style={{ background: "rgba(0,0,0,0.9)", zIndex: 9999 }}
          onClick={() => setShowVideoModal(false)}
        >
          <div className="position-relative" style={{ maxWidth: "90%", maxHeight: "90%" }}>
            <button
              className="btn-close btn-close-white position-absolute"
              style={{ top: "-40px", right: "0" }}
              onClick={() => setShowVideoModal(false)}
            />
            <iframe
              width="100%"
              height="600"
              src={product.videoUrl}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductDetails;