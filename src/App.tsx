import './App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import About from './pages/About';
import Account from './pages/Account';
import Cart from './pages/Cart';
import Home from './pages/Home';
import LoginOptions from './pages/LoginOptions';
import Products from './pages/Products';
import { registerFetchInterceptor } from './utils/fetchInterceptor';
import AdminProfile from './pages/AdminProfile';
import Sell from './pages/Sell';
import Orders from './pages/Orders';

const App = () => {
    registerFetchInterceptor();

    return (
        <div className="app">
            <Router>
                <Routes>
                    {/* homepage pages */}
                    <Route path="/" element={<Home />} />
                    <Route path="/products" element={<Products />} />
                    <Route path="/about" element={<About />} />

                    {/* verification stage */}
                    <Route path="/login" element={<LoginOptions />} />

                    {/* account navigations */}
                    <Route path="/account" element={<Account />} />
                    <Route path="/cart" element={<Cart />} />

                    {/* admin info */}
                    <Route path="/admin/:adminHandle" element={<AdminProfile />} />

                    {/* admin product nav */}
                    <Route path="/sell" element={<Sell />} />
                    <Route path="/orders" element={<Orders />} />
                </Routes>
            </Router>
        </div>
    );
};

export default App;
