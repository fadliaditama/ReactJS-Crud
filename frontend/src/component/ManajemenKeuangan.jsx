import { useEffect, useState } from "react";
import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function ManajemenKeuangan(){
    // Variabel Fungsi Get Database
    const[anggaran, setAnggaran] = useState([]);

    useEffect(() => {
        getAnggaran();
    }, []);
    const getAnggaran = async() => {
        const response = await axios.get('http://localhost:5000/anggaran');
        setAnggaran(response.data)
    }
    // End Variabel Fungsi Get Database

    const deleteAnggaran = async (id) =>{
        await axios.delete(`http://localhost:5000/anggaran/${id}`);
        getAnggaran();
    }

    return(
        <div className="py-10">
        <h1 className="text-center text-2xl py-5 font-bold">Manajemen Keuangan</h1>

        {/* Daftar Anggaran */}
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <Link to="/add-anggaran" className="bg-blue-700 hover:bg-blue-800 text-white py-2 px-4 rounded">Tambah Data Anggaran</Link>
                <table className="w-full text-sm text-left text-gray-500 ">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                No.
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Nama Anggaran
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Penanggung Jawab
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Jumlah Anggaran
                            </th>
                            <th scope="col" className="px-20 py-3">
                                Aksi
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                    { anggaran.map((anggaran, index) => (
                        <tr key={anggaran.id} className="bg-white border-b">
                            <td className="px-6 py-4">{ index + 1 }</td>
                            <td className="px-6 py-4 font-medium text-gray-900">{ anggaran.nama_anggaran }</td>
                            <td className="px-6 py-4">{ anggaran.penanggung_jawab }</td>
                            <td className="px-6 py-4">{ anggaran.jumlah_anggaran }</td>
                            <td className="px-6 py-4 text-right">
                                <Link to={`/edit-anggaran/${anggaran.id}`} className="font-medium text-blue-600 px-5">Edit</Link>
                                <button onClick={ () => deleteAnggaran(anggaran.id) } className="font-medium text-red-600">Hapus</button>
                            </td>
                        </tr>
                    )) }
                    </tbody>
                </table>
            </div>
            {/* End Daftar Anggaran */}
        </div>
    )
}

export default ManajemenKeuangan;