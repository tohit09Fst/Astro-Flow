import astroModel from "../models/astroModel.js";

const addAstro = async (req, res) => {
    try {
        const data = req.body;
        const { email } = req.body;

        const checkAstro = await astroModel.findOne({ email: email });

        if (checkAstro) {
            return res.status(200).send({ message: "Astrologer already exists" });
        }

        const newAstro = await astroModel.create(data);
        return res.status(200).send({
            status: "ok",
            message: newAstro
        });
    } catch (error) {
        return res.status(500).send({
            status: "Failed",
            message: error.message
        });
    }
};

const assignUserToAstro = async (req, res) => {
    try {
        let astrologers = await astroModel.find({}).sort({ flowCount: -1 });

        if (!astrologers.length) {
            return res.status(404).send({ message: "No astrologers found" });
        }

        let assignedAstro = astrologers[0];
        assignedAstro.flowCount += 1;

        res.status(200).send({ astrologerId: assignedAstro._id });
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};

const toggleTopAstro = async (req, res) => {
    try {
        const { astroId } = req.params;

        let astro = await astroModel.findById(astroId);
        astro.top = !astro.top;

        res.status(200).send({ message: astro });
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};

export { addAstro, assignUserToAstro, toggleTopAstro }; 
