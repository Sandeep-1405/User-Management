#User Management Web Application
###A simple web application to manage user details by interacting with the JSONPlaceholder API. The app demonstrates viewing, adding, editing, and deleting users with a mock backend.

##Features
View Users: Fetch and display all users with details like ID, First Name, Last Name, Email, and Department.
Add User: Simulate adding a new user.
Edit User: Simulate editing existing user details.
Delete User: Simulate deleting a user.
Error Handling: Gracefully handle API request failures with user-friendly messages.

##Getting Started
###Prerequisites
Node.js (v16 or later)
npm (bundled with Node.js) 

##Setup Instructions
1. Clone the repository:
  ` git clone (https://github.com/Sandeep-1405/User-Management)`
  `cd <repository_directory>`

2. Install dependencies:
     `npm install`
   
3. Start the development server:
   `npm start`
   
4.Open your browser and navigate to:
  `http://localhost:3000`

##How to Use

**View Users:**
Users are listed on the homepage after fetching data from the /users endpoint.

**Add User:**
Click the "Add User" button.
Fill out the form and submit to simulate adding a new user.

**Edit User:**
Click the "Edit" button next to a user.
Update the user details in the form and save changes.

**Delete User:**
Click the "Delete" button next to a user and confirm the action.

##Technologies Used
**React.js**: Frontend framework
**Axios**: For HTTP requests
**JSONPlaceholder**: Mock backend API
**Bootstrap**: For styling

##Error Handling
Displays error messages for failed API requests.
Validates form inputs to ensure data integrity.

