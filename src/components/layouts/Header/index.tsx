import { Logo } from "@/components/ui/Logo"
import { House, Menu } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import styles from "./style.module.scss"

export const Header = () => {
	return (
		<header className={styles.header}>
			<div className={`container ${styles.header__container}`}>
				<button className={styles.menu_button}>
					<Menu size={32} />
				</button>
				<Logo />
				<div className={styles[`header__container--wrapper`]}>
					<nav className={styles.nav}>
						<ul className={styles.nav__list}>
							<li className={`${styles[`nav__list--item`]}`}>
								<Link
									href={"/"}
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
								<Link
									href={"/trip-finder"}
									className={styles[`nav__list--item-link`]}
								>
									Trip finder
								</Link>
							</li>
							<li className={styles[`nav__list--item`]}>
								<Link
									href={"/about"}
									className={styles[`nav__list--item-link`]}
								>
									About us
								</Link>
							</li>
							<li className={styles[`nav__list--item`]}>
								<Link href={"/blog"} className={styles[`nav__list--item-link`]}>
									Blog
								</Link>
							</li>
						</ul>
					</nav>
					<div className={`${styles[`header__container--wrapper-end`]}`}>
						<button className={styles.contact_button}>Contact us</button>
						<button className={`${styles.lang_button}`}>
							<Image
								src={"/icons/globe.svg"}
								width={30}
								height={30}
								alt="Globe icon"
							/>
							<span>Eng</span>
						</button>
					</div>
				</div>
			</div>
		</header>
	)
}
