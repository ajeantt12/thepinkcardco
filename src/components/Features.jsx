import React from 'react'
import { Zap, Shield, TrendingUp } from 'lucide-react'

const features = [
  {
    title: 'Instant Approval',
    copy: 'Get approved in seconds, not days. Our AI-powered system makes decisions instantly.',
    icon: Zap,
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    title: 'Zero Hidden Fees',
    copy: 'Transparent pricing. No annual fees, no foreign transaction fees, no surprises.',
    icon: Shield,
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    title: 'Smart Rewards',
    copy: 'Earn 5% cashback on what you actually spend on. Rewards that adapt to your life.',
    icon: TrendingUp,
    gradient: 'from-green-500 to-emerald-500'
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
