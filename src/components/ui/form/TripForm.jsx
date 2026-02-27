import axios from 'axios'
import { useLocale, useTranslations } from 'next-intl'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

export const TripForm = () => {
	const [destinations, setDestinations] = useState()
	const [tripThemes, setTripThemes] = useState()
	const [formData, setFormData] = useState({
		full_name: '',
		email: '',
		destination: '',
		trip_tour: '',
		message: ''
	})
	const locale = useLocale()
	const t = useTranslations()
	const getDestinations = async () => {
		try {
			await axios
				.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/tour/destinations/`)
				.then(response => setDestinations(response.data.results))
		} catch (error) {
			console.error(error)
		}
	}
	const getTripThemes = async () => {
		try {
			const res = await axios.get(
				`${process.env.NEXT_PUBLIC_BACKEND_URL}/tour/trip-theme/`
			)
			setTripThemes(res.data.results)
		} catch (error) {
			console.error(error)
		}
	}
	const handleChange = e => {
		setFormData({ ...formData, [e.target.name]: e.target.value })
	}
	const handleSubmit = async e => {
		e.preventDefault()
		try {
			await axios
				.post(
					`${process.env.NEXT_PUBLIC_BACKEND_URL}/blog/tour-contact/`,
					formData
				)
				.then(response => console.log(response.data))
		} catch (error) {
			console.error(error)
		}
		toast.success('Successfully sended!')
		setFormData({
			full_name: '',
			email: '',
			destination: '',
			trip_tour: '',
			message: ''
		})
	}

	useEffect(() => {
		getDestinations()
		getTripThemes()
	}, [])

	return (
		<form
			onSubmit={handleSubmit}
			className="py-6 px-4 rounded-2xl bg-[#B4A297]"
		>
			<h2 className="text-2xl md:text-4xl lg:text-5xl w-full xl:w-[55%] mb-10 md:mb-14">
				{t('trip_finder.trip_detail.form_title')}
			</h2>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-4 lg:gap-x-6">
				<label
					htmlFor="full_name"
					className="flex flex-col gap-y-2 font-medium lg:text-lg"
				>
					<span className="lg:text-xl">{t('contact.form.full_name')}</span>
					<input
						type="text"
						name="full_name"
						id="full_name"
						placeholder={t('contact.form.full_name-placeholder')}
						onChange={handleChange}
						value={formData.full_name}
						required
						className="w-full px-4 lg:px-6 py-2 lg:py-3 rounded-lg bg-[#FFFFFF1A] focus:bg-[#FFFFFF33] focus:outline-white border border-[#CBCBCB]"
					/>
				</label>
				<label
					htmlFor="email"
					className="flex flex-col gap-y-2 font-medium lg:text-lg"
				>
					<span className="lg:text-xl">{t('contact.form.email')}</span>
					<input
						type="email"
						name="email"
						id="email"
						onChange={handleChange}
						value={formData.email}
						required
						placeholder={t('contact.form.email-placeholder')}
						className="w-full px-4 lg:px-6 py-2 lg:py-3 rounded-lg bg-[#FFFFFF1A] focus:bg-[#FFFFFF33] focus:outline-white border border-[#CBCBCB]"
					/>
				</label>
				<label
					htmlFor="destination"
					className="flex flex-col gap-y-2 font-medium lg:text-lg"
				>
					<span className="lg:text-xl">{t('contact.form.destination')}</span>
					<select
						name="destination"
						id="destination"
						required
						value={formData.destination}
						onChange={handleChange}
						className="px-4 lg:px-6 py-2 lg:py-3 rounded-lg bg-[#FFFFFF1A] focus:bg-[#FFFFFF33] focus:outline-white border border-[#CBCBCB]"
					>
						<option
							value=""
							disabled
						>
							{t('contact.form.destination-placeholder')}
						</option>
						{destinations?.map(destination => (
							<option
								key={destination.id}
								value={destination?.[`name_${locale}`]}
								className="text-[#323232]"
							>
								{destination?.[`name_${locale}`]}
							</option>
						))}
					</select>
				</label>
				<label
					htmlFor="trip_tour"
					className="flex flex-col gap-y-2 font-medium lg:text-lg mb-6"
				>
					<span className="lg:text-xl">{t('contact.form.trip_tour')}</span>
					<select
						name="trip_tour"
						id="trip_tour"
						required
						value={formData.trip_tour}
						onChange={handleChange}
						className="px-4 lg:px-6 py-2 lg:py-3 rounded-lg bg-[#FFFFFF1A] focus:bg-[#FFFFFF33] focus:outline-white border border-[#CBCBCB]"
					>
						<option
							value=""
							disabled
						>
							{t('contact.form.trip_tour-placeholder')}
						</option>
						{tripThemes?.map(theme => (
							<option
								key={theme.id}
								value={theme?.[`name_${locale}`]}
								className="text-[#323232]"
							>
								{theme?.[`name_${locale}`]}
							</option>
						))}
					</select>
				</label>
			</div>
			<label
				htmlFor="message"
				className="flex flex-col gap-y-2 md:gap-y-4 mt-4"
			>
				<span className="lg:text-xl">{t('contact.form.message')}</span>
				<textarea
					type="text"
					name="message"
					id="message"
					placeholder={t('contact.form.message-placeholder')}
					onChange={handleChange}
					value={formData.message}
					required
					className="px-4 lg:px-6 py-2 lg:py-3 h-52.5 md:h-50 lg:h-40 rounded-lg bg-[#FFFFFF1A] focus:bg-[#FFFFFF33] focus:outline-white border border-[#CBCBCB]"
				></textarea>
			</label>
			<div className="mt-6 md:mt-8 flex items-center justify-between">
				<button className="w-full md:w-45 lg:w-[320px] py-4 rounded-lg md:rounded-4xl bg-white font-semibold md:text-lg lg:text-xl text-[#656267]">
					{t('header.contact')}
				</button>
				<div className="opacity-50 text-right hidden lg:flex flex-col">
					<p>
						{t('trip_finder.trip_detail.contacts')}{' '}
						<Link href={'mailto:silroadwondres@gmail.com'}>
							silroadwondres@gmail.com
						</Link>
					</p>
					<p>
						<Link href={'tel:+998(90)1234567'}>998 (90) 123 45 67</Link>
						    
						<Link href={'tel:+998(90)1234567'}>998 (90) 123 45 67</Link>
					</p>
				</div>
			</div>
		</form>
	)
}
