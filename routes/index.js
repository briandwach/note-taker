const router = require('express').Router();

// Import modular for /api/notes
const notesRouter = require('./notes');

router.use('/notes', notesRouter);

module.exports = router;