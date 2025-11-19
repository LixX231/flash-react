import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { PageSelectSet } from './components/PageSelectSet'
import { PageViewSet } from './components/PageViewSet'
import { PageCreateSet } from './components/PageCreateSet'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageSelectSet/>} />
        <Route path="/set" element={<PageViewSet/>} />
        <Route path="/admin" element={<PageCreateSet/>} />
        <Route path="*" element={<PageSelectSet/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App