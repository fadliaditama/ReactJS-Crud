import express from "express";
import { getAllAnggaran, createAnggaran, getAnggaranById, updateAnggaran, deleteAnggaran } from "../controllers/Anggaran.js";

const router = express.Router();

router.get('/', getAllAnggaran);
router.get('/:id', getAnggaranById);
router.post('/', createAnggaran);
router.patch('/:id', updateAnggaran);
router.delete('/:id', deleteAnggaran);


export default router;