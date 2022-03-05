import React from 'react'
import { IoCaretUp } from 'react-icons/io5'

import barGraphImg from '../../assets/images/bargraph.png'

interface Props {
  collection: string,
  collectionShorthand: string,
  number: string,
  image: string,
  // pricePerShare: number,
  fluctuation: number,
}

export default function TopCard(meta: Props) {
  const {
    collection,
    collectionShorthand,
    number,
    image,
    fluctuation,
  } = meta

  return (
    <div className="flex gap-x-4 items-center text-xs">
      <div>
        <img src={image} alt="NFT" className="h-12 rounded-full border-2 border-ml-purple" />
      </div>
      <div className="grow flex flex-col">
        <div className="whitespace-nowrap">
          {`${collection} #${number}`}
        </div>
        <div className="flex items-center">
          <div className="grow text-2xs text-slate-400">{`${collectionShorthand}`}</div>
          <div><img src={barGraphImg} alt="Graph" className="w-36 pl-2" /></div>
        </div>
      </div>
      <div className="flex gap-x-1 items-center py-1 px-2 bg-slate-200/50 text-2xs text-ml-green whitespace-nowrap rounded-full">
        <div><IoCaretUp /></div>
        <div>{`${fluctuation}%`}</div>
      </div>
    </div>
  )
}
