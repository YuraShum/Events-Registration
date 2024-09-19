import express from 'express'
import eventService from '../services/event.service.js'
import { body } from 'express-validator'
import { validateEmail } from '../utils/utils.js'
import validator from '../middlewares/validator.middleware.js'

const router = express.Router()

router.get(
    '/events',
    eventService.getAllEvents.bind(eventService)
)

router.get(
    '/events/:eventId/information',
    eventService.getEventInformation.bind(eventService)
)
//!! Додати валідацію для дати народження
router.post(
    '/events/:eventId/listener',
    body('fullname')
        .exists()
        .withMessage("Username is required."),
    body('email')
        .exists()
        .withMessage('Email is required.')
        .custom((value) => validateEmail(value))
        .withMessage('Invalid email format.'),
    body("dateOfBirth")
        .exists()
        .withMessage('Date of birth is required.'),
    body("source")
        .exists()
        .withMessage('Source is required.'),
    validator,
    eventService.addUserToEvent.bind(eventService)
)

router.post(
    '/event',
    body('title')
        .exists()
        .withMessage("Event title is required."),
    body('description')
        .exists()
        .withMessage("Event description is required."),
    body('eventDate')
        .exists()
        .withMessage("Event data is required."),
    body('organizer')
        .exists()
        .withMessage("Organizer is required."),
    validator,
    eventService.createNewEvent.bind(eventService)
)

export default router