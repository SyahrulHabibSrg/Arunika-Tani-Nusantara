import { Routes, Route } from "react-router-dom";

import HomePage from './pages/HomePage';
import UmkmPage from './pages/UmkmPage';
import BeritaPage from './pages/BeritaPage';
import KontakPage from './pages/KontakPage';
import WisataPage from './pages/WisataPage';
import GaleriPage from './pages/GaleriPage';
import FasilitasPage from './pages/FasilitasPage';
import LoginComponents from "./pages/LoginPage";
import AdminPage from "./admin/AdminPage";
import RegisterPage from "./pages/RegisterPage";
import AdminUMKM from "./admin/AdminUMKM";
import AdminMessages from "./admin/adminMessages";
import AdminNews from "./admin/AdminNews";


function App() {
  return(
  <div>
    <Routes>
      <Route path='/' Component={HomePage} />
      <Route path='/wisata' Component={WisataPage} />
      <Route path='/fasilitas' Component={FasilitasPage} />
      <Route path='/umkm' Component={UmkmPage} />
      <Route path='/galeri' Component={GaleriPage} />
      <Route path='/berita' Component={BeritaPage} />
      <Route path='/kontak' Component={KontakPage} />
      <Route path='/login' Component={LoginComponents} />
      <Route path='/register' Component={RegisterPage} />
      <Route path='/admin' Component={AdminPage} />
      <Route path='/admin/messages' Component={AdminMessages} />
      <Route path='/admin/umkm' Component={AdminUMKM} />
      <Route path='/admin/news' Component={AdminNews} />
    </Routes>
  </div>
  )
}

export default App
