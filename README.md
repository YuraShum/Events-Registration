# Events Registration App

## Overview
This is a web-based application for event registration, allowing users to view events, register, and see participants.

## Completed Tasks (including all tasks from the middle level)
- **Base Level**: 
  - Events board page with a paginated list of events.
  - Event registration page with a form for full name, email, date of birth, and source of information.
  - Event participants page displaying registered users.

- **Middle Level**:
  - Added sorting functionality for events by title, date, and organizer.
  - Implemented form validation on the registration page.
  - Integrated a date picker for the Date of Birth input.
  - Added search functionality for participants by full name and email.

- **Additional Feature**:
  - Implemented the ability to create new events.
  - Added GitHub Actions for automated deployment.

## Technology Stack
- **Frontend**: React.js, Tailwind CSS
- **Backend**: Node.js (with Express)
- **Database**: MongoDB with Mongoose library

## Functionality Demonstration
### Events Board Page
#### Desktop View
![Events Board - Desktop](./client/public/Readme/eventsPage/Desktop.png)  


#### Tablet View
![Events Board - Tablet](./client/public/Readme/eventsPage/Tablet.png)  


#### Mobile View
![Events Board - Mobile](./client/public/Readme/eventsPage/mobile.png)  


### Pagination
#### First page
![Pagination - Desktop](./client/public/Readme/eventsPage/pagination/firstPage.png)  
#### Second page
![Pagination - Desktop](./client/public/Readme/eventsPage/pagination/secondPage.png) 

### Filtering events
#### by name
![Pagination - Desktop](./client/public/Readme/eventsPage/filters/byName.png) 
#### by date
![Pagination - Desktop](./client/public/Readme/eventsPage/filters/bydate.png) 
#### by organizer
![Pagination - Desktop](./client/public/Readme/eventsPage/filters/byOganizer.png) 

### Event Registration Page

#### Desktop View
![Event Registration - Desktop](./client/public/Readme/registerPage/adapt/Desktop.png)  

#### Tablet View
![Event Registration - Tablet](./client/public/Readme/registerPage/adapt/Tablet.png)  

#### Mobile View
![Event Registration - Tablet](./client/public/Readme/registerPage/adapt/Mobile.png)  

### Form Validation

#### Name Validation
- **Requirement**: The name field is mandatory and must be in the format of full name (First Name Last Name).
- **Validation Example**: If the input is invalid, a message will be shown to the user.
![Name Validation](./client/public/Readme/registerPage/validation/name.png)  

#### Email Validation
- **Requirement**: The email must match a standard email format and will be validated using a regular expression.
- **Validation Example**: If the email doesn't pass the regex check, a message will prompt the user to enter a valid email.
![Email Validation](./client/public/Readme/registerPage/validation/email.png)  

#### Date of Birth Validation
- **Requirement**: The date of birth field uses a date picker. The date must be earlier than the current date to be valid.
- **Validation Example**: Users cannot select a date greater than today.
![Date of Birth Validation](./client/public/Readme/registerPage/validation/dateOfBirth.png)  

#### "Where did you hear about this event?" Field Validation
- **Requirement**: The user must select an option in the "Where did you hear about this event?" field. It is mandatory.
- **Validation Example**: If left blank, the form will prompt the user to select a valid option.
![Source Validation](./client/public/Readme/registerPage/validation/source.png)  

### Example of a Valid User
- **Valid User Example**:
  - **Name**: Vasylkiv John Andriyovych
  - **Email**: john.doe@example.com
  - **Date of Birth**: 1990-05-15
  - **Where did you hear about this event?**: Social Media
![Valid User](./client/public/Readme/registerPage/validation/successfull.png)  


### Saving Data to the Database
- **Process**: Once the form passes all validations, the data is submitted and saved to the MongoDB database.
- **Data Storage Example**: A successful submission will display a confirmation message, and the user will be registered for the event.
![Valid User](./client/public/Readme/registerPage/userCreateInDB.png)  

### Registration Restrictions
- **Restriction**: If a user is already registered for an event, they will not be able to register again.
- **Error Message Example**: If the user attempts to register again, an error message will be displayed.
![Already Registered](./client/public/Readme/registerPage/failed.png)  



### Participants Page

#### Desktop View
![Participants - Desktop](./client/public/Readme/participatsPage/adapt/Desktop.png)  

#### Tablet View
![Participants - Tablet](./client/public/Readme/participatsPage/adapt/Tablet.png)  

#### Mobile View
![Participants - Mobile](./client/public/Readme/participatsPage/adapt/Mobile.png)  


### Pagination
- **Description**: The participants list is paginated to improve performance and user experience. The user can navigate between different pages of participants.
  
#### First Page
![Participants - Desktop](./client/public/Readme/participatsPage/adapt/Desktop.png) 

#### Second Page
![Participants - Second Page](./client/public/Readme/participatsPage/pagination/second.png)  


### Search Functionality
- **Description**: The search field allows users to search participants by their full name or email address. The search operates dynamically to display matching participants immediately.

#### Search by Full Name
- **Example**: Searching for "John" will display only participants with this full name.
![Search by Full Name](./client/public/Readme/participatsPage/search/name.png)  

#### Search by Email
- **Example**: Searching for "olya@gmail.com" will display the participant with that email address.
![Search by Email](./client/public/Readme/participatsPage/search/email.png)


### Create New Event Page

#### Desktop View
![Create Event - Desktop](./client/public/Readme/createPage/adapt/Desktop.png)

#### Tablet View
![Create Event - Tablet](./client/public/Readme/createPage/adapt/Tablet.png)

#### Mobile View
![Create Event - Mobile](./client/public/Readme/createPage/adapt/Mobile.png)

### Event Form Fields:
- **Title** (mandatory): The title of the event is required and must not be empty.  
  ![Title Validation](./client/public/Readme/createPage/validation/title.png)

- **Description** (mandatory): A description of the event is required and must not be empty.  
  ![Description Validation](./client/public/Readme/createPage/validation/description.png)

- **Event Date and Time** (mandatory, validated): The event date and time are mandatory and must be set to a future date (not earlier than the current time).  
  ![Date and Time Validation](./client/public/Readme/createPage/validation/date.png)

- **Organizer** (mandatory): The organizer's name is required and must not be left empty.  
  ![Organizer Validation](./client/public/Readme/createPage/validation/organizer.png)


### Successful Creation:
- Upon successful validation and submission, the event is saved to the database, and a confirmation message is shown to the user.
  ![Successful Creation](./client/public/Readme/createPage/create.png)

### Data in Database:
- The event data is stored in MongoDB after submission and can be viewed directly from the database.
  ![Data in Database](./client/public/Readme/createPage/createInDB.png)

### View Updated Events Page:
- The newly created event will appear on the events page.
  ![Updated Events Page](./client/public/Readme/createPage/addedtoEventsPage.png)