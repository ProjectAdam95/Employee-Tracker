const inquirer = require('inquirer');

// Main menu prompt
const mainMenuPrompt = {
    type: 'list',
    name: 'action',
    message: 'What would you like to do?',
    choices: [
        'View all departments',
        'View all roles',
        'View all employees',
        'Add a department',
        'Add a role',
        'Add an employee',
        'Update an employee role',
        'Update employee manager',
        'View employees by manager',
        'View employees by department',
        'Delete department',
        'Delete role',
        'Delete employee',
        'View department budget',
        'Exit'
    ]
};

// Department name prompt
const getDepartmentNamePrompt = () => ({
    type: 'input',
    name: 'name',
    message: 'Enter the department name:'
});

// Role details prompt
const getRoleDetailsPrompt = (departments) => [
    {
        type: 'input',
        name: 'title',
        message: 'Enter the role title:'
    },
    {
        type: 'input',
        name: 'salary',
        message: 'Enter the role salary:'
    },
    {
        type: 'list',
        name: 'department_id',
        message: 'Select the department for the role:',
        choices: departments.map(department => ({
            name: department.name,
            value: department.id
        }))
    }
];

// Employee details prompt
const getEmployeeDetailsPrompt = (roles, managers) => [
    {
        type: 'input',
        name: 'first_name',
        message: "Enter the employee's first name:"
    },
    {
        type: 'input',
        name: 'last_name',
        message: "Enter the employee's last name:"
    },
    {
        type: 'list',
        name: 'role_id',
        message: "Select the employee's role:",
        choices: roles.map(role => ({
            name: role.title,
            value: role.id
        }))
    },
    {
        type: 'list',
        name: 'manager_id',
        message: "Select the employee's manager:",
        choices: managers
            .filter(manager => manager.id !== null && manager.id !== undefined)
            .map(manager => ({
                name: `${manager.first_name} ${manager.last_name}`,
                value: manager.id
            }))
    }
];

// Update employee role prompt
const getUpdateEmployeeRolePrompt = (employees, roles) => [
    {
        type: 'list',
        name: 'employee_id',
        message: 'Select the employee to update:',
        choices: employees.map(employee => ({
            name: `${employee.first_name} ${employee.last_name}`,
            value: employee.id
        }))
    },
    {
        type: 'list',
        name: 'role_id',
        message: 'Select the new role for the employee:',
        choices: roles.map(role => ({
            name: role.title,
            value: role.id
        }))
    }
];

// Update employee manager prompt
const getUpdateEmployeeManagerPrompt = (employees, managers) => [
    {
        type: 'list',
        name: 'employee_id',
        message: 'Select the employee to update their manager:',
        choices: employees.map(employee => ({
            name: `${employee.first_name} ${employee.last_name}`,
            value: employee.id
        }))
    },
    {
        type: 'list',
        name: 'manager_id',
        message: 'Select the new manager for the employee:',
        choices: managers
            .filter(manager => manager.id !== null && manager.id !== undefined)
            .map(manager => ({
                name: `${manager.first_name} ${manager.last_name}`,
                value: manager.id
            }))
    }
];

// Manager selection prompt
const getManagerSelectionPrompt = (managers) => ({
    type: 'list',
    name: 'manager_id',
    message: 'Select a manager to view their employees:',
    choices: managers
        .filter(manager => manager.id !== null && manager.id !== undefined)
        .map(manager => ({
            name: `${manager.first_name} ${manager.last_name}`,
            value: manager.id
        }))
});

// Department selection prompt
const getDepartmentSelectionPrompt = (departments) => ({
    type: 'list',
    name: 'department_id',
    message: 'Select a department:',
    choices: departments.map(department => ({
        name: department.name,
        value: department.id
    }))
});

// Delete selection prompt
const getDeleteSelectionPrompt = (items, type) => ({
    type: 'list',
    name: `${type}_id`,
    message: `Select the ${type} to delete:`,
    choices: items.map(item => {
        let itemName;

        // Determine the display name based on the type
        if (type === 'role') {
            itemName = item.title; 
        } else if (type === 'employee') {
            itemName = `${item.first_name} ${item.last_name}`; 
        } else {
            itemName = item.name; 
        }

        return {
            name: itemName, 
            value: item.id  
        };
    })
});

module.exports = {
    mainMenuPrompt,
    getDepartmentNamePrompt,
    getRoleDetailsPrompt,
    getEmployeeDetailsPrompt,
    getUpdateEmployeeRolePrompt,
    getUpdateEmployeeManagerPrompt,
    getManagerSelectionPrompt,
    getDepartmentSelectionPrompt,
    getDeleteSelectionPrompt
};