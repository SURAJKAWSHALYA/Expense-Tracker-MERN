-- 1. View all users
SELECT * FROM users;

-- 2. View Kamal's expenses (Filtering with WHERE)
SELECT * FROM expenses WHERE user_id = 1;

-- 3. JOIN Query: Get Expenses with Category Name and User Name
SELECT 
    users.full_name, 
    categories.name AS category_name, 
    expenses.amount, 
    expenses.date, 
    expenses.note 
FROM expenses
JOIN users ON expenses.user_id = users.id
JOIN categories ON expenses.category_id = categories.id;

-- 4. Test Error: Trying to add an expense for a user that doesn't exist
-- This will fail because of Foreign Key Constraint (User 99 does not exist)
-- INSERT INTO expenses (user_id, category_id, amount, date) VALUES (99, 1, 500.00, '2026-07-22');
