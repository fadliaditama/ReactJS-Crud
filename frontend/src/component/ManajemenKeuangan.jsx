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

    // Variabel Fungsi Show Tombol Tambah & Edit
    const [form, setForm] = useState("");

    function showEdit(){
        setForm("edit");
    }

    function showCreate(){
        setForm("create");
    }
    // End Variabel Fungsi Show Tombol Tambah & Edit
    return(
        <div className="py-10">
        <h1 className="text-center text-2xl py-5 font-bold">Manajemen Keuangan</h1>

        {/* Form Ubah */}
        {form == "edit" && (
            <div>
                <form>
                    <div className="grid xl:grid-cols-2 xl:gap-6">
                        <div className="relative z-0 w-full mb-6 group">
                            <input type="text" name="namaAnggaran" id="namaAnggaran" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label for="namaAnggaran" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Nama Anggaran</label>
                        </div>
                        <div className="relative z-0 w-full mb-6 group">
                            <input type="text" name="penanggungJawab" id="penanggungJawab" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label for="penanggungJawab" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Penanggung Jawab</label>
                        </div>
                    </div>
                    <div className="grid xl:grid-cols-2 xl:gap-6">
                        <div className="relative z-0 w-full mb-6 group">
                            <input type="text" name="jumlahAnggaran" id="jumlahAnggaran" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label for="jumlahAnggaran" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Jumlah Anggaran</label>
                        </div>
                    </div>
                    <button type="submit" value="Ubah" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Ubah Data</button>
                </form>
            </div>
        )}
        {/* End Form Ubah */}

        {/* Daftar Anggaran */}
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <Link to="/add-anggaran" className="bg-blue-700 hover:bg-blue-800 text-white py-2 px-4 rounded" onClick={showCreate}>Tambah Data Anggaran</Link>
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
                                <button className="font-medium text-blue-600 px-5" onClick={showEdit}>Edit</button>
                                <button className="font-medium text-red-600">Hapus</button>
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