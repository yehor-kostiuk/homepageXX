import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import { RenderProvider } from './utils/RenderProvider'
import { HomePage } from './pages/Home'

export const App = () => {
	return (
		<>
			<RenderProvider />
			<BrowserRouter>
				<Routes>
					<Route index element={<HomePage />} />
					<Route path="*" element={<Navigate to="/" replace />} />
				</Routes>
			</BrowserRouter>
		</>
	)
}
