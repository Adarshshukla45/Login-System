import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import styles from './Home.module.css';

const Home = () => {
  const { user } = useAuth();

  return (
    <div className={styles.page}>
      <div className={styles.blob} />
      <div className={styles.content}>
        <span className={styles.badge}>MERN Stack Auth</span>
        <h1 className={styles.title}>
          Full-Stack Auth<br />
          <span className={styles.gradient}>Done Right.</span>
        </h1>
        <p className={styles.desc}>
          Register, Login, and Logout with JWT authentication.
          Built with MongoDB, Express, React, and Node.js.
        </p>
        <div className={styles.ctas}>
          {user ? (
            <Link to="/dashboard" className={styles.primary}>Go to Dashboard →</Link>
          ) : (
            <>
              <Link to="/register" className={styles.primary}>Get Started →</Link>
              <Link to="/login" className={styles.secondary}>Sign In</Link>
            </>
          )}
        </div>

        <div className={styles.stack}>
          {['MongoDB', 'Express.js', 'React', 'Node.js', 'JWT', 'bcryptjs'].map(t => (
            <span key={t} className={styles.tag}>{t}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
