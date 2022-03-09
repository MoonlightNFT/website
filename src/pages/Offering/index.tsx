import React from 'react'
import { Outlet } from 'react-router-dom'

export default function Offering() {
  return (
    <>
      <span className="sr-only">Initial Offering page</span>
      <Outlet />
    </>
  )
}
