import express from 'express'
import { createNote } from '../controller/notesController.js'

const router = express.Router()

router.route('/notes').post(createNote)

export default router
