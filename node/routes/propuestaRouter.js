// propuestaRouter.js
import express from 'express';
import { getAllPropuestas } from '../controllers/PropuestaController.js'; // Importa tu controlador

const router = express.Router();

// Ruta para obtener todas las propuestas
router.get('/', getAllPropuestas); // Cambia esto si la ruta no es /propuestas

export default router;
