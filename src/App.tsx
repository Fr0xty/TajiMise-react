import './App.scss';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './utils/fetchInterceptor';
import './utils/i18next';

import About from './pages/About';
import Account from './pages/Account';
import Cart from './pages/Cart';
import Home from './pages/Home';
import LoginOptions from './pages/LoginOptions';
import Products from './pages/Products';
import AdminProfile from './pages/AdminProfile';
import AdminProfileForm from './pages/AdminProfileForm';

const App = () => {
    return (
        <div className="app">
            <Router>
                <Routes>
                    {/* homepage pages */}
                    <Route index element={<Home />} />
                    <Route path="products" element={<Products />} />
                    <Route path="about" element={<About />} />

                    {/* verification stage */}
                    <Route path="login" element={<LoginOptions />} />

                    {/* account navigations */}
                    <Route path="account" element={<Account />} />
                    <Route path="cart" element={<Cart />} />

                    {/* admin info */}
                    <Route path="admin/:adminHandle">
                        <Route index element={<AdminProfile />} />
                        <Route path="edit-profile" element={<AdminProfileForm />} />
                    </Route>
                </Routes>
            </Router>
        </div>
    );
};

export default App;
