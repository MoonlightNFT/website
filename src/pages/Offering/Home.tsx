import React from 'react'
import { FaSearch } from 'react-icons/fa'
import { Link } from 'react-router-dom'

import bayc2661mosaic from '../../assets/nfts/bayc-2661-mosaic.svg'
import Container from '../../components/Container'

export default function OfferingHome() {
  return (
    <>
      <section>
        <Container>
          <div className="pb-3 flex items-center gap-x-4">
            <div className="grow text-2xl font-bold">Offerings</div>
            <div className="flex-initial text-xl dark:text-white">
              <FaSearch />
            </div>
          </div>
        </Container>
      </section>
      <section>
        <Container>
          <div>
            <Link to="/offering/bayc-2661">
              <img src={bayc2661mosaic} alt="BAYC 2661" className="scale-150" />
            </Link>
          </div>
        </Container>
      </section>
    </>
  )
}
