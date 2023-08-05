const mongoose = require('mongoose')
const noteSchema = new mongoose.Schema({ content: String, author: String })

const NoteModel = mongoose.model('note', noteSchema, 'note')

module.exports = NoteModel