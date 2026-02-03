-- =====================
-- LeetCode Top 75 - Additional problems
-- Adds new categories (Prefix Sum, Queue) and problems. Skips duplicates.
-- =====================

-- New categories (Prefix Sum, Queue)
INSERT INTO categories (id, name, icon, order_index) VALUES
  ('a1b2c3d4-0019-4000-8000-000000000019', 'Prefix Sum', '📈', 18),
  ('a1b2c3d4-0020-4000-8000-000000000020', 'Queue', '📋', 19)
ON CONFLICT (id) DO NOTHING;

-- Array / String → Arrays & Hashing (0001). Skip: Product of Array Except Self (already in seed)
INSERT INTO problems (category_id, title, difficulty, leetcode_number, is_default, order_index)
SELECT 'a1b2c3d4-0001-4000-8000-000000000001', 'Merge Strings Alternately', 'Easy', 1768, true, 9 WHERE NOT EXISTS (SELECT 1 FROM problems WHERE category_id = 'a1b2c3d4-0001-4000-8000-000000000001' AND title = 'Merge Strings Alternately');
INSERT INTO problems (category_id, title, difficulty, leetcode_number, is_default, order_index)
SELECT 'a1b2c3d4-0001-4000-8000-000000000001', 'Greatest Common Divisor of Strings', 'Easy', 1071, true, 10 WHERE NOT EXISTS (SELECT 1 FROM problems WHERE category_id = 'a1b2c3d4-0001-4000-8000-000000000001' AND title = 'Greatest Common Divisor of Strings');
INSERT INTO problems (category_id, title, difficulty, leetcode_number, is_default, order_index)
SELECT 'a1b2c3d4-0001-4000-8000-000000000001', 'Kids With the Greatest Number of Candies', 'Easy', 1431, true, 11 WHERE NOT EXISTS (SELECT 1 FROM problems WHERE category_id = 'a1b2c3d4-0001-4000-8000-000000000001' AND title = 'Kids With the Greatest Number of Candies');
INSERT INTO problems (category_id, title, difficulty, leetcode_number, is_default, order_index)
SELECT 'a1b2c3d4-0001-4000-8000-000000000001', 'Can Place Flowers', 'Easy', 605, true, 12 WHERE NOT EXISTS (SELECT 1 FROM problems WHERE category_id = 'a1b2c3d4-0001-4000-8000-000000000001' AND title = 'Can Place Flowers');
INSERT INTO problems (category_id, title, difficulty, leetcode_number, is_default, order_index)
SELECT 'a1b2c3d4-0001-4000-8000-000000000001', 'Reverse Vowels of a String', 'Easy', 345, true, 13 WHERE NOT EXISTS (SELECT 1 FROM problems WHERE category_id = 'a1b2c3d4-0001-4000-8000-000000000001' AND title = 'Reverse Vowels of a String');
INSERT INTO problems (category_id, title, difficulty, leetcode_number, is_default, order_index)
SELECT 'a1b2c3d4-0001-4000-8000-000000000001', 'Reverse Words in a String', 'Medium', 151, true, 14 WHERE NOT EXISTS (SELECT 1 FROM problems WHERE category_id = 'a1b2c3d4-0001-4000-8000-000000000001' AND title = 'Reverse Words in a String');
INSERT INTO problems (category_id, title, difficulty, leetcode_number, is_default, order_index)
SELECT 'a1b2c3d4-0001-4000-8000-000000000001', 'Increasing Triplet Subsequence', 'Medium', 334, true, 15 WHERE NOT EXISTS (SELECT 1 FROM problems WHERE category_id = 'a1b2c3d4-0001-4000-8000-000000000001' AND title = 'Increasing Triplet Subsequence');
INSERT INTO problems (category_id, title, difficulty, leetcode_number, is_default, order_index)
SELECT 'a1b2c3d4-0001-4000-8000-000000000001', 'String Compression', 'Medium', 443, true, 16 WHERE NOT EXISTS (SELECT 1 FROM problems WHERE category_id = 'a1b2c3d4-0001-4000-8000-000000000001' AND title = 'String Compression');

