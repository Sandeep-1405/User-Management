# User Management Web Application
**A simple web application to manage user details by interacting with the JSONPlaceholder API. The app demonstrates viewing, adding, editing, and deleting users with a mock backend.**

## Features

- **View Users:** Fetch and display all users with details like ID, First Name, Last Name, Email, and Department. <br>
- **Add User:** Simulate adding a new user. <br>
- **Edit User:** Simulate editing existing user details. <br>
- **Delete User:** Simulate deleting a user. <br>
- **Error Handling:** Gracefully handle API request failures with user-friendly messages. <br>

## Getting Started
### Prerequisites
- **Node.js (v16 or later)**  <br>
- **npm (bundled with Node.js)**  <br>

## Setup Instructions

1. **Clone the repository:**  <br>

   - `git clone https://github.com/Sandeep-1405/User-Management`  <br>
   - `cd <repository_directory>` <br>

2. **Install dependencies:**  <br>

   - `npm install`  <br>
   
3. **Start the development server:**  <br>

   - `npm start`  <br>
   
4. **Open your browser and navigate to:**  <br>

    - `http://localhost:3000`  <br>

## How to Use 

**View Users:**
- Users are listed on the homepage after fetching data from the /users endpoint.<br>

**Add User:**
- Click the "Add User" button.<br>
- Fill out the form and submit to simulate adding a new user. <br>

**Edit User:**
- Click the "Edit" button next to a user.<br>
- Update the user details in the form and save changes.<br>

**Delete User:**
- Click the "Delete" button next to a user and confirm the action.<br>

## API Endpoints
- **GET /users**: Fetch all users.
- **POST /users**: Simulate adding a new user.
- **PUT /users/:id**: Simulate updating user details.
- **DELETE function call in Home Page**: Simulate deleting a user.


## Technologies Used
**React.js**: Frontend framework. <br>
**Axios**: For HTTP requests. <br>
**JSONPlaceholder**: Mock backend API. <br>
**Bootstrap**: For styling. <br>

## Error Handling
- Displays error messages for failed API requests.
- Validates form inputs to ensure data integrity.

## Live Demo
Visit the deployed app: <br> [User Management App](https://user-management-omega-smoky.vercel.app/))


## My JSON Server URL: 
- `https://my-json-server.typicode.com/Sandeep-1405/User-Management`

