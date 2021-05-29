import Link from "next/link"
import Image from "next/image"

export default function Home() {
	return (
		<div className="flex flex-col align-center">
			<div id="desktop" className="flex justify-center mt-64">
				<div id="typing">
					Welcome to
					<span className="text-red-600"> C</span>
					<span className="text-red-400">H</span>
					<span className="text-yellow-300">E</span>
					<span className="text-green-400">R</span>
					<span className="text-blue-300">R</span>
					<span className="text-purple-400">Y</span>
					's World.
				</div>
				<div id="crow"></div>
			</div>
			<div id="mobile" className="flex flex-col justify-center mt-40 mb-4">
				<div className="flex justify-center">
					<div id="typing-mobile-1">Welcome to </div>
					<div id="crow"></div>
				</div>
				<div className="flex justify-center">
					<div id="typing-mobile-2">
						<span className="text-red-600"> C</span>
						<span className="text-red-400">H</span>
						<span className="text-yellow-300">E</span>
						<span className="text-green-400">R</span>
						<span className="text-blue-300">R</span>
						<span className="text-purple-400">Y</span>
						's World.
					</div>
					<div id="crow"></div>
				</div>
			</div>

			
			
			<div className="flex justify-center text-gray-400">Be happy every single day<span className="text-red-400 px-1">♥</span></div>
		</div>
	)
}
