import { useState } from 'react'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import './App.css'
import Login from './components/Auth/Login'
import Home from './components/home/Home'
import Forgot from './components/Auth/Forgot'
import Products from './components/pages/Products'
import Sales from './components/pages/Sales'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Quotations from './components/pages/Quotations'
import Dashboard from './components/pages/Dashboard'
import Adjustments from './components/pages/Adjustments'
import Expenses from './components/pages/Expenses'
import Transfer from './components/pages/Transfer'
import 'bootstrap-icons/font/bootstrap-icons.css';



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login/> }/>
          <Route path='/home' element={<Home/>}>
            <Route path='products' element={<Products />} />
            <Route path='sales' element={<Sales />} />
            <Route path='quotations' element={<Quotations />}/>
            <Route path='dashboard' element={<Dashboard />}/>
            <Route path='adjustments' element={<Adjustments />}/>
            <Route path='transfer' element={<Transfer />}/>
            <Route path='expenses' element={<Expenses />}/>
          </Route>
          <Route path='/forgot' element={<Forgot />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
