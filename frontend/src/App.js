import React from 'react';
import Navbar from "./component/Navbar";
import Beranda from "./component/Beranda";
import ManajemenKeuangan from './component/ManajemenKeuangan';
import AddAnggaran from './component/AddAnggaran';
import EditAnggaran from './component/EditAnggaran';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css'

function App() {
  return (
    <div className="container mx-auto py-10">
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path='/' element={<Beranda />} />
          <Route path='/manajemen-keuangan' element={<ManajemenKeuangan />} />
          <Route path='/add-anggaran' element={<AddAnggaran />} />
          <Route path='/edit-anggaran/:id' element={<EditAnggaran />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
