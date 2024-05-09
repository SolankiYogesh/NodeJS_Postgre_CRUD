import { Request, Response } from 'express'

import pool from '../db'
import { User } from '../models/User'
import { v4 as uuidv4 } from 'uuid'
import jwt from 'jsonwebtoken'
import { isAuthenticated } from '../utils'
import {
  DELETE_USER_BY_ID,
  GET_USERS,
  GET_USER_BY_ID,
  LOGIN_USER,
  REGISTER_USER,
  UPDATE_TOKEN,
  UPDATE_USER
} from '../db/Query'

const getUsers = async (request: Request, response: Response) => {
  if (!(await isAuthenticated(request, response))) {
    return
  }

  pool.query<User[]>(GET_USERS, (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json({
      message: 'Success',
      data: results.rows
    })
  })
}

const getUserById = async (request: Request, response: Response) => {
  const id = request.params.id
  if (!(await isAuthenticated(request, response))) {
    return
  }
  pool.query(GET_USER_BY_ID, [id], (error, results) => {
    if (error) {
      throw error
    }
    if (results.rows.length === 0) {
      response.status(404).json({
        message: 'User not found',
        data: null
      })
      return
    }
    response.status(200).json({
      message: 'Success',
      data: results.rows
    })
  })
}

const createUser = async (request: Request, response: Response) => {
  const fullName = request.body?.fullName
  const password = request.body?.password
  const email = request.body?.email
  const id = uuidv4()

  if (!fullName || !password || !email) {
    response.status(400).json({
      message: 'All fields are required',
      data: null
    })
    return
  }

  pool.query(REGISTER_USER, [fullName, password, email, id], (error, results) => {
    if (error) {
      response.status(500).json({
        message: 'Something went wrong',
        data: null
      })
    }

    response.status(200).json({
      message: 'Success',
      data: results.rows
    })
  })
}

const deleteUser = async (request: Request, response: Response) => {
  if (!isAuthenticated(request, response)) {
    return
  }
  const id = request.params.id

  pool.query(DELETE_USER_BY_ID, [id], (error, results) => {
    if (error) {
      response.status(500).json({
        message: 'Something went wrong'
      })
    }
    if (results.rows.length === 0) {
      response.status(404).json({
        message: 'User not found',
        data: null
      })
      return
    }
    response.status(200).json({
      message: 'Success',
      data: results.rows
    })
  })
}

const loginUser = async (request: Request, response: Response) => {
  const password = request.body?.password

  const email = request.body?.email

  if (!password || !email) {
    response.status(400).json({
      message: 'All fields are required',
      data: null
    })
    return
  }

  pool.query(LOGIN_USER, [email, password], (error, results) => {
    if (error) {
      response.status(500).json({
        message: 'Something went wrong',
        data: null
      })
      return
    }

    if (results.rows[0]) {
      const user = results.rows[0]
      delete user.token
      delete user.password

      const token = jwt.sign(
        {
          exp: Math.floor(Date.now() / 1000) + 60 * 60,
          data: JSON.stringify(user)
        },
        'yogesh'
      )

      pool.query(UPDATE_TOKEN, [token, user.id], (tokenError) => {
        if (tokenError) {
          response.status(500).json({
            message: 'Error updating token',
            data: null
          })
          return
        }

        response.status(200).json({
          message: 'Success',
          data: {
            user: { ...user, token }
          }
        })
      })
    } else {
      response.status(400).json({
        message: 'Invalid email and password combination',
        data: null
      })
    }
  })
}

const updateUser = async (request: Request, response: Response) => {
  const fullName = request.body?.fullName
  const email = request.body?.email
  const profileUrl = request.body?.profileUrl
  const id = request.body.id

  if (!isAuthenticated(request, response)) {
    return
  }

  pool.query(UPDATE_USER, [fullName, email, profileUrl, id], (tokenError) => {
    if (tokenError) {
      response.status(500).json({
        message: 'Error updating token',
        data: null
      })
      return
    }

    response.status(200).json({
      message: 'Success',
      data: {
        user: { fullName, email, profileUrl, id }
      }
    })
  })
}

export { getUserById, getUsers, createUser, deleteUser, loginUser, updateUser }
