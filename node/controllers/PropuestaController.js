import PropuestaModel from '../models/PropuestaModel.js';

export const getAllPropuestas = async (req, res) => {
    try {
        console.log('Intentando obtener propuestas...');
        const propuestas = await PropuestaModel.findAll({
            attributes: ['nom_cand', 'inf_pro', 'pub_pro', 'nom_pro']  // Solo selecciona estos campos
        });

        console.log('Propuestas encontradas:', propuestas);

        if (!propuestas || propuestas.length === 0) {
            return res.status(404).json({ message: 'No se encontraron propuestas' });
        }

        res.json(propuestas);
    } catch (error) {
        console.error('Error en getAllPropuestas:', error);
        res.status(500).json({ message: error.message });
    }
};