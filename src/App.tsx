import { Routes, Route } from 'react-router-dom'
import Page404 from './assets/pages/404/Page404'
import ProtectedRoute from './assets/components/ProtectedRoute'
import Main from './assets/pages/Main/Main'


function App() {

  return (
      <Routes>
        
        <Route path="/login" element={<h1>Home</h1>} />
        
        <Route path="*" element={<Page404/>} />


        <Route path="/" element={<Main/>} />
        <Route element={<ProtectedRoute/>}>
          <Route path="/dashboard" element={<h1>Dashboard</h1>} />
        </Route>
      </Routes>
  )
}

export default App
