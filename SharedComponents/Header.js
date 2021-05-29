import Link from "next/link"

export default function Header() {
  return (
    <header className="flex p-8">
      <div className="flex justify-end text-gray-500">
        <ui className="w-28">
          <Link href="/" >
            Homepage
          </Link>
        </ui>

        <ui className="w-28">
          <Link href="/portfolio" >
            Portfolio
          </Link>
        </ui>

        <ui className="w-28">
          <Link href="/contact" className="mx-6">
            Contact Me
          </Link>
        </ui>
      </div>
    </header>
  )
}
