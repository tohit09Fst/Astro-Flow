import userModel from "../models/userModel.js";
import { assignUserToAstro, toggleTopAstro } from "./astroController.js";

const createUser = async (req, res) => {
    try {
        const data = req.body;
        const { email } = req.body;

        const checkUser = await userModel.findOne({ email: email });

        if (checkUser) {
            return res.status(200).send({ message: "User already exists" });
        }

        const newUser = await userModel.create(data);
        await newUser.populate("assignedAstro");

        return res.status(200).send({
            status: "ok",
            message: newUser
        });
    } catch (error) {
        return res.status(500).send({
            status: "Failed",
            message: error.message
        });
    }
};

export { createUser,assignUserToAstro, toggleTopAstro};