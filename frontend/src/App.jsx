import { Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import WisataPage from './pages/WisataPage';
import FasilitasPage from './pages/FasilitasPage';
import UmkmPage from './pages/UmkmPage';
import BeritaPage from './pages/BeritaPage';
import KontakPage from './pages/KontakPage';
import GaleriPage from './pages/GaleriPage';
import LoginPage from "./pages/LoginPage";
import AdminPage from "./admin/AdminPage";
import RegisterPage from "./pages/RegisterPage";
import AdminUMKM from "./admin/AdminUMKM";
import AdminMessages from "./admin/AdminMessages";
import AdminNews from "./admin/AdminNews";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <div>
      <Routes>
        {/* Users */}
        <Route path='/' Component={HomePage} />
        <Route path='/wisata' Component={WisataPage} />
        <Route path='/fasilitas' Component={FasilitasPage} />
        <Route path='/umkm' element={<PrivateRoute element={<UmkmPage />} />} />
        <Route path='/berita' element={<PrivateRoute element={<BeritaPage />} />} />
        <Route path='/galeri' element={<PrivateRoute element={<GaleriPage />} />} />
        <Route path='/kontak' element={<PrivateRoute element={<KontakPage />} />} />
        <Route path='/register' Component={RegisterPage} />
        <Route path='/login' Component={LoginPage} />

        {/* Admin */}
        <Route path='/admin' element={<PrivateRoute element={<AdminPage />} />} />
        <Route path='/admin/messages' element={<PrivateRoute element={<AdminMessages />} />} />
        <Route path='/admin/umkm' element={<PrivateRoute element={<AdminUMKM />} />} />
        <Route path='/admin/news' element={<PrivateRoute element={<AdminNews />} />} />
      </Routes>
    </div>
  );
}

export default App;
