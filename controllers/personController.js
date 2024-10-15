// controllers/personController.js
const { v4: uuidv4 } = require('uuid');

// In-memory database
let persons = [];

// Get all persons or a specific person
const getPersons = (req, res) => {
  const personId = req.params.id;

  if (personId) {
    const person = persons.find((p) => p.id === personId);
    if (!person) {
      return res.status(404).json({ error: 'Person not found' });
    }
    return res.json(person);
  }

  res.json(persons);
};

// Create a new person
const createPerson = (req, res) => {
  const { name, age, hobbies } = req.body;

  // Validate request body
  if (!name || !age || !Array.isArray(hobbies)) {
    return res.status(400).json({ error: 'Invalid input data' });
  }

  const newPerson = {
    id: uuidv4(),
    name,
    age,
    hobbies,
  };

  persons.push(newPerson);
  res.status(201).json(newPerson);
};

// Update an existing person
const updatePerson = (req, res) => {
  const personId = req.params.id;
  const { name, age, hobbies } = req.body;

  const personIndex = persons.findIndex((p) => p.id === personId);
  if (personIndex === -1) {
    return res.status(404).json({ error: 'Person not found' });
  }

  const updatedPerson = {
    id: personId,
    name: name || persons[personIndex].name,
    age: age !== undefined ? age : persons[personIndex].age,
    hobbies: hobbies || persons[personIndex].hobbies,
  };

  persons[personIndex] = updatedPerson;
  res.json(updatedPerson);
};

// Delete a person
const deletePerson = (req, res) => {
    const personId = req.params.id;
  
    const personIndex = persons.findIndex((p) => p.id === personId);
    if (personIndex === -1) {
      return res.status(404).json({ error: 'Person not found' });
    }
  
    persons.splice(personIndex, 1);
    res.status(200).json({ message: 'Person deleted successfully' }); // Include success message
  };
  
// Export controller functions
module.exports = {
  getPersons,
  createPerson,
  updatePerson,
  deletePerson,
};
