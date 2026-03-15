import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import SignUp from './pages/signUp'
import Login from './pages/login'
import { AuthProvider } from './context/AuthContext'
import SendMoney from './pages/SendMoney'
import AccountStatement from './pages/AccountStatement'


const App = () => {
  return (

    <AuthProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/sendmoney" element={<SendMoney/>} />
        <Route path="/accountstatement" element={<AccountStatement/>} />
      </Routes>
    </BrowserRouter>
    </AuthProvider>
  )
}

export default App