-- Two Pointers (0002). Skip: Container With Most Water (already in seed)
INSERT INTO problems (category_id, title, difficulty, leetcode_number, is_default, order_index)
SELECT 'a1b2c3d4-0002-4000-8000-000000000002', 'Move Zeroes', 'Easy', 283, true, 5 WHERE NOT EXISTS (SELECT 1 FROM problems WHERE category_id = 'a1b2c3d4-0002-4000-8000-000000000002' AND title = 'Move Zeroes');
INSERT INTO problems (category_id, title, difficulty, leetcode_number, is_default, order_index)
SELECT 'a1b2c3d4-0002-4000-8000-000000000002', 'Is Subsequence', 'Easy', 392, true, 6 WHERE NOT EXISTS (SELECT 1 FROM problems WHERE category_id = 'a1b2c3d4-0002-4000-8000-000000000002' AND title = 'Is Subsequence');
INSERT INTO problems (category_id, title, difficulty, leetcode_number, is_default, order_index)
SELECT 'a1b2c3d4-0002-4000-8000-000000000002', 'Max Number of K-Sum Pairs', 'Medium', 1679, true, 7 WHERE NOT EXISTS (SELECT 1 FROM problems WHERE category_id = 'a1b2c3d4-0002-4000-8000-000000000002' AND title = 'Max Number of K-Sum Pairs');

-- Sliding Window (0003)
INSERT INTO problems (category_id, title, difficulty, leetcode_number, is_default, order_index)
SELECT 'a1b2c3d4-0003-4000-8000-000000000003', 'Maximum Average Subarray I', 'Easy', 643, true, 6 WHERE NOT EXISTS (SELECT 1 FROM problems WHERE category_id = 'a1b2c3d4-0003-4000-8000-000000000003' AND title = 'Maximum Average Subarray I');
INSERT INTO problems (category_id, title, difficulty, leetcode_number, is_default, order_index)
SELECT 'a1b2c3d4-0003-4000-8000-000000000003', 'Maximum Number of Vowels in a Substring of Given Length', 'Medium', 1456, true, 7 WHERE NOT EXISTS (SELECT 1 FROM problems WHERE category_id = 'a1b2c3d4-0003-4000-8000-000000000003' AND title = 'Maximum Number of Vowels in a Substring of Given Length');
INSERT INTO problems (category_id, title, difficulty, leetcode_number, is_default, order_index)
SELECT 'a1b2c3d4-0003-4000-8000-000000000003', 'Max Consecutive Ones III', 'Medium', 1004, true, 8 WHERE NOT EXISTS (SELECT 1 FROM problems WHERE category_id = 'a1b2c3d4-0003-4000-8000-000000000003' AND title = 'Max Consecutive Ones III');
INSERT INTO problems (category_id, title, difficulty, leetcode_number, is_default, order_index)
SELECT 'a1b2c3d4-0003-4000-8000-000000000003', 'Longest Subarray of 1''s After Deleting One Element', 'Medium', 1493, true, 9 WHERE NOT EXISTS (SELECT 1 FROM problems WHERE category_id = 'a1b2c3d4-0003-4000-8000-000000000003' AND title = 'Longest Subarray of 1''s After Deleting One Element');

-- Prefix Sum (new category 0019)
INSERT INTO problems (category_id, title, difficulty, leetcode_number, is_default, order_index) VALUES
  ('a1b2c3d4-0019-4000-8000-000000000019', 'Find the Highest Altitude', 'Easy', 1732, true, 0),
  ('a1b2c3d4-0019-4000-8000-000000000019', 'Find Pivot Index', 'Easy', 724, true, 1);

-- Hash Map / Set → Arrays & Hashing (0001)
INSERT INTO problems (category_id, title, difficulty, leetcode_number, is_default, order_index)
SELECT 'a1b2c3d4-0001-4000-8000-000000000001', 'Find the Difference of Two Arrays', 'Easy', 2215, true, 17 WHERE NOT EXISTS (SELECT 1 FROM problems WHERE category_id = 'a1b2c3d4-0001-4000-8000-000000000001' AND title = 'Find the Difference of Two Arrays');
INSERT INTO problems (category_id, title, difficulty, leetcode_number, is_default, order_index)
SELECT 'a1b2c3d4-0001-4000-8000-000000000001', 'Unique Number of Occurrences', 'Easy', 1207, true, 18 WHERE NOT EXISTS (SELECT 1 FROM problems WHERE category_id = 'a1b2c3d4-0001-4000-8000-000000000001' AND title = 'Unique Number of Occurrences');
INSERT INTO problems (category_id, title, difficulty, leetcode_number, is_default, order_index)
SELECT 'a1b2c3d4-0001-4000-8000-000000000001', 'Determine if Two Strings Are Close', 'Medium', 1657, true, 19 WHERE NOT EXISTS (SELECT 1 FROM problems WHERE category_id = 'a1b2c3d4-0001-4000-8000-000000000001' AND title = 'Determine if Two Strings Are Close');
INSERT INTO problems (category_id, title, difficulty, leetcode_number, is_default, order_index)
SELECT 'a1b2c3d4-0001-4000-8000-000000000001', 'Equal Row and Column Pairs', 'Medium', 2352, true, 20 WHERE NOT EXISTS (SELECT 1 FROM problems WHERE category_id = 'a1b2c3d4-0001-4000-8000-000000000001' AND title = 'Equal Row and Column Pairs');

