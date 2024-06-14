import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import 'react-toastify/dist/ReactToastify.css'
import Login from './pages/Login'
import Register from './pages/Register'
import { ToastContainer } from 'react-toastify'
import Layout from './pages/Layout'
import HomePageLayout from './components/HomePageLayout'
import { RecoilRoot } from 'recoil'
import AddMoney from './pages/AddMoney'
import SpendMoney from './pages/SpendMoney'
import Statistics from './pages/Statistics'


// Todo: Add Desc,Sender,Receiver in Db also Show in Transactions
function App() {

  return (
    <>
    <BrowserRouter>
    <RecoilRoot>
    <ToastContainer
    position="top-right"
    autoClose={3000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    draggable
    pauseOnHover
    theme="light"
    />
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/signUp' element={<Register/>}/>
        <Route path='/home' element={<Layout/>}>
          <Route path='/home/v1' element={<HomePageLayout/>}/>
          <Route path='/home/addMoney' element={<AddMoney/>}/>
          <Route path='/home/spendMoney' element={<SpendMoney/>}/> 
          <Route path='/home/stats' element={<Statistics/>}/>
        </Route>
      </Routes>
      </RecoilRoot>
    </BrowserRouter>
    </>
  )
}

export default App
