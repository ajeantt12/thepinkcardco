import React from 'react'
import { CreditCard } from 'lucide-react'

export default function Navbar() {
  return (
    <nav className="relative z-10 container mx-auto px-6 py-6 flex justify-between items-center">
      <div className="flex items-center space-x-2">
        <CreditCard className="w-8 h-8 text-purple-400" />
        <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">thepinkcardco</span>
      </div>
      <button className="hidden md:block px-6 py-2 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300 border border-white/20">
        Sign In
      </button>
    </nav>
  )
}
