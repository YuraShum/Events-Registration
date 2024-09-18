import publicUser from "../client/public.client"
import eventEndpointsConfig from "../endpoints/event/config"

const eventApi = {
    getAllEvents: async () => {
        try {
            const response = await publicUser.get(
                eventEndpointsConfig.getAllEvents
            )
            return {response}
        } catch (error) {
            return {error}
        }
    },
    getEventInformation: async ({eventId}) => {
        try {
            const response = await publicUser.get(
                eventEndpointsConfig.getEventInformation(eventId)
            )
            return {response}
        } catch (error) {
            return {error}
        }
    },
    addUserToEvent: async ({eventId, fullname, email, dateOfBirth, source}) => {
        try {
            const response = await publicUser.post(
                eventEndpointsConfig.addUserToEvent(eventId),
                {fullname, email, dateOfBirth, source}
            )
            return {response}
        } catch (error) {
            return {error}
        }
    },
    createNewEvent: async ({title, description, eventData, organizer}) => {
        try {
            const response = await publicUser.post(
                eventEndpointsConfig.createNewEvent,
                {title, description, eventData, organizer}
            )
            return {response}
        } catch (error) {
            return {error}
        }
    }

}
export default eventApi