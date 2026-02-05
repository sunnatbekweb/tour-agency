import Image from "next/image"
import Link from "next/link"

export const Logo = () => {
	return (
		<Link href="/" className="flex items-center gap-2">
			<Image src="/icons/logo.svg" width={40} height={75} className="w-10 h-16" alt="Logo" />
			<span className="text-lg md:text-[22px] leading-5 md:leading-6">
				Silk <br />
				Road <br />
				Wonders
			</span>
		</Link>
	)
}
