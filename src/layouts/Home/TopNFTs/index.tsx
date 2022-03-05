import React from 'react'

import bayc2661 from '../../../assets/nfts/bayc-2661.png'
import TopCard from '../../../components/Card/Top'

export default function HomeTopNFTs() {
  return (
    <div className="flex flex-col gap-y-4 pt-3">
      <TopCard
        collection="Bored Ape"
        collectionShorthand="BAYC"
        number="2661"
        image={bayc2661}
        fluctuation={220}
      />
      <TopCard
        collection="Crypto Punk"
        collectionShorthand="CryptoPunks"
        number="7750"
        image={bayc2661}
        fluctuation={220}
      />
      <TopCard
        collection="Clone X"
        collectionShorthand="CloneX"
        number="18973"
        image={bayc2661}
        fluctuation={220}
      />
    </div>
  )
}
