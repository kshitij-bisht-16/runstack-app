import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import AppLayout from './layouts/AppLayout'
import AuthLayout from './layouts/AuthLayout'
import Dashboard from './pages/Dashboard'
import AIAgents from './pages/AIAgents'
import Conversations from './pages/Conversations'
import ContentLibrary from './pages/ContentLibrary'
import Analytics from './pages/Analytics'
import Billing from './pages/Billing'
import Settings from './pages/Settings'
import BrandContextDetail from './pages/BrandContextDetail'
import GeneratedContentDetail from './pages/GeneratedContentDetail'
import Login from './pages/Login'
import Signup from './pages/Signup'
import ForgotPassword from './pages/ForgotPassword'
import CheckYourEmail from './pages/CheckYourEmail'
import LandingPage from './pages/LandingPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* App routes */}
        <Route element={<AppLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/agents" element={<AIAgents />} />
          <Route path="/conversations" element={<Conversations />} />
          <Route path="/content" element={<ContentLibrary />} />
          <Route path="/content/brand/:id" element={<BrandContextDetail />} />
          <Route path="/content/generated/:id" element={<GeneratedContentDetail />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/billing" element={<Billing />} />
          <Route path="/settings" element={<Settings />} />
        </Route>

        {/* Auth routes */}
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/check-email" element={<CheckYourEmail />} />
        </Route>

        {/* Landing page */}
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
