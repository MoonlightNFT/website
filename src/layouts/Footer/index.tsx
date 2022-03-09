import React from 'react'
import { FaMoon } from 'react-icons/fa'
import {
  IoChevronDown, IoLogoDiscord, IoLogoFacebook, IoLogoInstagram, IoLogoTwitter,
} from 'react-icons/io5'
import { useLocation, useParams, Link } from 'react-router-dom'

import Container from '../../components/Container'

export default function Footer() {
  const location = useLocation()

  // Skip Footers for certain pages
  if (location.pathname.startsWith('/offering')) {
    // eslint-disable-next-line react/jsx-no-useless-fragment
    return <></>
  }

  return (
    <Container>
      <div className="flex flex-col gap-y-3 pt-8 border-t border-slate-200 dark:border-slate-800 text-xs font-light">
        <Link to="/" className="flex-initial flex items-center text-2xl text-ml-purple dark:text-white">
          <FaMoon />
          <div className="pl-3 font-brand font-bold">moonlight</div>
        </Link>
        <div className="text-[#8F9BB7] text-xs">
          &copy; 2022 Moonlight
        </div>
      </div>
      <div className="py-8 flex flex-col gap-y-3 text-xs">
        <div>Stay up to date</div>
        <div className="flex flex-col gap-y-2 max-w-[280px]">
          <input type="email" className="py-3 px-4 w-full bg-black text-white border-0 rounded-md focus:outline-none placeholder-white" placeholder="Email address" />
          <button type="submit" className="py-3 px-4 w-full bg-white hover:bg-black text-black hover:text-white border border-black text-center rounded-md transition">Subscribe</button>
        </div>
      </div>
      <div className="grid grid-cols-1 divide-y text-sm">
        <div className="py-4 border-t border-slate-200 dark:border-slate-800">
          <div className="flex items-center">
            <div>Company</div>
            <div className="grow text-xl"><IoChevronDown className="ml-auto mr-0 text-slate-500" /></div>
          </div>
          {
            // <div className="text-xs transition">
            //   <div>sdf</div>
            // </div>
          }
        </div>
        <div className="py-4 border-t border-slate-200 dark:border-slate-800">
          <div className="flex items-center">
            <div>Products</div>
            <div className="grow text-xl"><IoChevronDown className="ml-auto mr-0 text-slate-500" /></div>
          </div>
        </div>
        <div className="py-4 border-t border-slate-200 dark:border-slate-800">
          <div className="flex items-center">
            <div>Partners</div>
            <div className="grow text-xl"><IoChevronDown className="ml-auto mr-0 text-slate-500" /></div>
          </div>
        </div>
        <div className="py-4 border-t border-slate-200 dark:border-slate-800">
          <div className="flex items-center">
            <div>Support</div>
            <div className="grow text-xl"><IoChevronDown className="ml-auto mr-0 text-slate-500" /></div>
          </div>
        </div>
        <div className="py-4 border-t border-slate-200 dark:border-slate-800">
          <div className="flex items-center">
            <div>
              <span className="text-ml-purple font-semibold">Moonlight&nbsp;</span>
              NFT
            </div>
            <div className="grow text-xl"><IoChevronDown className="ml-auto mr-0 text-slate-500" /></div>
          </div>
        </div>
        <div className="py-4 border-t border-slate-200 dark:border-slate-800">
          <div className="flex items-center">
            <div>Resources</div>
            <div className="grow text-xl"><IoChevronDown className="ml-auto mr-0 text-slate-500" /></div>
          </div>
        </div>
      </div>
      <div className="py-4 pb-6 mb-6 border-b border-slate-200 dark:border-slate-800">
        <div className="flex items-center justify-center gap-x-5 text-2xl">
          <a href="https://facebook.com/getmoonlight">
            <IoLogoFacebook />
          </a>
          <a href="https://twitter.com/getmoonlight">
            <IoLogoTwitter />
          </a>
          <a href="https://instagram.com/getmoonlight">
            <IoLogoInstagram />
          </a>
          <a href="https://discord.com/getmoonlight">
            <IoLogoDiscord />
          </a>
        </div>
      </div>
    </Container>
  )
}
