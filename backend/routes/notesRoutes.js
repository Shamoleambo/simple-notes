import express from 'express'

const router = express.Router()

router.post('/notes', () => {
  console.log('Hello POST /notes')
})

export default router
