const Notes = require('../models/noteModel')
const express = require('express')

const notesRouter = express.Router()

// find All Notes Documents
notesRouter.get('/', (req, res) => {
	Notes.find({}, (error, allNotes) => {
		res.json(allNotes)
	})
})

// DELETE note by ID
notesRouter.delete('/:id', (req, res) => {
	Notes.findByIdAndDelete(req.params.id, (error, note) => {
		res.json(note)
	})
})

// UPDATE note by ID
notesRouter.put('/:id', (req, res) => {
	// check the req.body
	// send to mongodb
	Notes.findByIdAndUpdate(req.params.id, req.body, (error, updated) => {
		res.json(updated)
	})
})

// CREATE new note
notesRouter.post('/', (req, res) => {
	Notes.create(req.body, (error, note) => {
		console.log(req.body)
		res.sendStatus(200)
	})
})

// SHOW individual note by ID
notesRouter.get('/:id', (req, res) => {
	Notes.findById(req.params.id, (error, note) => {
		res.json(note)
	})
})

module.exports = notesRouter
