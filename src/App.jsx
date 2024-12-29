import Navbar from "./components/Navbar";
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from "./pages/Home"
import About from "./pages/About"
import Services from "./pages/Services"
import Contacts from "./pages/Contact"
import NotFound from "./pages/NotFound"
import './App.css';

const App = () => {
    return (
        <div className="app-container">
            {/* Creating Routes */}
            <BrowserRouter>
                <Navbar/><hr />
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/about" element={<About/>} />
                    <Route path="/services" element={<Services/>} />
                    <Route path="/contacts" element={<Contacts/>} />
                    <Route path="*" element={<NotFound/>} />
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default App
