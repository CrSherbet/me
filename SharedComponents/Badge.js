import Image from "next/Image"

export default function Badge({ badge }) {
  return (
    <div className="flex justify-end text-gray-500">
        <Image src="/email.svg" width={200} height={150} />
        <div>{badge.name}</div>
    </div>
  )
}
