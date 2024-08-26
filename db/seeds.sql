-- Insert departments
-- These entries represent the different departments within the company.
INSERT INTO department (name) VALUES 
('Research & Development'),
('Marketing'),
('Human Resources'),
('Finance'),
('Sales');

-- Insert roles
-- These entries represent job positions within each department.
INSERT INTO role (title, salary, department_id) VALUES 
('Lead Developer', 110000, 1), 
('Marketing Director', 85000, 2), 
('HR Specialist', 60000, 3),
('Financial Analyst', 75000, 4),
('Sales Manager', 70000, 5);

-- Insert managers (1st set of employees)
-- These entries represent the initial set of employees who are managers within their respective departments.
INSERT INTO employee (first_name, last_name, role_id) VALUES 
('Alice', 'Wellington', 1),  -- Lead Developer in R&D
('Bob', 'Morrison', 2),      -- Marketing Director in Marketing
('Clara', 'Harrison', 3),    -- HR Specialist in HR
('David', 'Brown', 4),       -- Financial Analyst in Finance
('Eva', 'White', 5);         -- Sales Manager in Sales

-- Insert subordinates (2nd set of employees)
-- These entries represent employees who work under the managers listed above.
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES 
('Isabella', 'Moore', 1, 1),    -- Developer under Lead Developer
('Jack', 'Taylor', 2, 2),       -- Marketer under Marketing Director
('Karen', 'Davis', 3, 3),       -- HR Assistant under HR Specialist
('Leo', 'Wilson', 4, 4),        -- Junior Analyst under Financial Analyst
('Mia', 'Martinez', 5, 5);      -- Sales Associate under Sales Manager
