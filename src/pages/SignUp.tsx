import React from 'react'
import { FaAt, FaMobileAlt, FaUser } from 'react-icons/fa'
import { Link } from 'react-router-dom'

import rocketIcon from '../assets/icons/rocket-dynamic-color.png'
import Container from '../components/Container'

export default function SignUp() {
  return (
    <section className="pt-14">
      <Container className="pt-8">
        <div>
          <img src={rocketIcon} alt="Sign Up" className="h-28 md:h-36 m-auto" />
        </div>
        <div className="mt-4 text-2xl text-ml-purple dark:text-white text-center font-bold uppercase">Join the Club...</div>
        <section className="mt-4 p-6 flex flex-col gap-y-5 bg-ml-purple-black rounded-xl">
          <div>
            <div className="text-white">
              Username
              <span className="ml-1 text-ml-purple">*</span>
            </div>
            <div className="relative w-full mt-1 flex text-sm">
              <div className="absolute top-1/2 -translate-y-1/2 left-3 text-[#150B2A]"><FaUser /></div>
              <input type="text" className="grow py-2 pl-9 pr-3 rounded-md focus:outline-none" placeholder="Username" />
            </div>
          </div>
          <div>
            <div className="text-white">
              Email
              <span className="ml-1 text-ml-purple">*</span>
            </div>
            <div className="relative w-full mt-1 flex text-sm">
              <div className="absolute top-1/2 -translate-y-1/2 left-3 text-[#150B2A]"><FaAt /></div>
              <input type="email" className="grow py-2 pl-9 pr-3 rounded-md focus:outline-none" placeholder="Email" />
            </div>
          </div>
          <div>
            <div className="text-white">
              Phone
              <span className="ml-1 text-ml-purple">*</span>
            </div>
            <div className="relative w-full mt-1 flex text-sm">
              <div className="absolute top-1/2 -translate-y-1/2 left-3 text-[#150B2A]"><FaMobileAlt /></div>
              <input type="tel" className="grow py-2 pl-9 pr-3 rounded-md focus:outline-none" placeholder="Phone" />
            </div>
          </div>
          <div className="text-center text-sm">
            <div className="pt-3 pb-6">
              <span className="text-ml-purple">Already registered? </span>
              <Link to="/signin" className="text-slate-200">Sign In &gt;</Link>
            </div>
            <button type="button" className="w-10/12 py-3 px-10 text-[#150B2A] bg-ml-green hover:bg-green-500 rounded-lg shadow-2xl transition">Continue</button>
          </div>
        </section>
      </Container>
    </section>
  )
}
