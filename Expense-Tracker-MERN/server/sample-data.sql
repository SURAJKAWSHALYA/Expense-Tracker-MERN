-- 1. Insert Users
INSERT INTO users (full_name, email, password_hash) 
VALUES 
('Kamal Perera', 'kamal@example.com', 'hashed_pass_1'),
('Nimal Silva', 'nimal@example.com', 'hashed_pass_2');

-- 2. Insert Categories
INSERT INTO categories (user_id, name, icon)
VALUES 
(1, 'Food', 'burger.png'),
(1, 'Transport', 'bus.png'),
(2, 'Rent', 'house.png');

-- 3. Insert Expenses
INSERT INTO expenses (user_id, category_id, amount, date, note)
VALUES 
(1, 1, 1500.00, '2026-07-20', 'Lunch with friends'),
(1, 2, 500.00, '2026-07-21', 'Bus ticket'),
(2, 3, 25000.00, '2026-07-01', 'Monthly Rent');

-- 4. Insert Transactions
INSERT INTO transactions (user_id, category_id, type, amount, date, note)
VALUES 
(1, 1, 'expense', 1500.00, '2026-07-20', 'Lunch with friends'),
(1, 2, 'expense', 500.00, '2026-07-21', 'Bus ticket');

-- 5. Insert Budgets
INSERT INTO budgets (user_id, category_id, limit_amount, month_year)
VALUES 
(1, 1, 10000.00, '2026-07'),
(2, 3, 30000.00, '2026-07');
