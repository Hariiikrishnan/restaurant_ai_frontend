import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { doc, serverTimestamp, setDoc } from 'firebase/firestore'
import { toast } from 'sonner'
import { auth, db } from '../firebase/firebase'
import Button from '../components/ui/button'
import Input from '../components/ui/input'

export default function RegisterPage() {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({
    name: '',
    businessName: '',
    email: '',
    password: '',
    businessType: ''
  })

  const handleRegister = async (event) => {
    event.preventDefault()
    setLoading(true)
    try {
      const credential = await createUserWithEmailAndPassword(auth, form.email, form.password)
      await updateProfile(credential.user, { displayName: form.name })

      await setDoc(doc(db, 'users', credential.user.uid), {
        name: form.name,
        email: form.email,
        businessName: form.businessName,
        businessType: form.businessType,
        role: 'outlet',
        createdAt: serverTimestamp()
      })

      toast.success('Account created! Redirecting to your dashboard.')
      navigate('/outlet-dashboard')
    } catch (error) {
      toast.error(error.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center px-6">
      <div className="glass-panel w-full max-w-lg rounded-3xl p-8">
        <h1 className="text-2xl font-semibold text-slatey-900">Create your workspace</h1>
        <p className="mt-2 text-sm text-slatey-500">Set up your outlet profile to start automating reviews.</p>
        <form onSubmit={handleRegister} className="mt-6 grid gap-4">
          <Input
            placeholder="Full name"
            value={form.name}
            onChange={(event) => setForm({ ...form, name: event.target.value })}
            required
          />
          <Input
            placeholder="Business name"
            value={form.businessName}
            onChange={(event) => setForm({ ...form, businessName: event.target.value })}
            required
          />
          <Input
            placeholder="Business type"
            value={form.businessType}
            onChange={(event) => setForm({ ...form, businessType: event.target.value })}
            required
          />
          <Input
            type="email"
            placeholder="Work email"
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
          <Button type="submit" size="lg" disabled={loading}>
            {loading ? 'Creating account...' : 'Create account'}
          </Button>
        </form>
        <p className="mt-6 text-center text-xs text-slatey-500">
          Already have an account?{' '}
          <Link to="/login" className="font-semibold text-brand-600">
            Login
          </Link>
        </p>
      </div>
    </div>
  )
}