-- Stack (0004)
INSERT INTO problems (category_id, title, difficulty, leetcode_number, is_default, order_index)
SELECT 'a1b2c3d4-0004-4000-8000-000000000004', 'Removing Stars From a String', 'Medium', 2390, true, 7 WHERE NOT EXISTS (SELECT 1 FROM problems WHERE category_id = 'a1b2c3d4-0004-4000-8000-000000000004' AND title = 'Removing Stars From a String');
INSERT INTO problems (category_id, title, difficulty, leetcode_number, is_default, order_index)
SELECT 'a1b2c3d4-0004-4000-8000-000000000004', 'Asteroid Collision', 'Medium', 735, true, 8 WHERE NOT EXISTS (SELECT 1 FROM problems WHERE category_id = 'a1b2c3d4-0004-4000-8000-000000000004' AND title = 'Asteroid Collision');
INSERT INTO problems (category_id, title, difficulty, leetcode_number, is_default, order_index)
SELECT 'a1b2c3d4-0004-4000-8000-000000000004', 'Decode String', 'Medium', 394, true, 9 WHERE NOT EXISTS (SELECT 1 FROM problems WHERE category_id = 'a1b2c3d4-0004-4000-8000-000000000004' AND title = 'Decode String');

-- Queue (new category 0020)
INSERT INTO problems (category_id, title, difficulty, leetcode_number, is_default, order_index) VALUES
  ('a1b2c3d4-0020-4000-8000-000000000020', 'Number of Recent Calls', 'Easy', 933, true, 0),
  ('a1b2c3d4-0020-4000-8000-000000000020', 'Dota2 Senate', 'Medium', 649, true, 1);

-- Linked List (0006). Skip: Reverse Linked List (already in seed)
INSERT INTO problems (category_id, title, difficulty, leetcode_number, is_default, order_index)
SELECT 'a1b2c3d4-0006-4000-8000-000000000006', 'Delete the Middle Node of a Linked List', 'Medium', 2095, true, 10 WHERE NOT EXISTS (SELECT 1 FROM problems WHERE category_id = 'a1b2c3d4-0006-4000-8000-000000000006' AND title = 'Delete the Middle Node of a Linked List');
INSERT INTO problems (category_id, title, difficulty, leetcode_number, is_default, order_index)
SELECT 'a1b2c3d4-0006-4000-8000-000000000006', 'Odd Even Linked List', 'Medium', 328, true, 11 WHERE NOT EXISTS (SELECT 1 FROM problems WHERE category_id = 'a1b2c3d4-0006-4000-8000-000000000006' AND title = 'Odd Even Linked List');
INSERT INTO problems (category_id, title, difficulty, leetcode_number, is_default, order_index)
SELECT 'a1b2c3d4-0006-4000-8000-000000000006', 'Maximum Twin Sum of a Linked List', 'Medium', 2130, true, 12 WHERE NOT EXISTS (SELECT 1 FROM problems WHERE category_id = 'a1b2c3d4-0006-4000-8000-000000000006' AND title = 'Maximum Twin Sum of a Linked List');

