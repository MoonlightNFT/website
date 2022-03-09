import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { BsDashLg } from 'react-icons/bs'

import bayc2661mosaic from '../../assets/nfts/bayc-2661-mosaic.svg'
import Container from '../../components/Container'

export default function OfferingProduct() {
  // https://www.kindacode.com/article/react-get-the-width-height-of-a-dynamic-element/
  const topNavHeight = 74 // TODO: change this to dynamic, Redux state-pulled value
  const [windowHeight, setWindowHeight] = useState<number>(window.innerHeight - topNavHeight)

  useEffect(() => setWindowHeight(window.innerHeight - topNavHeight), [window.innerHeight])

  return (
    <div style={{ height: windowHeight }}>
      <section className="relative z-20">
        <Container className="pt-16 space-y-4">
          <div className="flex items-end justify-center space-x-2">
            <div className="text-4xl font-title font-bold uppercase tracking-normal">Bored Ape</div>
            <div className="text-stone-600 dark:text-stone-200 text-md">#2661</div>
          </div>
          <div className="flex items-center justify-center space-x-2 text-ml-green font-semibold">
            <div className="text-2xl font-title">$822,000</div>
            <div className="p-2 bg-stone-100 dark:bg-stone-800 text-xs rounded-lg shadow">+576,409 (500%)</div>
          </div>
          <div className="pt-4 text-4xl">
            <img src={bayc2661mosaic} alt="BAYC 2661" className="scale-[2] z-10" />
          </div>
        </Container>
      </section>
      <section className="relative z-30">
        <Container>
          <div className="flex flex-col space-y-4">
            <div className="m-auto py-3 px-24 text-white bg-ml-green hover:bg-ml-green/80 text-xs text-center rounded cursor-pointer transition">Own a part!</div>
            <div className="flex items-center justify-center space-x-1 text-2xs">
              <div className="dark:text-stone-200 font-semibold">Initial NFT Offering</div>
              <div className="dark:text-stone-400">-</div>
              <div className="text-ml-purple font-semibold">10% Remaining</div>
            </div>
          </div>
        </Container>
      </section>
      <section className="absolute inset-x-0 bottom-0 bg-stone-100 dark:bg-stone-800 text-xs rounded-t-2xl shadow">
        <Container className="pt-1">
          <div>
            <BsDashLg className="m-auto text-stone-300 dark:text-stone-200 text-2xl" />
          </div>
          <div className="flex items-center justify-center space-x-4 pt-1 text-stone-300 text-base font-semibold">
            <div className="px-1">Overview</div>
            <div className="px-1">Learn More</div>
            <div className="px-1">Owners</div>
          </div>
        </Container>
      </section>
    </div>
  )
}
