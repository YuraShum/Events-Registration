import responseHandlers from "../handlers/responseHandlers.js";
import EventModel from "../models/event.model.js";
import listenerModel from "../models/listener.model.js";

class EventService {

    async getAllEvents(request, response) {
        try {
            
            const events = await EventModel.find()

            console.log(events)
            responseHandlers.ok(response, events)
        } catch (error) {
            responseHandlers.error(response)
        }
    }

    async getEventInformation(request, response) {
        try {
            const { eventId } = request.params

            const event = await EventModel.findById(eventId)
            .populate({
                path: 'userListeners',
                select: 'fullname email dateOfBirth eventSources',
                populate: {
                    path: 'eventSources.eventId',
                    select: 'source',
                    match: { _id: eventId }
                }
            });

            if (!event) {
                responseHandlers.notFound(response, "This event does not exist")
            }
            responseHandlers.ok(response, event)
        } catch (error) {
            responseHandlers.error(response)
        }
    }

    async addUserToEvent(request, response) {
        try {
            const { eventId } = request.params;
            const { fullname, email, dateOfBirth, source } = request.body;


            let existingListener = await listenerModel.findOne({ email });

            if (!existingListener) {
                existingListener = new listenerModel({
                    fullname,
                    email,
                    dateOfBirth,
                    eventSources: [{ eventId, source }]
                });
                await existingListener.save();
            }else {
                const existingSource = existingListener.eventSources.find(item => item.eventId.toString() === eventId);

                if (existingSource) {
                    return responseHandlers.conflict(response, "This user is already registered for this event.");
                }
    
                existingListener.eventSources.push({ eventId, source });
                await existingListener.save();
            }

            const event = await EventModel.findById(eventId);
            if (!event) {
                return responseHandlers.notFound(response, "This event does not exist");
            }

            const isAlreadyListener = event.userListeners.includes(existingListener._id);
            if (isAlreadyListener) {
                return responseHandlers.conflict(response, "This user is already registered for the event.");
            }

            event.userListeners.push(existingListener._id);
            await event.save();

            responseHandlers.created(response, existingListener);
        } catch (error) {
            responseHandlers.error(response);
        }
    }

    async createNewEvent(request, response) {
        try {
            const { title, description, eventDate, organizer } = request.body

            const newEvent = new EventModel(
                {
                    title,
                    description,
                    eventDate,
                    organizer,

                }
            )
            await newEvent.save()
            responseHandlers.created(response, newEvent)
        } catch (error) {
            responseHandlers.error(response)
        }
    }
}

export default new EventService