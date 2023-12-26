import { Input } from '@/components/ui/input'
import Image from 'next/image'
import React from 'react'

const GlobalSearch = () => {
  return (
    <div className="relative w-full max-w-[600px] max-lg:hidden">
      <div className="background-light800_darkgradient relative flex grow items-center min-h-[56px] rounded-xl gap-1 px-4">
        <Image 
          src="/assets/icons/search.svg"
          width={16}
          height={16}
          alt="search"
          className="cursor-pointer"
        />
        <Input
          type="text"
          placeholder="Search..."
          value=""
          className="paragraph-regular placeholder no-focus shadow-none outline-none border-none background-light800_darkgradient"
        />
      </div>
    </div>
  )
}

export default GlobalSearch