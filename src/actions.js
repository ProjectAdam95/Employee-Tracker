const client = require('./db');

// View all departments
const viewAllDepartments = async () => {
    const result = await client.query('SELECT * FROM department');
    console.table(result.rows);
    return result.rows; // Return for use in prompts
};

// View all roles
const viewAllRoles = async () => {
    const query = `
        SELECT role.id, role.title, department.name AS department, role.salary
        FROM role
        LEFT JOIN department ON role.department_id = department.id`;
    const result = await client.query(query);
    console.table(result.rows);
    return result.rows; // Return for use in prompts
};

// View all employees
const viewAllEmployees = async () => {
    const query = `
        SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department, role.salary, 
        CONCAT(manager.first_name, ' ', manager.last_name) AS manager
        FROM employee
        LEFT JOIN role ON employee.role_id = role.id
        LEFT JOIN department ON role.department_id = department.id
        LEFT JOIN employee manager ON manager.id = employee.manager_id`;
    const result = await client.query(query);
    console.table(result.rows);
    return result.rows; // Return for use in prompts
};

// Add a department
const addDepartment = async (name) => {
    await client.query('INSERT INTO department (name) VALUES ($1)', [name]);
    console.log(`Added ${name} to the database`);
};

// Add a role
const addRole = async (title, salary, department_id) => {
    await client.query('INSERT INTO role (title, salary, department_id) VALUES ($1, $2, $3)', 
                        [title, salary, department_id]);
    console.log(`Added ${title} to the database`);
};

// Add an employee
const addEmployee = async (first_name, last_name, role_id, manager_id) => {
    await client.query('INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ($1, $2, $3, $4)', 
                        [first_name, last_name, role_id, manager_id]);
    console.log(`Added ${first_name} ${last_name} to the database`);
};

// Update an employee's role
const updateEmployeeRole = async (employee_id, role_id) => {
    await client.query('UPDATE employee SET role_id = $1 WHERE id = $2', 
                        [role_id, employee_id]);
    console.log('Updated employee\'s role');
};

// Update an employee's manager
const updateEmployeeManager = async (employee_id, manager_id) => {
    await client.query('UPDATE employee SET manager_id = $1 WHERE id = $2', [manager_id, employee_id]);
    console.log("Updated employee's manager");
};

// View employees by manager
const viewEmployeesByManager = async (manager_id) => {
    const query = `
        SELECT employee.id, employee.first_name, employee.last_name, role.title
        FROM employee
        LEFT JOIN role ON employee.role_id = role.id
        WHERE employee.manager_id = $1`;
    const result = await client.query(query, [manager_id]);
    console.table(result.rows);
};

// View employees by department
const viewEmployeesByDepartment = async (department_id) => {
    const query = `
        SELECT employee.id, employee.first_name, employee.last_name, role.title
        FROM employee
        LEFT JOIN role ON employee.role_id = role.id
        WHERE role.department_id = $1`;
    const result = await client.query(query, [department_id]);
    console.table(result.rows);
};

// Delete a department
const deleteDepartment = async (department_id) => {
    await client.query('DELETE FROM department WHERE id = $1', [department_id]);
    console.log('Department deleted');
};

// Delete a role
const deleteRole = async (role_id) => {
    await client.query('DELETE FROM role WHERE id = $1', [role_id]);
    console.log('Role deleted');
};

// Delete an employee
const deleteEmployee = async (employee_id) => {
    await client.query('DELETE FROM employee WHERE id = $1', [employee_id]);
    console.log('Employee deleted');
};

// View the total utilized budget of a department
const viewDepartmentBudget = async (department_id) => {
    const query = `
        SELECT SUM(role.salary) AS total_budget
        FROM employee
        LEFT JOIN role ON employee.role_id = role.id
        WHERE role.department_id = $1`;
    const result = await client.query(query, [department_id]);
    console.log(`Total budget for department: $${result.rows[0].total_budget}`);
};

module.exports = {
    viewAllDepartments,
    viewAllRoles,
    viewAllEmployees,
    addDepartment,
    addRole,
    addEmployee,
    updateEmployeeRole,
    updateEmployeeManager,
    viewEmployeesByManager,
    viewEmployeesByDepartment,
    deleteDepartment,
    deleteRole,
    deleteEmployee,
    viewDepartmentBudget,
};
