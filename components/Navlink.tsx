import Link from "next/link"
import React from "react"

interface NavlinkProps {
    label: string,
    path: string
}

const Navlink: React.FC<NavlinkProps> = ({label, path}) => {

  return (
    <Link className=" underline  underline-offset-8 decoration-transparent transition-all hover:duration-700 ease-in duration-400 p-3 pt-2 pb-2 rounded-full hover:underline hover:underline-offset-8 hover:decoration-2 hover:decoration-white focus:underline focus:decoration-2 focus:underline-offset-8 focus:decoration-[#47F969] focus:text-[#47F969]" href={path}>{label}</Link>
  )
}

export default Navlink