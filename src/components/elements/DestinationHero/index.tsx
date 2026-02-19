import Image from "next/image"
import styles from "./style.module.scss"

interface IProps {
	image: string
	title: string
	subtitle: string
}

export const DestinationHero = ({ image, title, subtitle }: IProps) => {
	return (
		<section className={styles.hero}>
			<Image
				src={image}
				width={1920}
				height={1080}
				alt={title}
				className={styles["hero_bg-image"]}
			/>
			<div className={`${styles.hero__container} container`}>
				<h2 className={styles.title}>{title}</h2>
				<p className={styles.subtitle}>{subtitle}</p>
			</div>
		</section>
	)
}
