import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const Anggaran = db.define('data_anggaran',{
    nama_anggaran:{
        type: DataTypes.STRING
    },
    penanggung_jawab:{
        type: DataTypes.STRING
    },
    jumlah_anggaran:{
        type: DataTypes.INTEGER
    }
},{
    freezeTableName: true
});

export default Anggaran;