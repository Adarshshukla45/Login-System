import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import toast from 'react-hot-toast';
import styles from './Dashboard.module.css';

const Dashboard = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    toast.success('See you soon!');
    navigate('/login');
  };

  const initials = user?.name
    ? user.name.split(' ').map((n) => n[0]).join('').toUpperCase().slice(0, 2)
    : '?';

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className={styles.hero}>
          <div className={styles.avatar}>{initials}</div>
          <div>
            <h1 className={styles.title}>Hello, {user?.name} 👋</h1>
            <p className={styles.sub}>You're successfully authenticated</p>
          </div>
        </div>

        <div className={styles.grid}>
          <div className={styles.infoCard}>
            <span className={styles.cardLabel}>Full Name</span>
            <span className={styles.cardValue}>{user?.name}</span>
          </div>
          <div className={styles.infoCard}>
            <span className={styles.cardLabel}>Email Address</span>
            <span className={styles.cardValue}>{user?.email}</span>
          </div>
          <div className={styles.infoCard}>
            <span className={styles.cardLabel}>Account ID</span>
            <span className={styles.cardValue} style={{ fontSize: '0.75rem', letterSpacing: '0.5px' }}>
              {user?._id}
            </span>
          </div>
          <div className={styles.infoCard}>
            <span className={styles.cardLabel}>Member Since</span>
            <span className={styles.cardValue}>
              {user?.createdAt
                ? new Date(user.createdAt).toLocaleDateString('en-US', {
                    month: 'long', day: 'numeric', year: 'numeric',
                  })
                : '—'}
            </span>
          </div>
        </div>

        <div className={styles.actions}>
          <div className={styles.tokenBox}>
            <span className={styles.tokenLabel}>✓ JWT Token Active</span>
            <span className={styles.tokenSub}>Stored securely in localStorage</span>
          </div>
          <button onClick={handleLogout} className={styles.logoutBtn}>
            Sign Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
