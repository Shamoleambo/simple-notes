import express from 'express'
import { createNote } from '../controller/notesController.js'

const router = express.Router()

router.post('/notes', createNote)

export default router
