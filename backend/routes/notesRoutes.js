import express from 'express'
import { createNote, getNotes } from '../controller/notesController.js'

const router = express.Router()

router.route('/notes').post(createNote).get(getNotes)

export default router
