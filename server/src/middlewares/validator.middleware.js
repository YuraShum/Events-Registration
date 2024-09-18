import { validationResult } from 'express-validator'
import responseHandlers from '../handlers/responseHandlers.js'
const validator = (req, res, next) => {
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
        return responseHandlers.badRequest(res, errors.array()[0].msg)
    }
    next()
}

export default validator