import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import { HomePage } from './pages/Home'

export const App = () => {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route index element={<HomePage />} />
					<Route path="*" element={<Navigate to="/" replace />} />
				</Routes>
			</BrowserRouter>
		</>
	)
}
