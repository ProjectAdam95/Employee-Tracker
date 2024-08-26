# Employee-Tracker

The Employee Tracker application allows users to manage a company's employee database using a command-line interface. It supports operations such as viewing departments, roles, and employees, as well as adding, updating, and deleting records.

# Introduction
 
 This is a command-line application for managing a company's employee database, developed by Adam Todorovic. 
 It provides users with a suite of tools to maintain departments, roles, and employees, ensuring efficient and organized tracking of company data.

## :ledger: Index

- [About](#beginner-about)
- [File Structure](#file_folder-file-structure)
- [Build](#hammer-build)  
- [Deployment](#rocket-deployment)  
- [Community](#cherry_blossom-community)
- [Contribution](#fire-contribution)
- [Resources](#page_facing_up-resources)
- [Gallery](#camera-gallery)
- [Credit/Acknowledgment](#star2-creditacknowledgment)
- [License](#lock-license)

##  :beginner: About

The Employee Tracker is a comprehensive command-line application designed to help businesses manage their workforce more efficiently. Built with Node.js and PostgreSQL, this tool provides a simple yet powerful interface for handling essential employee data, from departments and roles to individual employee records.

Whether you're a small business owner or part of a larger HR department, the Employee Tracker offers the tools you need to manage your team effectively, all from the command line.

Features include:

- Centralized Employee Management: Keep all employee data organized in a single database, accessible via a user-friendly command-line interface.
- Department and Role Insights: Easily view and manage the company's departments and roles, with the ability to add, update, and delete entries as needed.
- Budget Tracking: Monitor and control departmental budgets, ensuring financial oversight and better decision-making.

Additional Features:

- Preview Photos: Includes a preview image/gif that demonstrate the application's use and function.
- Directory Structure: Easy-to-navigate file structure.

###  :file_folder: File Structure

Below is a view of the file structure deployed to GitHub.

```plaintext

EMPLOYEE-TRACKER
├── db/                   
│   ├── schema.sql        # Database structure
│   ├── seeds.sql         # Initial data
│
├── preview                # preview gif
├── src/
│   ├── db.js             # Database connection
│   ├── actions.js        # CRUD operations
│   ├── prompts.js        # CLI prompts
│   ├── server.js         # Main app logic
├── .gitignore            # Files to ignore in Git
├── index.js              # App entry point
├── package.json          # Project metadata and dependencies
├── README.md             # Project documentation


```

###  :hammer:

Build
- File changes updated and modified using terminal eg. Git bash to add, commit and pull e.t.c.
- Code Editor: Used code editor e.g VS code , to modify existing code and make changes to the javascript code as per request.
- Version Control: Regularly committed changes to a Git repository to track progress and maintain version history.
- Testing and Debugging: Tested the application to ensure compatibility and responsiveness.
- Documentation: Documented code changes, setup instructions to facilitate collaboration and future maintenance.
- Code notes: Notes explaining what each piece of code does, such as a function in Javascript. It is displayed above the corresponding code.
- This enables developers to easily read the code and identify how the application works. Notes have been added to the JS files.

### :rocket: Deployment

To deploy this application please follow the below instructions:

- 1. Clone the repository using "git clone "ENTER URL HERE"
- 2. Navigate to the directory of the file names "Employee-Tracker".
- 3. Install required npm packages by typing "npm install" in the CLI.
- 4. Set Up the Database: Use the schema.sql and seeds.sql files to set up and seed your database.
- 5. Run the Application: Start the application by typing node index.js or npm start in the terminal.
- 6. Follow Prompts: Use the command-line prompts to manage departments, roles, and employees.
- 7. Exit: You can exit the application at any time by selecting the "Exit" option from the main menu.

IMPORTANT NOTE:

1. Ensure you have set up your PostgreSQL database correctly and updated any environment variables as needed. 
2. Make sure you are in the correct directory which in my case is bootcamp\Employee-Tracker to successfuly start the application. 
3. If you are stuck on how the application works. I have a video that illustrates how to run/invoke the application. Check out the gallery section!
  
  If you are stil stuck and unable to resolve an issue do not hesitate to contact me on 
  my email or leave a comment in the issues links below under the contribution section!

 ###  :fire: Contribution

 - Your contributions are always welcome and greatly appreciated. Here are some ways you can contribute to the project:

 1. **Report a bug** <br>
 If you think you have encountered a bug, and I should know about it, feel free to report it here [here](https://github.com/ProjectAdam95/Employee-Tracker/issues). I will look into it and take the necessary steps.
 
 2. **Request a feature** <br>
 If you have a feature idea that you think would enhance the project, you can request it [here](https://github.com/ProjectAdam95/Employee-Tracker/issues), If the feature is deemed viable, it will be considered for development. 

 3. **Create a pull request** <br>
 The best way to contribute is by creating a pull request. The community will appreciate your efforts. You can start by picking up any open issues from [here](https://github.com/ProjectAdam95/Employee-Tracker/issues)and submitting a pull request.

##  :page_facing_up: Resources

Software used
- VS Code -  A powerful code editor for writing and managing code across various programming languages.
- Git Bash - A command-line interface for Git, providing Unix-like shell commands for version control and repository management.
- LICEcap - A screen recording software

##  :camera: Gallery
Below is a preview photo of the website.

- Click here to view preview video/gif!: https://jumpshare.com/v/qk9pPIHoA8N78npiF2GS
- If the above link doesn't work you can go to the preview folder to view the gif file!

You may also download the image for your own reference :D

## :star2: Credit/Acknowledgment
Adam Todorovic

##  :lock: License
This project is licensed under the MIT License.
