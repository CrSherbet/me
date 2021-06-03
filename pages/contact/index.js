import Image from 'next/image'

export default function Contact() {
  return (
    <div className="my-16">
      <h2 className="text-7xl text-center header">Contact <span className="text-blue-400">Me</span></h2>
      <div className="flex justify-evenly my-16 text-gray-600">
        <div className="flex flex-col items-center">
          <Image src="/phone-call.svg" width={150} height={150}/>
          <div className="my-6">Tel.: +66 877954107</div>
        </div>
        <div>
          <a href="mailto:warisara.inprom@gmail.com?subject=Hi Warisara!" target="_blank" className="flex flex-col items-center">
            <Image src="/email.svg" width={150} height={150} />
            <div className="my-6">Email: warisara.inprom@gmail.com</div>
          </a>
        </div>
        <div>
          <a href="https://www.linkedin.com/in/winprom" target="_blank" className="flex flex-col items-center">
            <Image src="/linkedin.svg" width={150} height={150}/>
            <div className="my-6">LinkedIn: winprom</div>
          </a>
        </div>
      </div>
    </div>
  )
}
