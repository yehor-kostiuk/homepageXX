import { useState } from 'react'
import {
	Instagram,
	Linkedin,
	Mail,
	MapPin,
	Phone,
	Send,
	Twitter,
} from 'lucide-react'
import { cn } from '@/utils/cn'

export const ContactSection = () => {
	const [isSubmitting, setIsSubmitting] = useState(false)

	const handleSubmit = (e: React.MouseEvent<HTMLDivElement>) => {
		e.preventDefault()

		setIsSubmitting(true)

		setTimeout(() => {
			console.log('sended') // TODO: implement toast 

			setIsSubmitting(false)
		}, 1500)
	}

	return (
		<section id="contact" className="py-24 px-4 relative bg-secondary/30">
			<div className="container mx-auto max-w-5xl">
				<h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
					Get In <span className="text-primary"> Touch</span>
				</h2>

				<p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
					Have a project in mind or want to collaborate? Feel free to reach out.
					I'm always open to discussing new opportunities.
				</p>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-12">
					<div className="space-y-8">
						<h3 className="text-2xl font-semibold mb-6">
							{' '}
							Contact Information
						</h3>

						<div className="space-y-6 justify-center">
							<div className="flex items-start space-x-4">
								<div className="p-3 rounded-full bg-primary/10">
									<Mail className="h-6 w-6 text-primary" />{' '}
								</div>
								<div>
									<h4 className="font-medium"> Email</h4>
									<a
										href="mailto:kostukegor729@gmail.com"
										className="text-muted-foreground hover:text-primary transition-colors duration-300"
									>
										kostukegor729@gmail.com
									</a>
								</div>
							</div>
							<div className="flex items-start space-x-4">
								<div className="p-3 rounded-full bg-primary/10">
									<Phone className="h-6 w-6 text-primary" />{' '}
								</div>
								<div>
									<h4 className="font-medium"> Phone</h4>
									<a
										href="tel:+380953712069"
										className="text-muted-foreground hover:text-primary transition-colors duration-300"
									>
										+380 (95) 371-20-69
									</a>
								</div>
							</div>
							<div className="flex items-start space-x-4">
								<div className="p-3 rounded-full bg-primary/10">
									<MapPin className="h-6 w-6 text-primary" />{' '}
								</div>
								<div>
									<h4 className="font-medium"> Location</h4>
									<a
										href="https://www.google.com/maps/search/?api=1&query=Kyiv,Ukraine"
										target="_blank"
										rel="noopener noreferrer"
										className="text-muted-foreground hover:text-primary transition-colors duration-300"
									>
										Kyiv, Ukraine
									</a>
								</div>
							</div>
						</div>

						<div className="pt-8">
							<h4 className="font-medium mb-4"> Connect With Me</h4>
							<div className="flex space-x-4 justify-center">
								<div className="relative group inline-block">
									<a
										href="#"
										target="_blank"
										className="transition-transform duration-300 hover:scale-110"
									>
										<Linkedin />
									</a>
									<span className="absolute left-1/2 -translate-x-1/2 top-full mt-1 px-1.5 py-0.5 text-xs bg-gray-800 text-white rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
										LinkedIn
									</span>
								</div>
								<div className="relative group inline-block">
									<a
										href="#"
										target="_blank"
										className="transition-transform duration-300 hover:scale-110"
									>
										<Twitter />
									</a>
									<span className="absolute left-1/2 -translate-x-1/2 top-full mt-1 px-1.5 py-0.5 text-xs bg-gray-800 text-white rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
										Twitter
									</span>
								</div>
								<div className="relative group inline-block">
									<a
										href="#"
										target="_blank"
										className="transition-transform duration-300 hover:scale-110"
									>
										<Instagram />
									</a>
									<span className="absolute left-1/2 -translate-x-1/2 top-full mt-1 px-1.5 py-0.5 text-xs bg-gray-800 text-white rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
										Instagram
									</span>
								</div>
								<div className="relative group inline-block">
									<a
										href="#"
										target="_blank"
										className="transition-transform duration-300 hover:scale-110"
									>
										<Send />
									</a>
									<span className="absolute left-1/2 -translate-x-1/2 top-full mt-1 px-1.5 py-0.5 text-xs bg-gray-800 text-white rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
										Telegram
									</span>
								</div>
							</div>
						</div>
					</div>

					<div
						className="bg-card p-8 rounded-lg shadow-xs"
						onSubmit={handleSubmit}
					>
						<h3 className="text-2xl font-semibold mb-6"> Send a Message</h3>

						<form className="space-y-6">
							<div>
								<label
									htmlFor="name"
									className="block text-sm font-medium mb-2"
								>
									{' '}
									Your Name
								</label>
								<input
									type="text"
									id="name"
									name="name"
									required
									className="placeholder-color w-full px-4 py-3 rounded-md border border-input bg-background transition-all duration-300 focus:outline-hidden focus:ring-2 focus:ring-primary"
									placeholder="Bobby Bob..."
								/>
							</div>

							<div>
								<label
									htmlFor="email"
									className="block text-sm font-medium mb-2"
								>
									{' '}
									Your Email
								</label>
								<input
									type="email"
									id="email"
									name="email"
									required
									className="placeholder-color w-full px-4 py-3 rounded-md border border-input bg-background transition-all duration-300 focus:outline-hidden focus:ring-2 focus:ring-primary"
									placeholder="bob@gmail.com"
								/>
							</div>

							<div>
								<label
									htmlFor="message"
									className="block text-sm font-medium mb-2"
								>
									{' '}
									Your Message
								</label>
								<textarea
									id="message"
									name="message"
									required
									className="placeholder-color w-full px-4 py-3 rounded-md border border-input bg-background transition-all duration-300 focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
									placeholder="Hello, I'd like to talk about..."
								/>
							</div>

							<button
								type="submit"
								disabled={isSubmitting}
								className={cn(
									'cosmic-button w-full flex items-center justify-center gap-2 cursor-pointer',
									{
										'cursor-default opacity-80': isSubmitting,
										'cursor-pointer': !isSubmitting,
									}
								)}
							>
								{isSubmitting ? 'Sending...' : 'Send Message'}
								<Send size={16} />
							</button>
						</form>
					</div>
				</div>
			</div>
		</section>
	)
}
