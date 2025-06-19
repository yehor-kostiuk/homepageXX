import type { Meteor } from '@/types/meteor.type'

export const generateMeteors = (): Meteor[] => {
	const numberOfMeteors = 5

	return Array.from({ length: numberOfMeteors }, (_, i) => ({
		id: i,
		size: Math.random() * 2 + 1,
		x: Math.random() * 80,
		y: Math.random() * 20,
		delay: Math.random() * 15,
		animationDuration: Math.random() * 3 + 3,
	}))
}
