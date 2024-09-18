const eventEndpointsConfig = {
    getAllEvents: 'events',
    getEventInformation: (eventId) => {
        return `events/${eventId}/information'`
    },
    addUserToEvent: (eventId) => {
        return `events/${eventId}/listener`
    },
    createNewEvent: 'event'
}

export default eventEndpointsConfig