import { Logo } from "@/components/ui/Logo"
import { House } from "lucide-react"
import Link from "next/link"
import styles from "./style.module.scss"

export const Header = () => {
	return (
		<header className={styles.header}>
			<div className={`container ${styles.header__container}`}>
				<Logo />
				<div className={styles[`header__container--wrapper`]}>
					<nav className={styles.nav}>
						<ul className={styles.nav__list}>
							<li className={`${styles[`nav__list--item`]}`}>
								<Link
									href={"#"}
									className={`${styles[`nav__list--item-link`]} ${styles.active}`}
								>
									<House />
									Home
								</Link>
							</li>
							<li className={styles[`nav__list--item`]}>
								<Link href={"#"} className={styles[`nav__list--item-link`]}>
									Destinations
								</Link>
							</li>
							<li className={styles[`nav__list--item`]}>
								<Link href={"#"} className={styles[`nav__list--item-link`]}>
									Trip finder
								</Link>
							</li>
							<li className={styles[`nav__list--item`]}>
								<Link href={"#"} className={styles[`nav__list--item-link`]}>
									About us
								</Link>
							</li>
							<li className={styles[`nav__list--item`]}>
								<Link href={"#"} className={styles[`nav__list--item-link`]}>
									Blog
								</Link>
							</li>
						</ul>
					</nav>
					<div className="flex items-center gap-x-12 text-2xl">
						<button>Contact us</button>
						<div>
							<button>Eng</button>
						</div>
					</div>
				</div>
			</div>
		</header>
	)
}
