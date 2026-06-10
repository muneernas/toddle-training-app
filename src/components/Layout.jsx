import { useEffect } from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import {
  LayoutDashboard,
  BookOpen,
  ImageUp,
  BrainCircuit,
  Trophy,
  User,
} from 'lucide-react';
import { useTeacher } from '../hooks/useTeacher';
import SchoolLogo from './SchoolLogo';
import './Layout.css';

const navItems = [
  { to: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { to: '/lessons/intro', label: 'Lessons', icon: BookOpen },
  { to: '/uploads', label: 'Uploads', icon: ImageUp },
  { to: '/quiz', label: 'Quiz', icon: BrainCircuit },
  { to: '/leaderboard', label: 'Leaderboard', icon: Trophy },
];

export default function Layout() {
  const { teacher, isRegistered, loading } = useTeacher();
  const navigate = useNavigate();

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
      </header>
      <main className="main">
        <Outlet />
      </main>
    </div>
  );
}
