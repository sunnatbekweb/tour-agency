import { destinations } from '@/data/destination.data'
import { X } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
import { Button } from './Button'
import { Logo } from './Logo'

interface IProps {
	isOpen: boolean
	close: () => void
}

export const Drawer = ({ isOpen, close }: IProps) => {
	const [dropdown, setDropdown] = useState(false)

	return (
		<div
			className={`${isOpen ? 'right-0' : 'right-full'} fixed top-0 w-full h-screen bg-primary flex flex-col duration-300`}
		>
			<div className="px-4 py-6 flex items-center justify-between mb-20">
				<button
					onClick={close}
					className="rounded-lg p-2.5 bg-[#FFFFFF1A] cursor-pointer"
				>
					<X size={24} />
				</button>
				<Logo />
				<div></div>
			</div>
			<ul
				onClick={close}
				className="flex flex-col text-lg"
			>
				<li className="border-b border-[#B7AAA2] text-center">
					<Link
						href={'/'}
						className="block py-4"
					>
						Home
					</Link>
				</li>
				<li>
					<button
						onClick={e => {
							setDropdown(!dropdown)
							e.stopPropagation()
						}}
						className="w-full py-4 border-b border-[#b7aaa2] text-center"
					>
						Destinations
					</button>
					<ul
						className={`${dropdown ? 'block h-fit' : 'hidden h-0'} duration-300`}
					>
						{destinations.map((item, index) => (
							<li
								key={index}
								className="border-b border-[#B7AAA2] bg-[#AC9D94] text-center"
							>
								<Link
									href={`/destination/${item.url}`}
									className="block py-4"
								>
									{item.name}
								</Link>
							</li>
						))}
					</ul>
				</li>
				<li className="border-b border-[#B7AAA2] text-center">
					<Link
						href={'/trip-finder'}
						className="block py-4"
					>
						Trip finder
					</Link>
				</li>
				<li className="border-b border-[#B7AAA2] text-center">
					<Link
						href={'/about'}
						className="block py-4"
					>
						About us
					</Link>
				</li>
				<li className="border-b border-[#B7AAA2] text-center">
					<Link
						href={'/blog'}
						className="block py-4"
					>
						Blog
					</Link>
				</li>
			</ul>
			<div className="flex justify-center mt-auto pb-24">
				<Button
					text="Contact us"
					click={close}
				/>
			</div>
		</div>
	)
}
