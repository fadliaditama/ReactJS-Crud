import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'

function AddAnggaran(){
    const [nama_anggaran, setNamaAnggaran] = useState('');
    const [penanggung_jawab, setPenanggungJawab] = useState('');
    const [jumlah_anggaran, setJumlahAnggaran] = useState('');
    const navigate = useNavigate();

    const saveAnggaran = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:5000/anggaran', {
            nama_anggaran: nama_anggaran,
            penanggung_jawab: penanggung_jawab,
            jumlah_anggaran: jumlah_anggaran
        });
        alert("Data berhasil ditambah");
        navigate("/manajemen-keuangan");
    }

    return(
        <div>
            {/* Form Tambah */}
                <div>
                <h1 className="font-bold">Tambah Datas</h1>
                    <form onSubmit={ saveAnggaran }>
                        <div className="grid xl:grid-cols-2 xl:gap-6">
                            <div className="relative z-0 w-full mb-6 group">
                                <input type="text" name="namaAnggaran" id="namaAnggaran" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " value={nama_anggaran} onChange={ (e) => setNamaAnggaran(e.target.value)} required />
                                <label htmlFor="namaAnggaran" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Nama Anggaran</label>
                            </div>
                            <div className="relative z-0 w-full mb-6 group">
                                <input type="text" name="penanggungJawab" id="penanggungJawab" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " value={penanggung_jawab} onChange={ (e) => setPenanggungJawab(e.target.value)} required />
                                <label htmlFor="penanggungJawab" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Penanggung Jawab</label>
                            </div>
                        </div>
                        <div className="grid xl:grid-cols-2 xl:gap-6">
                            <div className="relative z-0 w-full mb-6 group">
                                <input type="text" name="jumlahAnggaran" id="jumlahAnggaran" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " value={jumlah_anggaran} onChange={ (e) => setJumlahAnggaran(e.target.value)} required />
                                <label htmlFor="jumlahAnggaran" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Jumlah Anggaran</label>
                            </div>
                        </div>
                        <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Tambah Data</button>
                    </form>
                </div>
            {/* End Form Tambah */}
        </div>
    )
}

export default AddAnggaran;