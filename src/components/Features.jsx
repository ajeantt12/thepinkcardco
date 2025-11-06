import React from 'react'
import { Sparkles, Ticket, TrendingUp } from 'lucide-react'

const features = [
  {
    icon: Sparkles,
    title: 'Instant Empowerment',
    copy:
      'Get approved in seconds. Our AI-powered system lets women lend or borrow instantly — no paperwork, no waiting, just access when it matters most.',
    gradient: 'from-[#ff9cf7] via-[#ff73ba] to-[#f653d9]'
  },
  {
    icon: TrendingUp,
    title: 'Smart Returns',
    copy:
      'Earn more with every move. Lend to verified borrowers and earn higher returns, while PinkPoints reward your spending and grow with your lifestyle.',
    gradient: 'from-[#7ff0ff] via-[#5bddff] to-[#5290ff]'
  },
  {
    icon: Ticket,
    title: 'Exclusive Access',
    copy:
      'Go beyond banking. Unlock curated events, luxury perks, and a private community where every member belongs — and every experience feels personal.',
    gradient: 'from-[#cbb7ff] via-[#9f76ff] to-[#704bff]'
  }
]

export default function Features() {
  return (
    <section className="container mx-auto px-6 py-20">
      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {features.map(({ title, copy, icon: Icon, gradient }) => (
          <div key={title} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105">
            <div className={`w-14 h-14 bg-gradient-to-br ${gradient} rounded-xl flex items-center justify-center mb-6`}>
              <Icon className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold mb-4">{title}</h3>
            <p className="text-gray-300">{copy}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
