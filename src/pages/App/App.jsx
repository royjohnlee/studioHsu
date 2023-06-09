import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import GalleryPage from '../GalleryPage/GalleryPage';
import PricingPage from '../PricingPage/PricingPage';
import ContactPage from '../ContactPage/ContactPage';
import HomePage from '../HomePage/HomePage';
import NavBar from '../../components/NavBar/NavBar';

export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      {user ?
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            {/* Route components in here */}
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/gallery" element={<GalleryPage user={user} />}></Route>
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/contact" element={<ContactPage user={user} />} />
          </Routes>
        </>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}
