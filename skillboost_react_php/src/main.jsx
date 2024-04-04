//Vào đây để định tuyến trang web
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import TrangChu from './pages/TrangChu.jsx'
import './index.css'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import TrangChu_DSKhoaHoc from './pages/TrangChu_DSKhoaHoc.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}></Route>
        <Route path='/trangchu' element={<TrangChu />}></Route>
        <Route path='/trangchukhoahoc' element={<TrangChu_DSKhoaHoc />}></Route>
        <Route path='/lienhe' element={<TrangChu />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
