import React from 'react'
import { CreditCard } from 'lucide-react'

export default function CardMockup() {
  return (
    <div className="relative max-w-sm mx-auto perspective-1000 mb-16">
      <div className="relative transform transition-transform duration-500 ease-out hover:rotate-y-12">
        <div className="bg-gradient-to-br from-purple-600 via-pink-500 to-purple-700 rounded-2xl p-8 shadow-2xl backdrop-blur-sm border border-white/20 aspect-video flex flex-col justify-between">
          <div className="flex justify-between items-start">
            <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg"></div>
            <CreditCard className="w-10 h-10 text-white/80" />
          </div>
          <div>
            <div className="text-2xl font-mono mb-2 tracking-wider">•••• 4321</div>
            <div className="text-sm text-white/80">EARLY ADOPTER</div>
          </div>
        </div>
      </div>
    </div>
  )
}
