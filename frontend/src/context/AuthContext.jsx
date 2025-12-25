import { createContext, useContext, useEffect, useState } from "react";
import { apiGet } from "../utils/api";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {  
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchUser = async () => {
    try {
      const res = await apiGet("main/me");
      console.log('res', res);
      setUser(res);
    } catch {
      setUser(null);
      localStorage.removeItem("token");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      fetchUser();
    } else {
      setLoading(false);
      // console.log('jj');
      // window.location.replace("/admin/login");
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);