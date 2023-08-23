import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },
        desc: {
            type: String,
            required: true
        },
        img: {
            type: String,
            required: true
        },
        content: {
            type: String,
            required: true
        },
        userName: {
            type: String,
            required: true
        },
    },
    { timeStamps: true }
);

export default mongoose.models.Post || mongoose.model("Post", postSchema);