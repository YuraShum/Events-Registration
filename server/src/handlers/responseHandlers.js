import { responseConstuctor } from "../utils/utils.js"

const responseHandlers = {
    error: (response) => {
        return responseConstuctor(
            response,
            500,
            {
                message: 'Something went wrong',
                status: 500
            })
    },
    ok: (response, data) => {
        return responseConstuctor(response, 200, data)
    },
    created: (response, data) => {
        return responseConstuctor(response, 201, data)

    },
    notFound: (response, message) => {
        return responseConstuctor(
            response,
            404,
            {
                message,
                status: 404
            }
        )
    },
    badRequest: (response, message) => {
        return responseConstuctor(
            response,
            400,
            {
                message,
                status: 400
            }
        )
    },
    conflict: (response, message) => {
        return responseConstuctor(
            response,
            409,
            {
                message,
                status: 409
            }
        )
    }
}

export default responseHandlers