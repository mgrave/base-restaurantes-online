

import { titleFont } from "@/config/fonts"
import Link from "next/link"


export const Footer = () => {
  return (
    <div className="flex w-full justify-center text-xs mb-10">
        <Link href='/'>
        <span className={`${titleFont.className} antialiased font-bold`}>Jarocho</span>
        <span>| shop</span>
        {/* con este codigo de abajo siempre tenemos el año actual */}
        <span>© { new Date().getFullYear()}</span>
        </Link>

        <Link href='/' className="mx-3">
        Privacy Policy
        </Link>
        <Link href='/' className="mx-3">
        Terms and conditions.
        </Link>


    </div>
  )
}
