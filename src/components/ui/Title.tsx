export const Title = ({ text }: { text: string }) => {
	return (
		<h2 className="text-3xl md:text-4xl lg:text-6xl text-text uppercase mt-2 sm:mt-4 lg:mt-6">
			{text}
		</h2>
	)
}
