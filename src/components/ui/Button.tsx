import { ReactNode } from "react"

interface IProps {
	text: string
	icon?: ReactNode
}

export const Button = ({ text, icon }: IProps) => {
	return (
		<button className="w-60 py-3 rounded-4xl bg-white text-2xl text-[#656267] flex items-center justify-center gap-2.5">
			{text} {icon}
		</button>
	)
}
