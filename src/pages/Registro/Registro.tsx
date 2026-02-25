import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { useTranslation } from 'react-i18next';
import type { UserRole } from '../../lib/supabase';
import './Registro.css';

export default function Registro() {
    const { t } = useTranslation();
    const { signUp } = useAuth();
    const navigate = useNavigate();

    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [role, setRole] = useState<UserRole | ''>('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        if (!role) { setError(t('auth.selectRole')); return; }
        if (password !== confirmPassword) { setError(t('auth.passwordMismatch')); return; }
        if (password.length < 6) { setError(t('auth.passwordTooShort')); return; }

        setLoading(true);
        const { error } = await signUp(email, password, role as UserRole, fullName);
        setLoading(false);

        if (error) {
            setError(error.message);
        } else {
            setSuccess(true);
            setTimeout(() => navigate('/login'), 3000);
        }
    };

    if (success) {
        return (
            <div className="auth-page">
                <div className="auth-card auth-card--success">
                    <div className="auth-success-icon">✓</div>
                    <h2>{t('auth.registrationSuccess')}</h2>
                    <p>{t('auth.checkEmail')}</p>
                </div>
            </div>
        );
    }

    return (
        <div className="auth-page">
            <div className="auth-card">

                <h1 className="auth-title">{t('auth.registerTitle')}</h1>
                <p className="auth-subtitle">{t('auth.registerSubtitle')}</p>

                {/* Selector de rol */}
                <div className="role-selector">
                    <button
                        type="button"
                        className={`role-card ${role === 'agencia' ? 'role-card--active' : ''}`}
                        onClick={() => setRole('agencia')}
                    >
                        <span className="role-icon">🏢</span>
                        <span className="role-label">{t('auth.roleAgencia')}</span>
                        <span className="role-desc">{t('auth.roleAgenciaDesc')}</span>
                    </button>
                    <button
                        type="button"
                        className={`role-card ${role === 'jurado' ? 'role-card--active' : ''}`}
                        onClick={() => setRole('jurado')}
                    >
                        <span className="role-icon">⭐</span>
                        <span className="role-label">{t('auth.roleJurado')}</span>
                        <span className="role-desc">{t('auth.roleJuradoDesc')}</span>
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="auth-form">
                    <div className="auth-field">
                        <label htmlFor="fullName">{t('auth.fullName')}</label>
                        <input
                            id="fullName"
                            type="text"
                            value={fullName}
                            onChange={e => setFullName(e.target.value)}
                            placeholder={t('auth.fullNamePlaceholder')}
                            required
                        />
                    </div>

                    <div className="auth-field">
                        <label htmlFor="email">{t('auth.email')}</label>
                        <input
                            id="email"
                            type="email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            placeholder={t('auth.emailPlaceholder')}
                            required
                        />
                    </div>

                    <div className="auth-field">
                        <label htmlFor="password">{t('auth.password')}</label>
                        <input
                            id="password"
                            type="password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            placeholder={t('auth.passwordPlaceholder')}
                            required
                        />
                    </div>

                    <div className="auth-field">
                        <label htmlFor="confirmPassword">{t('auth.confirmPassword')}</label>
                        <input
                            id="confirmPassword"
                            type="password"
                            value={confirmPassword}
                            onChange={e => setConfirmPassword(e.target.value)}
                            placeholder={t('auth.confirmPasswordPlaceholder')}
                            required
                        />
                    </div>

                    {error && <p className="auth-error">{error}</p>}

                    <button type="submit" className="auth-btn-primary" disabled={loading || !role}>
                        {loading ? t('auth.registering') : t('auth.createAccount')}
                    </button>
                </form>

                <p className="auth-footer">
                    {t('auth.haveAccount')}{' '}
                    <Link to="/login" className="auth-link">{t('auth.login')}</Link>
                </p>
            </div>
        </div>
    );
}
