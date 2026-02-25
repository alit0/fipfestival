import { Navigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import type { UserRole } from '../../lib/supabase';

interface ProtectedRouteProps {
    children: React.ReactNode;
    requiredRole?: UserRole;
}

export default function ProtectedRoute({ children, requiredRole }: ProtectedRouteProps) {
    const { user, profile, loading } = useAuth();

    if (loading) {
        return <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem' }}>Cargando...</div>
        </div>;
    }

    if (!user) return <Navigate to="/login" replace />;
    if (requiredRole && profile?.role !== requiredRole) return <Navigate to="/" replace />;

    return <>{children}</>;
}
