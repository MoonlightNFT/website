import clsx from 'clsx'
import React from 'react'
import { IoCaretDown, IoCaretForward, IoCaretUp } from 'react-icons/io5'

interface Props {
  collection: string,
  number: string,
  type: string,
  imageCollection: string,
  imageNFT: string,
  pricePerShare: number,
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
    pricePerShare,
    fluctuation,
    invested,
  } = meta

  return (
    <div className="shrink-0 py-3 px-4 w-11/12 max-w-sm bg-ml-purple rounded-lg shadow-lg snap-start">
      <div className="flex items-center pb-2">
        <div>
          <span className="sr-only">Collection Brand</span>
          <img src={imageCollection} alt="Collection Logo" className="w-14" />
        </div>
        <div className="flex items-center ml-2 w-full">
          <div className="grow leading-5">
            <span className="sr-only">Collection NFT</span>
            <span>{`${collection} `}</span>
            <span className="font-bold">{`#${number}`}</span>
          </div>
          <div className="flex-initial">
            <span className="sr-only">Collection NFT Type</span>
            <span className="py-1 px-3 text-sm bg-black/20 rounded-full border border-[#723CBF]">{type}</span>
          </div>
        </div>
      </div>
      <div className="flex items-end">
        <div>
          <img src={imageNFT} alt="NFT" className="h-32 shadow-lg shadow-ml-purple" />
        </div>
        <div className="pl-4">
          <div>
            <div className="flex items-end leading-8">
              <span className="flex items-start">
                <span className="mt-1 text-xs">$</span>
                <span className="pl-1 text-4xl font-bold">{pricePerShare}</span>
              </span>
              <span className="mb-1 text-xs">&nbsp;/share</span>
            </div>
            <div className={clsx('flex gap-x-1 items-center text-xs font-semibold tracking-wide', fluctuation > 0 ? 'text-green-500' : fluctuation < 0 ? 'text-red-500' : 'text-neutral-300')}>
              {
                fluctuation >= 0 && (
                  <div className="flex gap-x-1 items-center text-green-500">
                    {
                      fluctuation > 0 ? <IoCaretUp /> : fluctuation < 0 ? <IoCaretDown /> : <IoCaretForward />
                    }
                    <span>{`${fluctuation}%`}</span>
                  </div>
                )
              }
              {
                fluctuation < 0 && (
                  <div className="flex gap-x-1 items-center text-lg font-semibold text-red-500">
                    <IoCaretDown />
                    <span>fluctuation</span>
                  </div>
                )
              }
            </div>
          </div>
          <div className="pt-4">
            <div className="py-1 px-4 w-32 text-center bg-black/20 rounded border border-[#723CBF]">
              <div className="text-xs text-green-600">{`${invested}% invested`}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
