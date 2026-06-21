import { useEffect } from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import {
  LayoutDashboard,
  BookOpen,
  BrainCircuit,
  Trophy,
  User,
  LogOut,
} from 'lucide-react';
import { useTeacher } from '../hooks/useTeacher';
import SchoolLogo from './SchoolLogo';
import './Layout.css';

const navItems = [
  { to: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { to: '/lessons/intro', label: 'Lessons', icon: BookOpen },
  { to: '/quiz', label: 'Quiz', icon: BrainCircuit },
  { to: '/leaderboard', label: 'Leaderboard', icon: Trophy },
];

export default function Layout() {
  const { teacher, isRegistered, loading, logout } = useTeacher();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  useEffect(() => {
    if (!loading && !isRegistered) {
      navigate('/');
    }
  }, [loading, isRegistered, navigate]);

  if (loading || !isRegistered) {
    return (
      <div className="loading">
        <div className="loading-spinner" />
        Loading...
      </div>
    );
  }

  return (
    <div className="layout">
      <header className="header">
        <div className="header-brand">
          <SchoolLogo variant="header" />
          <div>
            <h1 className="header-title">Toddle MYP Training</h1>
            <p className="header-sub">
              <User size={14} />
              {teacher.name} · {teacher.department}
            </p>
          </div>
        </div>
        <div className="header-actions">
          <nav className="nav">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                >
                  <Icon size={18} />
                  <span>{item.label}</span>
                </NavLink>
              );
            })}
          </nav>
          <button
            type="button"
            className="header-logout"
            onClick={handleLogout}
            title="Log out"
          >
            <LogOut size={18} />
            <span>Log out</span>
          </button>
        </div>
      </header>
      <main className="main">
        <Outlet />
      </main>
    </div>
  );
}
