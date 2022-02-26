import {
  IoBriefcaseOutline, IoCartOutline, IoDocumentTextOutline, IoSearch,
} from 'react-icons/io5'
import React from 'react'
import { FaMoon } from 'react-icons/fa'

import moonlightScreenshot from '../assets/images/moonlight-screenshot.png'
import bayc2661 from '../assets/nfts/bayc-2661.png'
import Container from '../components/Container'
import HomeSlide from '../layouts/Home/Slide'
import HomeTopNFTs from '../layouts/Home/TopNFTs'

export default function Home() {
  return (
    <>
      <section className="pt-14">
        <div className="py-3 text-sm tracking-tight text-center text-white bg-gradient-to-b from-[#341C89] to-[#5945A1]">
          We find and split it. You own and trade it.
        </div>
        <Container className="pt-8">
          <div className="flex flex-col items-center">
            <div><FaMoon className="text-4xl text-ml-purple" /></div>
            <div className="pt-4 text-4xl font-semibold tracking-wide leading-tight text-center uppercase">
              <div>Own the</div>
              <span>Rarest NFT</span>
              <span className="lowercase">s</span>
            </div>
            <div className="py-2 text-sm text-zinc-500 dark:text-zinc-300">
              Buy, Sell, Collect with only $10.
            </div>
            <div className="py-4">
              <div className="p-2 bg-transparent hover:bg-ml-purple rounded-2xl transition">
                <img src={bayc2661} alt="NFT" className="max-h-60" />
              </div>
            </div>
            <div className="pt-4">
              <button type="button" className="py-3 px-10 bg-ml-green hover:bg-green-500 rounded-lg shadow-lg transition text-md">Join NOW. It&lsquo;s YOURS.</button>
            </div>
          </div>
        </Container>
      </section>
      <section>
        <Container>
          <div className="py-3 border-t border-slate-200 dark:border-slate-800">
            <div className="py-2">
              <div className="pb-2 text-sm text-ml-purple">New Offering</div>
              <div className="pb-1 text-xl font-bold">
                <span className="sr-only">Collection</span>
                Bored Ape Yacht Club
              </div>
              <div className="text-sm text-zinc-500 dark:text-zinc-400">
                <span className="sr-only">Description</span>
                Top NFT Project
              </div>
            </div>
            <HomeSlide />
          </div>

          <div className="py-2 pt-4">
            <div className="flex items-center">
              <div className="grow pb-1 text-xl font-bold">Top NFTs</div>
              <div className="flex-initial text-sm text-ml-purple">See All</div>
            </div>
            <HomeTopNFTs />
          </div>
        </Container>
      </section>
      <section>
        <Container>
          <div className="flex flex-col gap-y-4 py-8 px-4 bg-ml-purple-dark rounded-2xl">
            <section>
              <div className="text-2xl text-white dark:text-inherit font-semibold tracking-wide leading-snug text-center">
                <div>Owning NFTs</div>
                <div>shouldn&lsquo;t be that hard.</div>
              </div>
              <div className="pt-4 text-xs text-slate-200 tracking-wide leading-normal text-center text-md">
                <div>
                  Right now, it is. But
                  <b className="text-ml-purple"> Moonlight </b>
                  is here to help.
                </div>
                <div>
                  <b>Together, </b>
                  we own
                  <b> assets that appreciate.</b>
                </div>
              </div>
            </section>
            <section className="px-2">
              <img src={moonlightScreenshot} alt="Moonlight" />
            </section>
          </div>
        </Container>
      </section>
      <section>
        <Container>
          <section>
            <div className="text-2xl font-semibold tracking-wide leading-snug text-center">
              <div>How Does it Work?</div>
            </div>
            <div className="pt-4 text-sm tracking-wide leading-normal text-center text-md">
              <div>
                <b className="text-ml-purple">Moonlight </b>
                makes it
                <b> Simple </b>
                and
                <b> Easy </b>
              </div>
            </div>
          </section>
          <section className="pt-8 px-4 flex flex-col gap-y-3">
            <div className="flex flex-col">
              <div className="flex items-center gap-x-2 text-lg font-semibold">
                <div className="p-1">
                  <div className="p-1 text-2xl text-ml-green border-2 border-ml-green dark:text-black dark:bg-ml-green rounded-md">
                    <IoSearch />
                  </div>
                </div>
                <div>
                  <span>We</span>
                  <span className="text-ml-green font-bold"> find </span>
                  <span>it.</span>
                </div>
              </div>
              <div className="max-w-xs p-2 pt-3 text-xs tracking-wide leading-relaxed">
                <p>We are constantly monitoring the Best Blue Chip NFT’s in the market.</p>
              </div>
            </div>
            <div className="pt-4 flex flex-col border-t border-slate-200 dark:border-slate-800">
              <div className="flex items-center gap-x-2 text-lg font-semibold">
                <div className="p-1">
                  <div className="p-1 text-2xl text-ml-green border-2 border-ml-green dark:text-black dark:bg-ml-green rounded-md">
                    <IoDocumentTextOutline />
                  </div>
                </div>
                <div>
                  <span>We</span>
                  <span className="text-ml-green font-bold"> propose </span>
                  <span>it.</span>
                </div>
              </div>
              <div className="max-w-xs p-2 pt-3 text-xs tracking-wide leading-relaxed">
                We learn everything we can about the NFT to find a gem: Its price history, community, owners, company, and more.
              </div>
            </div>
            <div className="pt-4 flex flex-col border-t border-slate-200 dark:border-slate-800">
              <div className="flex items-center gap-x-2 text-lg font-semibold">
                <div className="p-1">
                  <div className="p-1 text-2xl text-ml-green border-2 border-ml-green dark:text-black dark:bg-ml-green rounded-md">
                    <IoBriefcaseOutline />
                  </div>
                </div>
                <div>
                  <span>You</span>
                  <span className="text-ml-green font-bold"> own </span>
                  <span>it.</span>
                </div>
              </div>
              <div className="max-w-xs p-2 pt-3 text-xs tracking-wide leading-relaxed">
                We list the NFT on Moonlight to fundraise the purchase. Once you all fund the NFT, we purchase it for you. You own it.
              </div>
            </div>
            <div className="pt-4 flex flex-col border-t border-slate-200 dark:border-slate-800">
              <div className="flex items-center gap-x-2 text-lg font-semibold">
                <div className="p-1">
                  <div className="p-1 text-2xl text-ml-green border-2 border-ml-green dark:text-black dark:bg-ml-green rounded-md">
                    <IoCartOutline />
                  </div>
                </div>
                <div>
                  <span>You</span>
                  <span className="text-ml-green font-bold"> trade </span>
                  <span>it.</span>
                </div>
              </div>
              <div className="max-w-xs p-2 pt-3 text-xs tracking-wide leading-relaxed">
                Now you can trade your shares of the NFT on Moonlight. All decisions regarding the asset are up to you, the owner.
              </div>
            </div>
          </section>
        </Container>
      </section>
    </>
  )
}
