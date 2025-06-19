import { useState, useEffect, useRef } from 'react'
import { Sun, Moon } from 'lucide-react'
import { cn } from '@/utils/cn'

export const ThemeToggle = () => {
	const [isDarkMode, setIsDarkMode] = useState(false)
	const buttonRef = useRef<HTMLButtonElement>(null)

	useEffect(() => {
		const storedTheme = localStorage.getItem('theme')
		if (storedTheme === 'dark') {
			setIsDarkMode(true)
			document.documentElement.classList.add('dark')
		} else {
			localStorage.setItem('theme', 'light')
			setIsDarkMode(false)
		}
	}, [])

	const toggleTheme = () => {
		if (isDarkMode) {
			document.documentElement.classList.remove('dark')
			localStorage.setItem('theme', 'light')
			setIsDarkMode(false)
		} else {
			document.documentElement.classList.add('dark')
			localStorage.setItem('theme', 'dark')
			setIsDarkMode(true)
		}

		buttonRef.current?.blur()
	}

	return (
		<button
			ref={buttonRef}
			onClick={toggleTheme}
			className={cn(
				'fixed top-5 right-0 z-50 p-2 rounded-full transition-colors duration-300 cursor-pointer group',
				'focus:outline-none',
				'md:top-3.5 md:right-5'
			)}
		>
			{isDarkMode ? (
				<Sun className="h-6 w-6 text-yellow-300 transition-transform duration-200 group-hover:scale-110 group-focus:scale-120 group-focus:text-orange-400" />
			) : (
				<Moon className="h-6 w-6 text-blue-900 transition-transform duration-200 group-hover:scale-110 group-focus:scale-120 group-focus:text-violet-800" />
			)}
		</button>
	)
}
