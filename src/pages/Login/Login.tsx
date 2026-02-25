import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { useTranslation } from 'react-i18next';
import './Login.css';

export default function Login() {
    const { t } = useTranslation();
    const { signIn } = useAuth();
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setLoading(true);
        const { error } = await signIn(email, password);
        setLoading(false);
        if (error) {
            setError(t('auth.invalidCredentials'));
        } else {
            navigate('/');
        }
    };

    return (
        <div className="auth-page">
            <div className="auth-card">

                <h1 className="auth-title">{t('auth.loginTitle')}</h1>
                <p className="auth-subtitle">{t('auth.loginSubtitle')}</p>

                <form onSubmit={handleSubmit} className="auth-form">
                    <div className="auth-field">
                        <label htmlFor="email">{t('auth.email')}</label>
                        <input
                            id="email"
                            type="email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            placeholder={t('auth.emailPlaceholder')}
                            required
                            autoComplete="email"
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
                            autoComplete="current-password"
                        />
                    </div>

                    {error && <p className="auth-error">{error}</p>}

                    <button type="submit" className="auth-btn-primary" disabled={loading}>
                        {loading ? t('auth.loggingIn') : t('auth.login')}
                    </button>
                </form>

                <p className="auth-footer">
                    {t('auth.noAccount')}{' '}
                    <Link to="/registro" className="auth-link">{t('auth.register')}</Link>
                </p>
            </div>
        </div>
    );
}
