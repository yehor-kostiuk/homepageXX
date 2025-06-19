import { SpaceBackground } from '@/components/SpaceBackground'
import { ThemeToggle } from '@/components/ThemeToggle'

export const HomePage = () => {
	return (
		<div className="min-h-screen bg-background text-foreground overflow-x-hidden">
			{/* Theme Toggle */}
			<ThemeToggle />
			{/* Background Effects */}
			<SpaceBackground />
			{/* Navbar */}

			{/* Main Content */}

			{/* Footer */}
		</div>
	)
}
