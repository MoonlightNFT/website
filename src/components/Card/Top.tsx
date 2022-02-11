import React from 'react'
import { IoCaretUp } from 'react-icons/io5'

interface Props {
  collection: string,
  number: string,
  image: string,
  // pricePerShare: number,
  fluctuation: number,
}

export default function TopCard(meta: Props) {
  const {
    collection,
    number,
    image,
    fluctuation,
  } = meta

  return (
    <div className="flex gap-x-4 items-center">
      <div>
        <img src={image} alt="NFT" className="h-14 rounded-full border-2 border-ml-purple" />
      </div>
      <div className="grow">
        <div className="leading-6">
          <div className="text-md">{collection}</div>
          <div className="text-lg font-bold">{`#${number}`}</div>
        </div>
      </div>
      <div className="flex gap-x-1 items-center text-xl text-green-500">
        <IoCaretUp />
        <span className="font-bold">{`${fluctuation}%`}</span>
      </div>
    </div>
  )
}
