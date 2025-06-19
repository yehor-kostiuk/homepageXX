import type { Star } from '@/types/star.type'

export const generateStars = (): Star[] => {
	const numberOfStars = Math.floor(
		(window.innerWidth * window.innerHeight) / 10000
	)

	return Array.from({ length: numberOfStars }, (_, i) => ({
		id: i,
		size: Math.random() * 3 + 1,
		x: Math.random() * 100,
		y: Math.random() * 100,
		opacity: Math.random() * 0.5 + 0.5,
		animationDuration: Math.random() * 4 + 2,
	}))
}
