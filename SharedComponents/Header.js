import Link from "next/link"
import Image from "next/image"

export default function Header() {
  return (
      <header className="flex bg-gray-800 items-center p-4">
        <Image src="/logo.svg" width={60} height={60} />
        <div className="flex text-white">
          <ui className="mx-6">
            <Link href="/">
              Homepage
            </Link>
          </ui>
          <ui className="mx-6">
            <Link href="/portfolio" >
              Portfolio
          </Link>
          </ui>

          <ui className="mx-6"> 
            <Link href="/contact" className="mx-6">
              Contact Me
          </Link>
          </ui>
        </div>
      </header>
  )
}
