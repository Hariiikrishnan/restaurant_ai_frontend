import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { doc, getDoc, setDoc, serverTimestamp } from 'firebase/firestore'
import { auth, db } from '../firebase/firebase'

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [profile, setProfile] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser)
      if (currentUser) {
        const profileRef = doc(db, 'users', currentUser.uid)
        const snapshot = await getDoc(profileRef)
        if (snapshot.exists()) {
          setProfile({ id: snapshot.id, ...snapshot.data() })
        } else {
          const fallbackProfile = {
            name: currentUser.displayName || 'New User',
            role: 'outlet',
            createdAt: serverTimestamp()
          }
          await setDoc(profileRef, fallbackProfile, { merge: true })
          setProfile({ id: currentUser.uid, ...fallbackProfile })
        }
      } else {
        setProfile(null)
      }
      setLoading(false)
    })

    return () => unsubscribe()
  }, [])

  const value = useMemo(
    () => ({
      user,
      profile,
      loading,
      signIn: (email, password) => signInWithEmailAndPassword(auth, email, password),
      signOut: () => signOut(auth)
    }),
    [user, profile, loading]
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  return useContext(AuthContext)
}
