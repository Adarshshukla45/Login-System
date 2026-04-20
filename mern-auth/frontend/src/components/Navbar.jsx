import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import toast from 'react-hot-toast';
import styles from './Navbar.module.css';

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    toast.success('Logged out!');
    navigate('/login');
  };

  return (
    <nav className={styles.nav}>
      <Link to="/" className={styles.logo}>⬡ AuthApp</Link>
      <div className={styles.links}>
        {user ? (
          <>
            <span className={styles.greeting}>Hello, {user.name.split(' ')[0]}</span>
            <Link to="/dashboard" className={styles.link}>Dashboard</Link>
            <button onClick={handleLogout} className={styles.logoutBtn}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/login" className={styles.link}>Login</Link>
            <Link to="/register" className={styles.linkBtn}>Get Started</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
