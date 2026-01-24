import Image from "next/image"
import Link from "next/link"

export const Logo = () => {
	return (
		<Link href="/" className="flex items-center gap-2">
			<Image src="/logo.svg" width={40} height={75} alt="Logo" />
			<span className="text-[22px] leading-6">
				Silk <br />
				Road <br />
				Wonders
			</span>
		</Link>
	)
}
