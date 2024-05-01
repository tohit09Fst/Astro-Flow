import express from 'express';
import { addAstro, assignUserToAstro, toggleTopAstro } from '../controllers/astroController.js';

const router = express.Router();

router.post('/addastro', addAstro);
router.post('/assignuser', assignUserToAstro);
router.put('/toggletopastro/:astroId', toggleTopAstro);

export default router;
