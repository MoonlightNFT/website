import React from 'react'
import { FaMoon } from 'react-icons/fa'

export default function Header() {
  return (
    <nav className="fixed w-screen py-3 px-5 bg-ml-purple text-white shadow-xl">
      <section className="w-full flex items-center text-2xl">
        <FaMoon />
        <div className="pl-4 font-semibold tracking-wider">moonlight</div>
      </section>
    </nav>
  )
}
