import AnggaranModels from "../models/anggaranModel.js";

export const getAllAnggaran = async (req, res) => {
    try{
        const anggaran = await AnggaranModels.findAll();
        res.json(anggaran);
    } catch(error){
        res.json({ message: error.message });
    }
}

export const getAnggaranById = async (req, res) => {
    try{
        const anggaranId = await AnggaranModels.findAll({
            where: {
                id: req.params.id
            }
        });
        res.json(anggaranId[0]);
        console.log(anggaranId)
    } catch(error){
        res.json({ message: error.message });
    }
}

export const createAnggaran = async (req, res) => {
    try{
        await AnggaranModels.create(req.body);
        res.json({
            "message": "Anggaran Created"
        });
    } catch(error){
        res.json({ message: error.message });
    }
}

export const updateAnggaran = async (req, res) => {
    try{
        await AnggaranModels.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Anggaran Terupdated"
        });
    } catch(error){
        res.json({ message: error.message });
    }
}

export const deleteAnggaran = async (req, res) => {
    try{
        await AnggaranModels.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Anggaran Terhapus"
        });
    } catch(error){
        res.json({ message: error.message });
    }
}