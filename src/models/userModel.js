import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    gender: {
        type: String,
        required: true,
        enum: ['male', 'female', 'other']
    },
    dob: {
        type: String,
        required: true,
        trim: true
    },
    phone: {
        type: String,
        minLength: 10
    },
    email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: true
    },
    password: {
        type: String,
        minLength: 4,
        maxLength: 20,
        trim: true,
        required: true
    },
    assignedAstro: {
        type: mongoose.Types.ObjectId,
        ref: "AstroData"
    }
}, { timestamps: true });

export default mongoose.model("UserData", userSchema);
