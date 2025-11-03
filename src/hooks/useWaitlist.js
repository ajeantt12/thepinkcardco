import { useState, useCallback } from 'react'
import { validateEmail } from '../utils/validateEmail'

export default function useWaitlist() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const submit = useCallback(async (e) => {
    e?.preventDefault?.()
    setError('')
    if (!validateEmail(email)) {
      setError('Please enter a valid email')
      return
    }
    setSubmitted(true)
    await new Promise(r => setTimeout(r, 800))
    setEmail('')
    setTimeout(() => setSubmitted(false), 2200)
  }, [email])

  return { email, setEmail, submitted, submit, error }
}
