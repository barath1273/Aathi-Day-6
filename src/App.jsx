import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Login from './components/Auth/Login';
import Forgot from './components/Auth/Forgot/Forgot';
import Products from './components/pages/Products';
import Sales from './components/pages/Sales';
import Quotations from './components/pages/Quotations';
import Dashboard from './components/pages/Dashboard';
import Adjustments from './components/pages/Adjustments';
import Expenses from './components/pages/Expenses';
import Transfer from './components/pages/Transfer';
import Ad_login from './components/Admin/Ad_login';
import Sale_login from './components/Sales/Sale_login';
import Acc_login from './components/Accountant/Acc_login';
import Add_new from './components/Products/Add_new';
import Categories from './components/Products/Categories';
import Sidebar from './components/home/Sidebar';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import { useNavigate } from 'react-router-dom';

// New wrapper to access location
const AppContent = () => {
  const location = useLocation();

  const hideSidebarPaths = ['/', '/forgot', '/admin-signin', '/sales-signin', '/acc-signin'];

  const shouldHideSidebar = hideSidebarPaths.includes(location.pathname);

  return (
    <div className={`app-container ${shouldHideSidebar ? 'no-sidebar' : ''}`}>
    {!shouldHideSidebar && <Sidebar />}
    <div className="main-content">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/forgot" element={<Forgot />} />
          <Route path="/admin-signin" element={<Ad_login />} />
          <Route path="/sales-signin" element={<Sale_login />} />
          <Route path="/acc-signin" element={<Acc_login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/products" element={<Products />} />
          <Route path="/sales" element={<Sales />} />
          <Route path="/quotations" element={<Quotations />} />
          <Route path="/adjustments" element={<Adjustments />} />
          <Route path="/transfer" element={<Transfer />} />
          <Route path="/expenses" element={<Expenses />} />
          <Route path="/add-new" element={<Add_new />} />
          <Route path="/categories" element={<Categories />} />
        </Routes>
      </div>
    </div>
  );
};

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
