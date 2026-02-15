import { Logo as LogoIcon } from "@/assets/icons/Logo"
import Link from "next/link"

interface IProps {
	color?: string
}

export const Logo = ({ color = "#ffffff" }: IProps) => {
	return (
		<Link href="/" className="flex items-center gap-2">
			<LogoIcon color={color} />
			<span
				style={{ color: color }}
				className={`text-lg md:text-[22px] leading-5 md:leading-6`}
			>
				Silk <br />
				Road <br />
				Wonders
			</span>
		</Link>
	)
}
