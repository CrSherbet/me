import Link from "next/link"
import Image from "next/image"

export default function Home() {
	return (
		<div className="flex flex-col align-center my-64">
			<div className="flex justify-center">
				<div id="typing">Welcome to
					<span className="text-red-600"> C</span>
					<span className="text-red-400">H</span>
					<span className="text-yellow-300">E</span>
					<span className="text-green-400">R</span>
					<span className="text-blue-300">R</span>
					<span className="text-purple-400">Y</span>
				's World.</div>
				<div id="crow"></div>
			</div>
			<div className="flex justify-center font-mono text-gray-400">Be happy every single day<span className="text-red-400 px-2">♥</span></div>
		</div>
	)
}
