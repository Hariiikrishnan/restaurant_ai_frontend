import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { signInWithPopup } from 'firebase/auth'
import { doc, getDoc } from 'firebase/firestore'
import { toast } from 'sonner'
import { auth, db, googleProvider } from '../firebase/firebase'
import Button from '../components/ui/button'
import Input from '../components/ui/input'
import { useAuth } from '../contexts/AuthContext'

export default function LoginPage() {
  const navigate = useNavigate()
  const { signIn } = useAuth()
  const [form, setForm] = useState({ email: '', password: '' })
  const [loading, setLoading] = useState(false)

  const handleEmailLogin = async (event) => {
    event.preventDefault()
    setLoading(true)
    try {
      const credential = await signIn(form.email, form.password)
      const profileRef = doc(db, 'users', credential.user.uid)
      const snapshot = await getDoc(profileRef)
      const role = snapshot.data()?.role || 'outlet'
      navigate(role === 'admin' ? '/admin-dashboard' : '/outlet-dashboard')
    } catch (error) {
      toast.error(error.message)
    } finally {
      setLoading(false)
    }
  }

  const handleGoogleLogin = async () => {
    setLoading(true)
    try {
      const credential = await signInWithPopup(auth, googleProvider)
      const profileRef = doc(db, 'users', credential.user.uid)
      const snapshot = await getDoc(profileRef)
      const role = snapshot.data()?.role || 'outlet'
      navigate(role === 'admin' ? '/admin-dashboard' : '/outlet-dashboard')
    } catch (error) {
      toast.error(error.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center px-6">
      <div className="glass-panel w-full max-w-md rounded-3xl p-8">
        <h1 className="text-2xl font-semibold text-slatey-900">Welcome back</h1>
        <p className="mt-2 text-sm text-slatey-500">Sign in to continue managing your review automation.</p>
        <form onSubmit={handleEmailLogin} className="mt-6 space-y-4">
          <Input
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={(event) => setForm({ ...form, email: event.target.value })}
            required
          />
          <Input
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={(event) => setForm({ ...form, password: event.target.value })}
            required
          />
          <div className="flex items-center justify-between text-xs text-slatey-500">
            <Link to="/register" className="hover:text-brand-600">
              Need an account?
            </Link>
            <button type="button" className="hover:text-brand-600">
              Forgot password
            </button>
          </div>
          <Button type="submit" size="lg" className="w-full" disabled={loading}>
            {loading ? 'Signing in...' : 'Login'}
          </Button>
        </form>
        <div className="mt-6 text-center text-xs uppercase tracking-[0.2em] text-slatey-400">or</div>
        <Button variant="outline" className="mt-4 w-full" onClick={handleGoogleLogin} disabled={loading}>
          Continue with Google
        </Button>
      </div>
    </div>
  )
}
