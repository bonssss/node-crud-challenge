# Node CRUD Challenge

## Overview
This project implements a simple CRUD (Create, Read, Update, Delete) API using **Node.js** and **Express**. It utilizes an in-memory database to store person records, allowing for creation, retrieval, updating, and deletion of these records.

## API Endpoints
The API exposes the following endpoints:

### 1. **GET /person**
   - Retrieves all persons in the database.
   - **Response**: An array of all persons.

### 2. **GET /person/:personId**
   - Retrieves a person by their unique ID.
   - **Response**: The person object corresponding to the given ID.

### 3. **POST /person**
   - Creates a new person and stores the data in the in-memory database.
   - **Request Body**:
     - `name` (string, required) - The name of the person.
     - `age` (number, required) - The age of the person.
     - `hobbies` (array of strings or empty array, required) - A list of hobbies the person has.
   - **Response**: The newly created person object.

### 4. **PUT /person/:personId**
   - Updates an existing person's record based on the given ID.
   - **Request Body**:
     - `name` (string, required) - The updated name of the person.
     - `age` (number, required) - The updated age of the person.
     - `hobbies` (array of strings or empty array, required) - The updated list of hobbies.
   - **Response**: The updated person object.

### 5. **DELETE /person/:personId**
   - Deletes a person from the database using their unique ID.
   - **Response**: A success message upon successful deletion.

## Data Model
Persons are stored as objects with the following properties:
- `id` (string) - Unique identifier generated on the server-side.
- `name` (string) - The name of the person.
- `age` (number) - The person's age.
- `hobbies` (array of strings) - A list of the person's hobbies.

## Error Handling
- Requests to non-existing endpoints will return a 404 error.
- Internal server errors are properly caught and returned as 500 errors.

## Cross-Origin Resource Sharing (CORS)
The API is configured to allow access from frontend applications hosted on different domains using Cross-Site Resource Sharing (CORS).

## Requirements
- Node.js
- Express

## Installation and Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/bonssss/node-crud-challenge
2. Navigate to the project directory
   ```bash
   cd node-crud-challenge

3. Install dependencies
   ``` bash
   npm install
4. start server
   ```
   npm start

 The server will start on http://localhost:3000
