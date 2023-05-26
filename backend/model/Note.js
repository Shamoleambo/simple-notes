import mongoose from 'mongoose'

const notesSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },
    noteText: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
)

export default mongoose.model('Note', notesSchema)
