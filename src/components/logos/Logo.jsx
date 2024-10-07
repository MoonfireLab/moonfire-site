import React from 'react'
import Link from 'next/link'
import clsx from 'clsx'

const Logo = ({className, props}) => {
  return (
    <Link href={"/"}>
        <h2 className={clsx(
            "text-3xl font-bold text-orange-600 hover:text-orange-400 duration-300",
            className
        )}
        {...props}>
            Moonfire Lab</h2>
    </Link>
  )
}

export default Logo