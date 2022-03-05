import React from 'react'

import baycBrand from '../../../assets/brands/bayc.png'
import bayc2661tp from '../../../assets/nfts/bayc-2661-tp.png'
import SlideCard from '../../../components/Card/Slide'

export default function HomeSlide() {
  return (
    <div className="flex overflow-auto relative gap-x-5 pt-2 w-full snap-x snap-mandatory text-white dark:text-inherit no-scrollbar">
      <SlideCard
        collection="Bored Ape"
        number="2661"
        type="Art"
        imageCollection={baycBrand}
        imageNFT={bayc2661tp}
        fluctuation={220}
        invested={97}
      />
      <SlideCard
        collection="Bored Ape"
        number="2661"
        type="Art"
        imageCollection={baycBrand}
        imageNFT={bayc2661tp}
        fluctuation={220}
        invested={97}
      />
      <SlideCard
        collection="Bored Ape"
        number="2661"
        type="Art"
        imageCollection={baycBrand}
        imageNFT={bayc2661tp}
        fluctuation={220}
        invested={97}
      />
    </div>
  )
}
