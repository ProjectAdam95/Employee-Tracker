const figlet = require('figlet');  // Import figlet for creating ASCII art titles
const mainMenu = require('./src/server');  // Import the main menu function from the server file

(async () => {
    const chalk = (await import('chalk')).default;  // Dynamically import chalk for colored text

    figlet.text('Employee Tracker', { // Generate title "Employee Tracker"
        font: 'Star Wars', // Use the "Star Wars" font style
    }, function(err, data) {
        if (err) {
            console.log('Something went wrong...');  // Log error if figlet fails
            console.dir(err);
            return;
        }
        console.log(chalk.yellow(data));  // Print the title in yellow color
        mainMenu();  // Start the main menu of the application
    });
})();

