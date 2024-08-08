import { Title } from "@/components";

import Image from "next/image";
import Link from "next/link";
import { ProductsInCart } from "./ui/productsInCart";
import { PlaceOrder } from "./ui/placeOrder";



export default function CheckoutPage() {
    return (
        <div className="flex justify-center items-center mb-72 px-10 sm:px-0">
            <div className="flex flex-col w-[1000px]">
                <Title title="Verify purchase order"></Title>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                    {/* carrito */}
                    <div className="flex flex-col mt-5">
                        {/* <span className="text-xl">Add more items</span> */}
                        <Link href="/cart" className="underline mb-5">
                        Edit shopping cart
                        </Link>
                    {/* items */}
                    <ProductsInCart/>

                    </div>



                    {/* checkOut */}
                  <PlaceOrder/>
                </div>
            </div>
        </div>
    )
}