# Team Profile Generator

## Description

The **Team Profile Generator** is a Node.js command-line application that allows users to build a software engineering team profile. The application collects information about team members and generates a clean HTML webpage displaying each member’s details.

This project demonstrates the use of **Object-Oriented Programming (OOP)**, **Node.js**, and **user input handling** with Inquirer.

---

## Features

* Add a **Manager**, **Engineer**, and **Intern**
* Collect user input through the command line
* Use **OOP classes** to model employees
* Dynamically generate an HTML file
* Display team member information in styled cards

---

## Technologies Used

* Node.js
* JavaScript (ES6)
* Inquirer (v8.2.4)
* File System (fs module)

---

## Project Structure

```
HW11/
│
├── index11.js
├── lib/
│   ├── Employee.js
│   ├── Engineer.js
│   ├── Intern.js
│   └── Manager.js
│
├── src/
│   └── generateHTML.js
│
├── dist/
│   └── index.html
│
└── README.md
```

---

## Installation

1. Clone the repository or download the project files
2. Open the project folder in Git Bash or terminal
3. Install dependencies:

```
npm install
```

---

## Usage

Run the application using:

```
node index11.js
```

Follow the prompts to:

* Enter manager details
* Add engineers and interns
* Finish building your team

After completion, an HTML file will be generated in the `dist` folder.

---

## Output

The generated HTML page includes:

* Employee name and role
* ID and email
* Role-specific information:

  * Manager → Office Number
  * Engineer → GitHub profile link
  * Intern → School

---

## Known Issues / Limitations

* No input validation for all fields
* Basic HTML styling
* No error handling for invalid file paths

---

## Future Enhancements

* Add better UI styling (CSS frameworks like Bootstrap)
* Implement input validation
* Add ability to edit/remove team members
* Deploy as a web app instead of CLI

---

## Author

Jonathan Wynman-Comas

---

## License

This project is for educational purposes.
