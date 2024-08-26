const inquirer = require('inquirer'); // Import inquirer for command-line prompts
const prompts = require('./prompts'); // Import prompt questions
const actions = require('./actions'); // Import actions for handling user choices

// Main menu function
const mainMenu = async () => {
    const { action } = await inquirer.prompt(prompts.mainMenuPrompt); // Display main menu prompt

    switch (action) {
        case 'View all departments':
            await actions.viewAllDepartments(); // View departments
            break;

        case 'View all roles':
            await actions.viewAllRoles(); // View roles
            break;

        case 'View all employees':
            await actions.viewAllEmployees(); // View employees
            break;

        case 'Add a department':
            const { name } = await inquirer.prompt(prompts.getDepartmentNamePrompt()); // Get department name
            await actions.addDepartment(name); // Add department
            break;

        case 'Add a role':
            const departments = await actions.viewAllDepartments(); // Get departments for role assignment
            const roleDetails = await inquirer.prompt(prompts.getRoleDetailsPrompt(departments)); // Get role details
            await actions.addRole(roleDetails.title, roleDetails.salary, roleDetails.department_id); // Add role
            break;

        case 'Add an employee':
            const roles = await actions.viewAllRoles(); // Get roles for employee assignment
            const managers = await actions.viewAllEmployees(); // Get managers for employee assignment
            const employeeDetails = await inquirer.prompt(prompts.getEmployeeDetailsPrompt(roles, managers)); // Get employee details
            await actions.addEmployee(employeeDetails.first_name, employeeDetails.last_name, employeeDetails.role_id, employeeDetails.manager_id); // Add employee
            break;

        case 'Update an employee role':
            const employeesForUpdate = await actions.viewAllEmployees(); // Get employees for role update
            const rolesForUpdate = await actions.viewAllRoles(); // Get roles for update
            const updateDetails = await inquirer.prompt(prompts.getUpdateEmployeeRolePrompt(employeesForUpdate, rolesForUpdate)); // Get update details
            await actions.updateEmployeeRole(updateDetails.employee_id, updateDetails.role_id); // Update employee role
            break;

        case 'Update employee manager':
            const employeesForManagerUpdate = await actions.viewAllEmployees(); // Get employees for manager update
            const managersForUpdate = await actions.viewAllEmployees(); // Get managers for update
            const updateManagerDetails = await inquirer.prompt(prompts.getUpdateEmployeeManagerPrompt(employeesForManagerUpdate, managersForUpdate)); // Get manager update details
            await actions.updateEmployeeManager(updateManagerDetails.employee_id, updateManagerDetails.manager_id); // Update employee manager
            break;

        case 'View employees by manager':
            const managersForView = await actions.viewAllEmployees(); // Get managers for view selection
            const managerSelection = await inquirer.prompt(prompts.getManagerSelectionPrompt(managersForView)); // Get manager selection
            await actions.viewEmployeesByManager(managerSelection.manager_id); // View employees by manager
            break;

        case 'View employees by department':
            const departmentsForView = await actions.viewAllDepartments(); // Get departments for view selection
            const departmentSelection = await inquirer.prompt(prompts.getDepartmentSelectionPrompt(departmentsForView)); // Get department selection
            await actions.viewEmployeesByDepartment(departmentSelection.department_id); // View employees by department
            break;

        case 'Delete department':
            const departmentForDeletion = await actions.viewAllDepartments(); // Get departments for deletion
            const departmentToDelete = await inquirer.prompt(prompts.getDeleteSelectionPrompt(departmentForDeletion, 'department')); // Get department to delete
            await actions.deleteDepartment(departmentToDelete.department_id); // Delete department
            break;

        case 'Delete role':
            const roleForDeletion = await actions.viewAllRoles(); // Get roles for deletion
            const roleToDelete = await inquirer.prompt(prompts.getDeleteSelectionPrompt(roleForDeletion, 'role')); // Get role to delete
            await actions.deleteRole(roleToDelete.role_id); // Delete role
            break;

        case 'Delete employee':
            const employeeForDeletion = await actions.viewAllEmployees(); // Get employees for deletion
            const employeeToDelete = await inquirer.prompt(prompts.getDeleteSelectionPrompt(employeeForDeletion, 'employee')); // Get employee to delete
            await actions.deleteEmployee(employeeToDelete.employee_id); // Delete employee
            break;

        case 'View department budget':
            const departmentsForBudget = await actions.viewAllDepartments(); // Get departments for budget view
            const departmentForBudget = await inquirer.prompt(prompts.getDepartmentSelectionPrompt(departmentsForBudget)); // Get department for budget view
            await actions.viewDepartmentBudget(departmentForBudget.department_id); // View department budget
            break;

        case 'Exit':
            process.exit(); // Exit the application
    }

    mainMenu(); // Loop back to the main menu after action is completed
};

module.exports = mainMenu; // Export the main menu function


