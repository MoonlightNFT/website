import React from 'react'
import { FaAt, FaMobileAlt, FaUser } from 'react-icons/fa'
import { Link } from 'react-router-dom'

import bayc2661tp from '../assets/nfts/bayc-2661-tp.png'
import Container from '../components/Container'

export default function SignUp() {
  return (
    <section className="pt-20">
      <div>
        <img src={bayc2661tp} alt="Sign Up" className="m-auto h-40 md:h-48 w-auto" />
      </div>
      <div className="mt-4 text-2xl text-center font-title font-bold uppercase">Join the Club...</div>
      <section className="mt-4 py-10 px-6 flex flex-col gap-y-5 bg-[#F7F9FC] dark:bg-ml-purple-dark rounded-t-3xl">
        <div>
          <div className="pl-2 dark:text-white font-small-title font-light">
            Username
            <span className="ml-1 text-ml-purple">*</span>
          </div>
          <div className="relative w-full mt-1 flex text-sm">
            <div className="absolute top-1/2 -translate-y-1/2 left-3 text-[#150B2A]"><FaUser /></div>
            <input type="text" className="grow py-3 pl-9 pr-3 border border-slate-200 rounded-lg focus:outline-none" placeholder="Username" />
          </div>
        </div>
        <div>
          <div className="pl-2 dark:text-white font-small-title font-light">
            Email
            <span className="ml-1 text-ml-purple">*</span>
          </div>
          <div className="relative w-full mt-1 flex text-sm">
            <div className="absolute top-1/2 -translate-y-1/2 left-3 text-[#150B2A]"><FaAt /></div>
            <input type="text" className="grow py-3 pl-9 pr-3 border border-slate-200 rounded-lg focus:outline-none" placeholder="Email" />
          </div>
        </div>
        <div>
          <div className="pl-2 dark:text-white font-small-title font-light">
            Phone
            <span className="ml-1 text-ml-purple">*</span>
          </div>
          <div className="relative w-full mt-1 flex text-sm">
            <div className="absolute top-1/2 -translate-y-1/2 left-3 text-[#150B2A]"><FaMobileAlt /></div>
            <input type="text" className="grow py-3 pl-9 pr-3 border border-slate-200 rounded-lg focus:outline-none" placeholder="Phone" />
          </div>
        </div>
        <div className="text-center text-sm">
          <div className="pt-3 pb-6">
            <span className="text-ml-purple">Already registered? </span>
            <Link to="/signin" className="dark:text-slate-200">Sign In</Link>
          </div>
          <button type="button" className="w-10/12 py-3 px-10 text-white bg-ml-green hover:bg-green-500 rounded-lg drop-shadow transition">Continue</button>
        </div>
      </section>
    </section>
  )
}
