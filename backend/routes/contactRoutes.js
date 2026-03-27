const express = require('express');
const router = express.Router();
const { submitContact, getContacts } = require('../controllers/contactController');

// POST - Submit contact form
router.post('/', submitContact);

// GET - Get all contacts
router.get('/', getContacts);

module.exports = router;