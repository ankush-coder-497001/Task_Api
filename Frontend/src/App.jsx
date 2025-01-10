import { useState } from 'react'
import './App.css'
import RegisterForm from './components/RegisterForm'
import LoginForm from './components/LoginForm'
import ForgotPasswordForm from './components/ForgotPasswordForm'

function App() {
  const [currentForm, setCurrentForm] = useState('register')

  return (
    <div className="min-h-screen bg-sky-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        {currentForm === 'register' && <RegisterForm onSwitch={() => setCurrentForm('login')} />}
        {currentForm === 'login' && (
          <LoginForm
            onSwitch={() => setCurrentForm('register')}
            onForgot={() => setCurrentForm('forgot')}
          />
        )}
        {currentForm === 'forgot' && <ForgotPasswordForm onSwitch={() => setCurrentForm('login')} />}
      </div>
    </div>
  )
}

export default App
