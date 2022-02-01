const mongoose = require('mongoose')

const notesSchema = mongoose.Schema({
	title: { type: String, required: true },
	content: { type: String, required: true },
	author: String,
	date: String,
})

module.exports = mongoose.model('Notes', notesSchema)
