import React from 'react'

import baycBrand from '../../../assets/brands/bayc.png'
import bayc2661 from '../../../assets/nfts/bayc-2661.png'
import bayc2661tp from '../../../assets/nfts/bayc-2661-tp.png'
import SlideCard from '../../../components/Card/Slide'

export default function HomeSlide() {
  return (
    <div className="flex overflow-x-auto relative gap-x-5 pt-2 w-full snap-x snap-mandatory no-scrollbar">
      <SlideCard
        collection="Bored Ape"
        number="2661"
        type="Hot"
        imageCollection={baycBrand}
        imageNFT={bayc2661tp}
        pricePerShare={21}
        fluctuation={220}
        invested={97}
      />
      <SlideCard
        collection="Bored Ape"
        number="2661"
        type="Popular"
        imageCollection={baycBrand}
        imageNFT={bayc2661}
        pricePerShare={21}
        fluctuation={220}
        invested={97}
      />
      <SlideCard
        collection="Bored Ape"
        number="2661"
        type="Top"
        imageCollection={baycBrand}
        imageNFT={bayc2661tp}
        pricePerShare={21}
        fluctuation={220}
        invested={97}
      />
    </div>
  )
}