-- Binary Tree → Trees (0007). Skip: Maximum Depth, Count Good Nodes, Binary Tree Right Side View (already in seed)
INSERT INTO problems (category_id, title, difficulty, leetcode_number, is_default, order_index)
SELECT 'a1b2c3d4-0007-4000-8000-000000000007', 'Leaf-Similar Trees', 'Easy', 872, true, 15 WHERE NOT EXISTS (SELECT 1 FROM problems WHERE category_id = 'a1b2c3d4-0007-4000-8000-000000000007' AND title = 'Leaf-Similar Trees');
INSERT INTO problems (category_id, title, difficulty, leetcode_number, is_default, order_index)
SELECT 'a1b2c3d4-0007-4000-8000-000000000007', 'Path Sum III', 'Medium', 437, true, 16 WHERE NOT EXISTS (SELECT 1 FROM problems WHERE category_id = 'a1b2c3d4-0007-4000-8000-000000000007' AND title = 'Path Sum III');
INSERT INTO problems (category_id, title, difficulty, leetcode_number, is_default, order_index)
SELECT 'a1b2c3d4-0007-4000-8000-000000000007', 'Longest ZigZag Path in a Binary Tree', 'Medium', 1372, true, 17 WHERE NOT EXISTS (SELECT 1 FROM problems WHERE category_id = 'a1b2c3d4-0007-4000-8000-000000000007' AND title = 'Longest ZigZag Path in a Binary Tree');
INSERT INTO problems (category_id, title, difficulty, leetcode_number, is_default, order_index)
SELECT 'a1b2c3d4-0007-4000-8000-000000000007', 'Lowest Common Ancestor of a Binary Tree', 'Medium', 236, true, 18 WHERE NOT EXISTS (SELECT 1 FROM problems WHERE category_id = 'a1b2c3d4-0007-4000-8000-000000000007' AND title = 'Lowest Common Ancestor of a Binary Tree');
INSERT INTO problems (category_id, title, difficulty, leetcode_number, is_default, order_index)
SELECT 'a1b2c3d4-0007-4000-8000-000000000007', 'Maximum Level Sum of a Binary Tree', 'Medium', 1161, true, 19 WHERE NOT EXISTS (SELECT 1 FROM problems WHERE category_id = 'a1b2c3d4-0007-4000-8000-000000000007' AND title = 'Maximum Level Sum of a Binary Tree');
INSERT INTO problems (category_id, title, difficulty, leetcode_number, is_default, order_index)
SELECT 'a1b2c3d4-0007-4000-8000-000000000007', 'Search in a Binary Search Tree', 'Easy', 700, true, 20 WHERE NOT EXISTS (SELECT 1 FROM problems WHERE category_id = 'a1b2c3d4-0007-4000-8000-000000000007' AND title = 'Search in a Binary Search Tree');
INSERT INTO problems (category_id, title, difficulty, leetcode_number, is_default, order_index)
SELECT 'a1b2c3d4-0007-4000-8000-000000000007', 'Delete Node in a BST', 'Medium', 450, true, 21 WHERE NOT EXISTS (SELECT 1 FROM problems WHERE category_id = 'a1b2c3d4-0007-4000-8000-000000000007' AND title = 'Delete Node in a BST');

-- Graphs (0011). Skip: Rotting Oranges (already in seed)
INSERT INTO problems (category_id, title, difficulty, leetcode_number, is_default, order_index)
SELECT 'a1b2c3d4-0011-4000-8000-000000000011', 'Keys and Rooms', 'Medium', 841, true, 13 WHERE NOT EXISTS (SELECT 1 FROM problems WHERE category_id = 'a1b2c3d4-0011-4000-8000-000000000011' AND title = 'Keys and Rooms');
INSERT INTO problems (category_id, title, difficulty, leetcode_number, is_default, order_index)
SELECT 'a1b2c3d4-0011-4000-8000-000000000011', 'Number of Provinces', 'Medium', 547, true, 14 WHERE NOT EXISTS (SELECT 1 FROM problems WHERE category_id = 'a1b2c3d4-0011-4000-8000-000000000011' AND title = 'Number of Provinces');
INSERT INTO problems (category_id, title, difficulty, leetcode_number, is_default, order_index)
SELECT 'a1b2c3d4-0011-4000-8000-000000000011', 'Reorder Routes to Make All Paths Lead to the City Zero', 'Medium', 1466, true, 15 WHERE NOT EXISTS (SELECT 1 FROM problems WHERE category_id = 'a1b2c3d4-0011-4000-8000-000000000011' AND title = 'Reorder Routes to Make All Paths Lead to the City Zero');
INSERT INTO problems (category_id, title, difficulty, leetcode_number, is_default, order_index)
SELECT 'a1b2c3d4-0011-4000-8000-000000000011', 'Evaluate Division', 'Medium', 399, true, 16 WHERE NOT EXISTS (SELECT 1 FROM problems WHERE category_id = 'a1b2c3d4-0011-4000-8000-000000000011' AND title = 'Evaluate Division');
INSERT INTO problems (category_id, title, difficulty, leetcode_number, is_default, order_index)
SELECT 'a1b2c3d4-0011-4000-8000-000000000011', 'Nearest Exit from Entrance in Maze', 'Medium', 1926, true, 17 WHERE NOT EXISTS (SELECT 1 FROM problems WHERE category_id = 'a1b2c3d4-0011-4000-8000-000000000011' AND title = 'Nearest Exit from Entrance in Maze');

-- Heap / Priority Queue (0009). Skip: Kth Largest Element in an Array (already in seed)
INSERT INTO problems (category_id, title, difficulty, leetcode_number, is_default, order_index)
SELECT 'a1b2c3d4-0009-4000-8000-000000000009', 'Smallest Number in Infinite Set', 'Medium', 2336, true, 7 WHERE NOT EXISTS (SELECT 1 FROM problems WHERE category_id = 'a1b2c3d4-0009-4000-8000-000000000009' AND title = 'Smallest Number in Infinite Set');
