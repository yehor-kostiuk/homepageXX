import { useEffect, useState } from 'react'
import type { Star } from '@/types/star.type'
import type { Meteor } from '@/types/meteor.type'
import { generateStars } from '@/utils/generateStars'
import { generateMeteors } from '@/utils/generateMeteors'

export const SpaceBackground = () => {
	const [stars, setStars] = useState<Star[]>([])
	const [meteors, setMeteors] = useState<Meteor[]>([])

	useEffect(() => {
		setStars(generateStars())
		setMeteors(generateMeteors())

		const handleResize = () => setStars(generateStars())

		window.addEventListener('resize', handleResize)
		return () => window.removeEventListener('resize', handleResize)
	}, [])

	return (
		<div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
			{stars.map(star => (
				<div
					key={star.id}
					className="star animate-pulse-subtle"
					style={{
						width: `${star.size}px`,
						height: `${star.size}px`,
						left: `${star.x}%`,
						top: `${star.y}%`,
						opacity: star.opacity,
						animationDuration: `${star.animationDuration}s`,
					}}
				/>
			))}

			{meteors.map(meteor => (
				<div
					key={meteor.id}
					className="meteor animate-meteor"
					style={{
						width: `${meteor.size * 50}px`,
						height: `${meteor.size * 2}px`,
						left: `${meteor.x}%`,
						top: `${meteor.y}%`,
						animationDelay: `${meteor.delay}s`,
						animationDuration: `${meteor.animationDuration}s`,
					}}
				/>
			))}
		</div>
	)
}
