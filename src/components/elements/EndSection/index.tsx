import { Button } from "@/components/ui/Button"
import { Logo } from "@/components/ui/Logo"
import { ArrowUpRight } from "lucide-react"
import styles from "./style.module.scss"

export const EndSection = () => {
	return (
		<section className={styles.section}>
			<div className="container h-full flex flex-col items-center justify-center">
				<div className="w-fit mx-auto">
					<Logo color="#B4A297" />
				</div>
				<h2 className="w-[70%] mx-auto text-7xl text-center uppercase mt-16 mb-20">
					Explore and find yourself In Silk road Journey
				</h2>
				<Button text="Contact us" icon={<ArrowUpRight size={28} />} />
			</div>
		</section>
	)
}
