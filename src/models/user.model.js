import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
        index: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true
    },
    fullName: {
        type: String,
        trim: true,
        index: true,
        required: true
    },
    avatar: {
        type: String, //cloudnary
        required: true
    },
    coverImage: {
        type: String//cloudnary
    },
    password: {
        type: String,
        trim: true,
        required: [true, "Password is required"]
    },
    refreshToken: {
        type: String,
        required: true
    },
    watchHistory: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Video"
        }
    ]
}, { timestamps: true });

export const User = mongoose.model("User", userSchema);