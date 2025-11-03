import React from 'react'

export default function Footer() {
  return (
    <footer className="relative z-10 container mx-auto px-6 py-12 border-t border-white/10">
      <div className="text-center text-gray-400">
        <p className="mb-4">© 2024 NeoCard. All rights reserved.</p>
        <div className="flex justify-center space-x-6 text-sm">
          <a href="#" className="hover:text-white transition-colors">Privacy</a>
          <a href="#" className="hover:text-white transition-colors">Terms</a>
          <a href="#" className="hover:text-white transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  )
}
