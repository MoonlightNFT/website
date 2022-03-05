import React from 'react'
import { FaMoon } from 'react-icons/fa'
import { IoCheckmark } from 'react-icons/io5'
import { Link } from 'react-router-dom'

import moonlightScreenshot from '../assets/images/moonlight-screenshot.png'
import bayc2661 from '../assets/nfts/bayc-2661.png'
import Container from '../components/Container'
import HomeSlide from '../layouts/Home/Slide'
import HomeTopNFTs from '../layouts/Home/TopNFTs'

export default function Home() {
  return (
    <>
      <section className="pt-16">
        <div className="py-4 text-xs text-white bg-gradient-to-b from-[#341C89] to-[#5945A1] tracking-tight text-center">
          We find and split it. You own and trade it.&nbsp;
          <span className="ml-1 p-1 px-2 bg-white/10 border border-white/20 rounded-full">It&apos;s Simple.</span>
        </div>
        <Container className="pt-8">
          <div className="flex flex-col items-center">
            <div>
              <span className="py-1 px-3 text-ml-purple bg-ml-purple-light text-sm font-semibold uppercase rounded">Moonlight</span>
            </div>
            <div className="pt-4 text-4xl font-title font-semibold tracking-wide leading-tight text-center uppercase">
              <div>Own the</div>
              <span>Rarest NFT</span>
              <span className="lowercase">s</span>
            </div>
            <div className="py-4 text-xs dark:text-zinc-300 text-center font-light">At a fraction of the price.</div>
            {
              // <div className="py-4">
              //   <div className="p-2 bg-transparent hover:bg-ml-purple rounded-2xl transition">
              //     <img src={bayc2661} alt="NFT" className="max-h-60" />
              //   </div>
              // </div>
            }
            <div className="w-full pt-1 px-3">
              <button type="button" className="w-full py-3 px-10 text-white bg-ml-green hover:bg-green-500 text-center rounded shadow transition">Join Now</button>
            </div>
            <div className="pt-6 text-xs dark:text-zinc-300 text-center font-light">Starting at $10. Now, it&apos;s yours.</div>
          </div>
        </Container>
      </section>
      <section>
        <Container>
          <div className="py-4 border-t border-slate-200 dark:border-slate-800">
            <div className="py-2">
              <div className="pb-1 text-xs text-ml-purple font-semibold">New Offering</div>
              <div className="pb-1 text-xl font-small-title font-bold">
                <span className="sr-only">Collection</span>
                Bored Ape Yacht Club
              </div>
              <div className="text-xs dark:text-zinc-400">
                <span className="sr-only">Description</span>
                The top NFT project.
              </div>
            </div>
            <HomeSlide />
          </div>

          <div className="py-2">
            <div className="flex items-center">
              <div className="grow pb-1 text-xl font-small-title font-semibold">Top NFTs 📈</div>
              <div className="flex-initial text-sm text-ml-purple">See All</div>
            </div>
            <HomeTopNFTs />
          </div>
        </Container>
      </section>
      <section>
        <Container className="pt-2 px-0">
          <div className="flex flex-col gap-y-4 py-8 px-4 bg-ml-purple-dark">
            <section>
              <div className="text-3xl text-white dark:text-inherit font-title font-semibold tracking-wide leading-snug text-center">
                <div>Owning NFTs</div>
                <div>shouldn&lsquo;t be so hard.</div>
              </div>
              <div className="pt-4 text-xs text-slate-200 text-md font-light tracking-wide leading-5 text-center">
                <div>And right now, it is. That&apos;s why we created Moonlight.</div>
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
              <div><b>It&apos;s simple.</b></div>
              <div className="font-light">We put in the work so you don&apos;t have to.</div>
            </div>
          </section>
          <section className="pt-12 flex flex-col gap-y-3">
            <div className="flex flex-col">
              <div className="flex items-center gap-x-2 text-lg font-semibold">
                <IoCheckmark className="p-1 mr-1 text-2xl text-white dark:text-inherit bg-ml-green" />
                <div className="text-sm">We find it.</div>
              </div>
              <div className="max-w-xs pt-3 text-xs tracking-wide leading-relaxed font-light">
                <p>We are constantly monitoring the Best Blue Chip NFT’s in the market.</p>
              </div>
            </div>
            <div className="pt-4 flex flex-col border-t border-slate-200 dark:border-slate-800">
              <div className="flex items-center gap-x-2 text-lg font-semibold">
                <IoCheckmark className="p-1 mr-1 text-2xl text-white dark:text-inherit bg-ml-green" />
                <div className="text-sm">We propose it.</div>
              </div>
              <div className="max-w-xs pt-3 text-xs tracking-wide leading-relaxed font-light">
                We learn everything we can about the NFT to find a gem: Its price history, community, owners, company, and more.
              </div>
            </div>
            <div className="pt-4 flex flex-col border-t border-slate-200 dark:border-slate-800">
              <div className="flex items-center gap-x-2 text-lg font-semibold">
                <IoCheckmark className="p-1 mr-1 text-2xl text-white dark:text-inherit bg-ml-green" />
                <div className="text-sm">You own it.</div>
              </div>
              <div className="max-w-xs pt-3 text-xs tracking-wide leading-relaxed font-light">
                We list the NFT on Moonlight to fundraise the purchase. Once you all fund the NFT, we purchase it for you. You own it.
              </div>
            </div>
            <div className="py-4 flex flex-col border-t border-b border-slate-200 dark:border-slate-800">
              <div className="flex items-center gap-x-2 text-lg font-semibold">
                <IoCheckmark className="p-1 mr-1 text-2xl text-white dark:text-inherit bg-ml-green" />
                <div className="text-sm">You trade it.</div>
              </div>
              <div className="max-w-xs pt-3 text-xs tracking-wide leading-relaxed font-light">
                Now you can trade your shares of the NFT on Moonlight. All decisions regarding the asset are up to you, the owner.
              </div>
            </div>
          </section>
          <section className="pt-10 pb-8 px-1 flex gap-x-3 border-b border-slate-200 dark:border-slate-800 text-xs">
            <div className="p-4 w-full bg-black text-white text-center rounded-md">
              <Link to="/signup">Learn More</Link>
            </div>
            <div className="p-4 w-full bg-ml-green text-white text-center rounded-md">
              <Link to="/signup">Join Now</Link>
            </div>
          </section>
        </Container>
      </section>
    </>
  )
}
