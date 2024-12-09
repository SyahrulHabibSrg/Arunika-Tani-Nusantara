import { Routes, Route } from "react-router-dom";

import HomePage from './pages/HomePage';
import UmkmPage from './pages/UmkmPage';
import BeritaPage from './pages/BeritaPage';
import KontakPage from './pages/KontakPage';
import WisataPage from './pages/WisataPage';
import GaleriPage from './pages/GaleriPage';
import FasilitasPage from './pages/FasilitasPage';
import Login from "./components/Login";
import AdminPage from "./admin/AdminPage";
import Daftar from "./components/Daftar";

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
      <Route path='/admin' Component={AdminPage} />
      <Route path='/login' Component={Login} />
      <Route path='/daftar' Component={Daftar} />
    </Routes>
  </div>
  )
}

export default App
