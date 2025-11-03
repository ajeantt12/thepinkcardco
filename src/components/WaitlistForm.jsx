import React from 'react'
import { ArrowRight, Check } from 'lucide-react'
import useWaitlist from '../hooks/useWaitlist'

export default function WaitlistForm() {
  const { email, setEmail, submitted, submit, error } = useWaitlist()

  return (
    <form onSubmit={submit} className="max-w-md mx-auto mb-16">
      <div className="flex flex-col sm:flex-row gap-4 group">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
          className="flex-1 px-6 py-4 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 focus:outline-none focus:border-purple-400 transition-all duration-300 placeholder-gray-400"
        />
        <button
          type="submit"
          className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full font-semibold hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 transform group-hover:scale-105 flex items-center justify-center space-x-2 whitespace-nowrap"
        >
          <span>{submitted ? "You're In!" : 'Join Waitlist'}</span>
          {submitted ? (
            <Check className="w-5 h-5" />
          ) : (
            <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
          )}
        </button>
      </div>
      {error && <p className="mt-3 text-red-300">{error}</p>}
      {submitted && (
        <p className="mt-4 text-green-400 animate-pulse">Welcome aboard! We'll be in touch soon.</p>
      )}
    </form>
  )
}
