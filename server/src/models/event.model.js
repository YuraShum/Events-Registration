import mongoose from "mongoose";

const eventShema = mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true,
    },
    eventData: {
        type: Date,
        required: true,
    },
    organizer: {
        type: String,
        required: true,
    },
    userListeners:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Listener'
        }
    ]
}, { timestamps: true })

const EventModel = mongoose.model("Event", eventShema)

export default EventModel