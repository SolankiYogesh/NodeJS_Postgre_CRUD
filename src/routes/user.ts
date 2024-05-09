import express from 'express'
import {
  createUser,
  deleteUser,
  getUserById,
  getUsers,
  loginUser,
  updateUser
} from '../controllers/user'

const router = express.Router()
router.get('/', getUsers).post('/', createUser)
router.get('/:id', getUserById).delete('/:id', deleteUser)
router.post('/login', loginUser)
router.post('/update', updateUser)

export default router
