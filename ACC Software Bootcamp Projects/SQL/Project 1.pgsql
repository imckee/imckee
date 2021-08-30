-- Task 1:
-- Please find all employees that have a salary greater than 3000 and less than 4000

SELECT first_name, last_name, salary, commission_pct
FROM employees
WHERE commission_pct IS NOT NULL
    OR (salary > 30000
    AND salary < 40000);

SELECT employee_id, first_name last_name, salary, commission_pct
FROM employees
WHERE salary BETWEEN 30000 AND 40000;

-- Task 2:
-- 1. List the employees whose last name is longer than 6 characters.

SELECT last_name
FROM employees 
WHERE LENGTH(last_name) > 6;

-- 2. In this query, return the first 6 characters of their last names, the jobs they perform and their salary.

SELECT LEFT(last_name, 6), job_id, salary
FROM employees;

-- Task 3:
-- 1. Find all employees with salary greater than 8000, hired after 1996

SELECT first_name, last_name, salary, hire_date
FROM employees
WHERE salary > 8000
AND hire_date > '1-Jan-1996';

-- 2. Create a separate query to find lowest salary

SELECT MIN(salary)
FROM employees;

-- 3. Please also report the employee's total compensation (salary + commission) as a percentage

SELECT MAX(salary)
FROM employees;

-- Task 4:

SELECT first_name, last_name, department_name
FROM employees, departments
WHERE department_name = 'Sales'; 

-- Task 5:

SELECT first_name, last_name, email, department_name, city
FROM employees, departments, locations
WHERE department_name = 'Executive';

-- Task 6:

SELECT first_name, last_name, email, manager_id,  department_name, city
FROM employees, departments, locations,
WHERE department_name = 'Exeutive';

-- Task 7:

SELECT year_of_hiring
FROM employees;

