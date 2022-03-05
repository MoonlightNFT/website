import clsx from 'clsx'
import React from 'react'
import { IoCaretDown, IoCaretForward, IoCaretUp } from 'react-icons/io5'

interface Props {
  collection: string,
  number: string,
  type: string,
  imageCollection: string,
  imageNFT: string,
  fluctuation: number,
  invested: number,
}

export default function SlideCard(meta: Props) {
  const {
    collection,
    number,
    type,
    imageCollection,
    imageNFT,
    fluctuation,
    invested,
  } = meta

  return (
    <div
      className="shrink-0 px-3 w-11/12 max-w-sm bg-gradient-to-b from-[#AC7EF0] to-ml-purple-alt text-xs rounded-xl snap-start"
      // style={{ boxShadow: '1px 1px 20px 0 #811FF1' }}
    >
      <div className="flex items-center pt-4">
        <img src={imageCollection} alt="Collection Logo" className="w-10" />
        <div className="flex items-top ml-2 w-full font-light">
          <div className="grow">
            <div>{`${collection} #${number}`}</div>
            <div className="text-white/50">{type}</div>
          </div>
          <div className="flex-initial">
            <span className="py-1 px-3 bg-white/5 border border-white/10 text-2xs rounded-full">
              {`+ ${fluctuation}%`}
            </span>
          </div>
        </div>
      </div>
      <div className="flex items-end">
        <div className="pl-4 pr-1">
          <img src={imageNFT} alt="NFT" className="h-auto w-40" />
        </div>
        <div className="grow pb-6">
          <div className="py-1 w-full text-center bg-black/40 rounded" style={{ fontSize: '8px' }}>{`${invested}% invested`}</div>
        </div>
      </div>
    </div>
  )
}
