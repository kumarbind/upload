import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Swal from 'sweetalert2';
import { apiPost } from '../../utils/api';
import { FaEnvelope, FaLock, FaEye, FaEyeSlash, FaUser, FaRocket } from 'react-icons/fa';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const payload = { email, password };
      const data = await apiPost('main/login', payload);
      console.log("API response:", data);

      Swal.fire({
        title: 'Welcome Back!',
        text: 'Login successful. Redirecting to dashboard...',
        icon: 'success',
        timer: 2000,
        showConfirmButton: false
      });

      // Save token
      localStorage.setItem('token', data.token);

      // Redirect after animation
      setTimeout(() => {
        navigate('/main/admin/dashboard');
      }, 2000);

    } catch (err) {
      console.error("Login error:", err);

      Swal.fire({
        title: 'Login Failed',
        text: err?.message || 'Invalid email or password',
        icon: 'error',
        confirmButtonText: 'Try Again',
        confirmButtonColor: '#667eea'
      });

      setError("Invalid email or password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div 
      className="min-vh-100 d-flex align-items-center justify-content-center p-3"
      style={{
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        position: "relative",
        overflow: "hidden"
      }}
    >
      {/* Animated Background Orbs */}
      <motion.div
        className="position-absolute rounded-circle"
        style={{
          width: "500px",
          height: "500px",
          background: "radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%)",
          top: "-10%",
          right: "-5%",
          filter: "blur(60px)"
        }}
        animate={{
          y: [0, 50, 0],
          scale: [1, 1.2, 1],
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
          background: "radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%)",
          bottom: "-5%",
          left: "-5%",
          filter: "blur(60px)"
        }}
        animate={{
          y: [0, -50, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-10 col-lg-8 col-xl-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Login Card */}
              <div 
                className="rounded-4 shadow-lg overflow-hidden"
                style={{
                  background: "rgba(255, 255, 255, 0.98)",
                  backdropFilter: "blur(20px)"
                }}
              >
                <div className="row g-0">
                  {/* Left Side - Branding */}
                  <div 
                    className="col-md-5 d-none d-md-flex flex-column justify-content-center align-items-center text-white p-5"
                    style={{
                      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
                    }}
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                    >
                      <div 
                        className="rounded-circle d-flex align-items-center justify-content-center mb-4"
                        style={{
                          width: "100px",
                          height: "100px",
                          background: "rgba(255, 255, 255, 0.2)",
                          backdropFilter: "blur(10px)"
                        }}
                      >
                        <FaRocket size={50} />
                      </div>
                    </motion.div>
                    
                    <h3 className="fw-bold mb-3 text-center">Welcome Back!</h3>
                    <p className="text-center" style={{ opacity: 0.9 }}>
                      Login to access your dashboard and manage your projects
                    </p>

                    <div className="mt-4">
                      <motion.div 
                        className="d-flex align-items-center gap-2 mb-3"
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.5 }}
                      >
                        <div 
                          className="rounded-circle d-flex align-items-center justify-content-center"
                          style={{
                            width: "30px",
                            height: "30px",
                            background: "rgba(255, 255, 255, 0.2)"
                          }}
                        >
                          ✓
                        </div>
                        <span>Secure Authentication</span>
                      </motion.div>
                      <motion.div 
                        className="d-flex align-items-center gap-2 mb-3"
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.6 }}
                      >
                        <div 
                          className="rounded-circle d-flex align-items-center justify-content-center"
                          style={{
                            width: "30px",
                            height: "30px",
                            background: "rgba(255, 255, 255, 0.2)"
                          }}
                        >
                          ✓
                        </div>
                        <span>Easy Access</span>
                      </motion.div>
                      <motion.div 
                        className="d-flex align-items-center gap-2"
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.7 }}
                      >
                        <div 
                          className="rounded-circle d-flex align-items-center justify-content-center"
                          style={{
                            width: "30px",
                            height: "30px",
                            background: "rgba(255, 255, 255, 0.2)"
                          }}
                        >
                          ✓
                        </div>
                        <span>24/7 Support</span>
                      </motion.div>
                    </div>
                  </div>

                  {/* Right Side - Login Form */}
                  <div className="col-md-7 p-5">
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3 }}
                    >
                      {/* Header */}
                      <div className="text-center mb-4">
                        <motion.div
                          className="d-inline-flex align-items-center justify-content-center rounded-circle mb-3 d-md-none"
                          style={{
                            width: "70px",
                            height: "70px",
                            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
                          }}
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.6 }}
                        >
                          <FaUser size={30} color="white" />
                        </motion.div>
                        <h3 className="fw-bold mb-2">Sign In</h3>
                        <p className="text-muted">Enter your credentials to continue</p>
                      </div>

                      {/* Error Alert */}
                      <AnimatePresence>
                        {error && (
                          <motion.div
                            className="alert alert-danger d-flex align-items-center gap-2 rounded-3"
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            style={{ border: "none", background: "#fee2e2", color: "#dc2626" }}
                          >
                            <span>⚠️</span>
                            <span>{error}</span>
                          </motion.div>
                        )}
                      </AnimatePresence>

                      {/* Login Form */}
                      <form onSubmit={handleLogin}>
                        {/* Email Input */}
                        <div className="mb-4">
                          <label className="form-label fw-semibold text-dark">Email Address</label>
                          <div className="position-relative">
                            <span 
                              className="position-absolute d-flex align-items-center justify-content-center"
                              style={{
                                left: "15px",
                                top: "50%",
                                transform: "translateY(-50%)",
                                color: "#9ca3af"
                              }}
                            >
                              <FaEnvelope />
                            </span>
                            <motion.input
                              type="email"
                              className="form-control form-control-lg"
                              placeholder="your@email.com"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              required
                              style={{
                                paddingLeft: "45px",
                                borderRadius: "12px",
                                border: "2px solid #e5e7eb",
                                transition: "all 0.3s ease"
                              }}
                              whileFocus={{ 
                                borderColor: "#667eea",
                                boxShadow: "0 0 0 4px rgba(102, 126, 234, 0.1)"
                              }}
                            />
                          </div>
                        </div>

                        {/* Password Input */}
                        <div className="mb-4">
                          <label className="form-label fw-semibold text-dark">Password</label>
                          <div className="position-relative">
                            <span 
                              className="position-absolute d-flex align-items-center justify-content-center"
                              style={{
                                left: "15px",
                                top: "50%",
                                transform: "translateY(-50%)",
                                color: "#9ca3af"
                              }}
                            >
                              <FaLock />
                            </span>
                            <motion.input
                              type={showPassword ? "text" : "password"}
                              className="form-control form-control-lg"
                              placeholder="Enter your password"
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                              required
                              style={{
                                paddingLeft: "45px",
                                paddingRight: "45px",
                                borderRadius: "12px",
                                border: "2px solid #e5e7eb",
                                transition: "all 0.3s ease"
                              }}
                              whileFocus={{ 
                                borderColor: "#667eea",
                                boxShadow: "0 0 0 4px rgba(102, 126, 234, 0.1)"
                              }}
                            />
                            <motion.button
                              type="button"
                              className="position-absolute border-0 bg-transparent"
                              style={{
                                right: "15px",
                                top: "50%",
                                transform: "translateY(-50%)",
                                color: "#9ca3af"
                              }}
                              onClick={() => setShowPassword(!showPassword)}
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                            >
                              {showPassword ? <FaEyeSlash /> : <FaEye />}
                            </motion.button>
                          </div>
                        </div>

                        {/* Remember & Forgot */}
                        <div className="d-flex justify-content-between align-items-center mb-4">
                          <div className="form-check">
                            <input 
                              type="checkbox" 
                              className="form-check-input" 
                              id="rememberMe"
                              style={{ cursor: "pointer" }}
                            />
                            <label className="form-check-label" htmlFor="rememberMe" style={{ cursor: "pointer" }}>
                              Remember me
                            </label>
                          </div>
                          <a 
                            href="/forgot-password" 
                            className="text-decoration-none"
                            style={{ 
                              color: "#667eea",
                              fontWeight: "600"
                            }}
                          >
                            Forgot Password?
                          </a>
                        </div>

                        {/* Submit Button */}
                        <motion.button
                          type="submit"
                          className="btn btn-lg w-100 text-white fw-bold mb-3"
                          disabled={loading}
                          style={{
                            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                            border: "none",
                            borderRadius: "12px",
                            padding: "14px",
                            boxShadow: "0 4px 15px rgba(102, 126, 234, 0.4)"
                          }}
                          whileHover={{ 
                            scale: 1.02,
                            boxShadow: "0 6px 20px rgba(102, 126, 234, 0.5)"
                          }}
                          whileTap={{ scale: 0.98 }}
                        >
                          {loading ? (
                            <span className="d-flex align-items-center justify-content-center gap-2">
                              <span className="spinner-border spinner-border-sm" role="status"></span>
                              <span>Logging in...</span>
                            </span>
                          ) : (
                            "Sign In"
                          )}
                        </motion.button>

                        {/* Sign Up Link */}
                        <div className="text-center">
                          <span className="text-muted">Don't have an account? </span>
                          <a 
                            href="/register" 
                            className="text-decoration-none fw-semibold"
                            style={{ color: "#667eea" }}
                          >
                            Sign Up
                          </a>
                        </div>
                      </form>
                    </motion.div>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <motion.div 
                className="text-center mt-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                <p className="text-white small mb-0">
                  © 2024 WebDevCreators. All rights reserved.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;