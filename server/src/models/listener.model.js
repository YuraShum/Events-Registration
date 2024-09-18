import mongoose from "mongoose";

const listenerShema = mongoose.Schema({
    fullname: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    dateOfBirth: {
        type: Date,
        required: true,
    },
    source: {
        type: String,
        required: true,
    }
}, { timestamps: true })

const listenerModel = mongoose.model('Listener', listenerShema)

export default listenerModel