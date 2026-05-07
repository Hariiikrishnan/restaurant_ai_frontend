import { Navigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import FullScreenLoader from '../components/feedback/FullScreenLoader'

export default function ProtectedRoute({ allowedRoles, children }) {
  const { user, profile, loading } = useAuth()

  if (loading) {
    return <FullScreenLoader />
  }

  if (!user) {
    return <Navigate to="/login" replace />
  }

  if (allowedRoles && profile && !allowedRoles.includes(profile.role)) {
    return <Navigate to="/login" replace />
  }

  return children
}
