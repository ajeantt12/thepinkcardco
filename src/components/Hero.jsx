import React from 'react'
import { Sparkles } from 'lucide-react'
import WaitlistForm from './WaitlistForm'
import CardMockup from './CardMockup'

export default function Hero() {
  return (
    <section className="container mx-auto px-6 pt-12 md:pt-20 pb-20 text-center">
      <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-8 border border-white/20">
        <Sparkles className="w-4 h-4 text-yellow-400" />
        <span className="text-sm">Launching Soon • Join 1,000+ on the waitlist</span>
      </div>

      <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
        The Credit Card
        <br />
        <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
          Reimagined for Her
        </span>
      </h1>

      <p className="text-lg md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto">
        Created for those who expect more. Instant approvals, smart rewards, and exclusive experiences that matter.
      </p>

      <WaitlistForm />
      <CardMockup />
    </section>
  )
}
