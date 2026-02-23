import { ReactNode } from 'react'

interface IProps {
	text: string
	icon?: ReactNode
	click?: () => void
}

export const Button = ({ text, icon, click }: IProps) => {
	return (
		<button
			onClick={click}
			className="w-60 py-3 rounded-4xl bg-white text-2xl text-[#656267] flex items-center justify-center gap-2.5"
		>
			{text} {icon}
		</button>
	)
}
