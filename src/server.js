const inquirer = require('inquirer');
const prompts = require('./prompts');
const actions = require('./actions');

const mainMenu = async () => {
    const { action } = await inquirer.prompt(prompts.mainMenuPrompt);

    switch (action) {
        case 'View all departments':
            await actions.viewAllDepartments();
            break;

        case 'View all roles':
            await actions.viewAllRoles();
            break;

        case 'View all employees':
            await actions.viewAllEmployees();
            break;

        case 'Add a department':
            const { name } = await inquirer.prompt(prompts.getDepartmentNamePrompt());
            await actions.addDepartment(name);
            break;

        case 'Add a role':
            const departments = await actions.viewAllDepartments();
            const roleDetails = await inquirer.prompt(prompts.getRoleDetailsPrompt(departments));
            await actions.addRole(roleDetails.title, roleDetails.salary, roleDetails.department_id);
            break;

        case 'Add an employee':
            const roles = await actions.viewAllRoles();
            const managers = await actions.viewAllEmployees();
            const employeeDetails = await inquirer.prompt(prompts.getEmployeeDetailsPrompt(roles, managers));
            await actions.addEmployee(employeeDetails.first_name, employeeDetails.last_name, employeeDetails.role_id, employeeDetails.manager_id);
            break;

        case 'Update an employee role':
            const employeesForUpdate = await actions.viewAllEmployees();
            const rolesForUpdate = await actions.viewAllRoles();
            const updateDetails = await inquirer.prompt(prompts.getUpdateEmployeeRolePrompt(employeesForUpdate, rolesForUpdate));
            await actions.updateEmployeeRole(updateDetails.employee_id, updateDetails.role_id);
            break;

        case 'Update employee manager':
            const employeesForManagerUpdate = await actions.viewAllEmployees();
            const managersForUpdate = await actions.viewAllEmployees();
            const updateManagerDetails = await inquirer.prompt(prompts.getUpdateEmployeeManagerPrompt(employeesForManagerUpdate, managersForUpdate));
            await actions.updateEmployeeManager(updateManagerDetails.employee_id, updateManagerDetails.manager_id);
            break;

        case 'View employees by manager':
            const managersForView = await actions.viewAllEmployees();
            const managerSelection = await inquirer.prompt(prompts.getManagerSelectionPrompt(managersForView));
            await actions.viewEmployeesByManager(managerSelection.manager_id);
            break;

        case 'View employees by department':
            const departmentsForView = await actions.viewAllDepartments();
            const departmentSelection = await inquirer.prompt(prompts.getDepartmentSelectionPrompt(departmentsForView));
            await actions.viewEmployeesByDepartment(departmentSelection.department_id);
            break;

        case 'Delete department':
            const departmentForDeletion = await actions.viewAllDepartments();
            const departmentToDelete = await inquirer.prompt(prompts.getDeleteSelectionPrompt(departmentForDeletion, 'department'));
            await actions.deleteDepartment(departmentToDelete.department_id);
            break;

        case 'Delete role':
            const roleForDeletion = await actions.viewAllRoles();
            const roleToDelete = await inquirer.prompt(prompts.getDeleteSelectionPrompt(roleForDeletion, 'role'));
            await actions.deleteRole(roleToDelete.role_id);
            break;

        case 'Delete employee':
            const employeeForDeletion = await actions.viewAllEmployees();
            const employeeToDelete = await inquirer.prompt(prompts.getDeleteSelectionPrompt(employeeForDeletion, 'employee'));
            await actions.deleteEmployee(employeeToDelete.employee_id);
            break;

        case 'View department budget':
            const departmentsForBudget = await actions.viewAllDepartments();
            const departmentForBudget = await inquirer.prompt(prompts.getDepartmentSelectionPrompt(departmentsForBudget));
            await actions.viewDepartmentBudget(departmentForBudget.department_id);
            break;

        case 'Exit':
            process.exit();
    }

    mainMenu(); // Loop back to the main menu after action is completed
};

module.exports = mainMenu;

