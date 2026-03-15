import Link from "next/link"
import Image from "next/image"

export default function TopMenu() {
  return (
    <div className="w-full h-[100px] bg-black fixed top-0 left-0 flex items-center justify-end px-16 shadow-md z-50">

      <div className="flex items-center gap-12">

        {/* BOOKING BUTTON */}
        <Link href="/booking">
          <div className="bg-blue-600 hover:bg-blue-700 text-white text-2xl font-bold px-12 py-4 rounded-full shadow-xl cursor-pointer transition-all duration-300 hover:scale-110 hover:shadow-[0_20px_60px_rgba(37,99,235,0.7)]">
            BOOKING
          </div>
        </Link>

        {/* LOGO */}
        <Link href="/booking">
          <Image
            src="/logo.png"
            alt="VenueVista Logo"
            width={100}
            height={100}
            className="cursor-pointer hover:scale-110 transition"
          />
        </Link>

      </div>

    </div>
  )
}