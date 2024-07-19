'use client;'

import { titleFont } from "@/config/fonts"

//necesitamos recibir el slug para buscar el producto
interface Props {
    slug: string;
}

export const StockLabel = ({slug}:Props) => {
    //con ese slug necesito determinar cuanta cantidad ahi en el stock

  return (
    <h1 className={`${titleFont.className} antialiased font-bold text-xl`}>
    stock: 150
 </h1>
  )
}
