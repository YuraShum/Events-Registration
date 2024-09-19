import mongoose from "mongoose";

const sourceSchema = new mongoose.Schema({
    eventId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Event',
        required: true
    },
    source: {
        type: String,
        required: true
    }
}, { _id: false });

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
    eventSources: [sourceSchema] 
}, { timestamps: true })

const listenerModel = mongoose.model('Listener', listenerShema)

export default listenerModel