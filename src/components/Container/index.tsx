import clsx from 'clsx'
import React, { ReactNode } from 'react'

export default function Container({ children, className = '' }: { children: ReactNode | ReactNode[], className?: string }) {
  return (
    <div className={clsx('p-5 max-w-6xl m-auto', className)}>
      {children}
    </div>
  )
}
