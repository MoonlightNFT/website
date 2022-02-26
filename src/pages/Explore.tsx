import React from 'react'
import { FaSearch } from 'react-icons/fa'

import Container from '../components/Container'
import HomeSlide from '../layouts/Home/Slide'
import HomeTopNFTs from '../layouts/Home/TopNFTs'

export default function Home() {
  return (
    <section className="pt-14">
      <Container>
        <div className="py-3 flex items-center gap-x-4">
          <div className="grow text-2xl font-bold">Discovery</div>
          <div className="flex-initial">
            <div className="badge badge-primary badge-outline">See All</div>
          </div>
          <div className="flex-initial text-xl text-ml-purple dark:text-white">
            <FaSearch />
          </div>
        </div>
        <div className="py-3">
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
  )
}
