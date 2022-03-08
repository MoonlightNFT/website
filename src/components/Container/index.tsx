import clsx from 'clsx'
import React, { ReactNode } from 'react'

export default function Container({ children, className = '', id = '' }: { children: ReactNode | ReactNode[], className?: string, id?: string }) {
  return (
    <div id={id} className={clsx('p-5 max-w-6xl m-auto', className)}>
      {children}
    </div>
  )
}
