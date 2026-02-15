import { Logo } from "@/components/ui/Logo"
import { ArrowUpRight, SendHorizonal } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import styles from "./style.module.scss"

export const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className="container flex justify-between">
				<div className="w-120">
					<Logo />
					<p className="text-xl mt-16 mb-10.5">
						Sign up to get exclusive offers, travel tips, and destination
						inspiration straight to your inbox!
					</p>
					<form className="w-fit flex items-center py-2 px-3 rounded-[50px] bg-white text-text">
						<input
							type="text"
							name="email"
							placeholder="Enter your email"
							className="ps-2 text-lg focus:outline-none"
						/>
						<button className="py-2 px-4 rounded-4xl bg-primary">
							<SendHorizonal color="#ffffff" />
						</button>
					</form>
				</div>
				<div className="">
					<strong className="text-2xl">Explore</strong>
					<ul className="mt-12 flex flex-col gap-6">
						<li>
							<Link href="/" className="text-xl">
								Home
							</Link>
						</li>
						<li>
							<Link href="/" className="text-xl">
								Destinations
							</Link>
						</li>
						<li>
							<Link href="/trip-finder" className="text-xl">
								Trip finder
							</Link>
						</li>
						<li>
							<Link href="/about-us" className="text-xl">
								About us
							</Link>
						</li>
						<li>
							<Link href="/blog" className="text-xl">
								Blog
							</Link>
						</li>
					</ul>
				</div>
				<div className="w-1/4 flex flex-col justify-between">
					<strong className="text-2xl">Why Travel with Us?</strong>
					<div className="flex items-center gap-10">
						<p className="text-xl">
							&#34;Authentic experiences, expert guides, unforgettable memories
							— discover the true spirit of the Silk Road with Wonder:)&#34;
						</p>
						<Link
							href={"/"}
							className="min-w-14 h-14 rounded-full bg-white grid place-content-center"
						>
							<ArrowUpRight size={36} color="#A38282" />
						</Link>
					</div>
					<div>
						<ul className="flex items-center gap-10">
							<li>
								<Link
									href={"#"}
									className="min-w-12 h-12 rounded-full border border-white grid place-content-center"
								>
									<Image
										src="/icons/facebook.svg"
										width={12}
										height={20}
										alt="Facebook"
									/>
								</Link>
							</li>
							<li>
								<Link
									href={"#"}
									className="min-w-12 h-12 rounded-full border border-white grid place-content-center"
								>
									<Image
										src={"/icons/instagram.svg"}
										width={20}
										height={20}
										alt="Instagram"
									/>
								</Link>
							</li>
							<li>
								<Link
									href={"#"}
									className="min-w-12 h-12 rounded-full border border-white grid place-content-center"
								>
									<Image
										src={"/icons/telegram.svg"}
										width={20}
										height={20}
										alt="Instagram"
									/>
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</footer>
	)
}
