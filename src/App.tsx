import './App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import About from './pages/About';
import Account from './pages/Account';
import Cart from './pages/Cart';
import Home from './pages/Home';
import LoginOptions from './pages/LoginOptions';
import Products from './pages/Products';
import { registerFetchInterceptor } from './utils/fetchInterceptor';

const App = () => {
    registerFetchInterceptor();

    return (
        <div className="app">
            <Router>
                <Routes>
                    {/* homepage pages */}
                    <Route path="/" element={<Home />} />
                    <Route path="/products" element={<Products />}></Route>
                    <Route path="/about" element={<About />}></Route>

                    {/* verification stage */}
                    <Route path="/login" element={<LoginOptions />}></Route>

                    {/* account navigations */}
                    <Route path="/account" element={<Account />}></Route>
                    <Route path="/cart" element={<Cart />}></Route>
                </Routes>
            </Router>
        </div>
    );
};

export default App;
