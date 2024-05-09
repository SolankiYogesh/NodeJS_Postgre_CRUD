import { Request, Response } from 'express'
import jwt from 'jsonwebtoken'

const sendUnauthrisedError = (response: Response) => {
  response.status(403).json({
    message: 'Unauthrised',
    data: null
  })
}

const isAuthenticated = (request: Request, response: Response) => {
  return new Promise((resolve) => {
    const token = request.headers.authorization
    if (token) {
      jwt.verify(token, 'yogesh', function (err, decoded) {
        if (!decoded || err) {
          sendUnauthrisedError(response)
          resolve(false)
        }
        resolve(true)
      })
    } else {
      sendUnauthrisedError(response)
      resolve(false)
    }
  })
}
export { isAuthenticated }
