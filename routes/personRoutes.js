// routes/personRoutes.js
const express = require('express');
const {
  getPersons,
  createPerson,
  updatePerson,
  deletePerson,
} = require('../controllers/personController');

const router = express.Router();

// Define routes
router.get('/person/:id?', getPersons); // Get all persons or a specific one
router.post('/person', createPerson);    // Create a new person
router.put('/person/:id', updatePerson);  // Update a person
router.delete('/person/:id', deletePerson); // Delete a person

module.exports = router;
