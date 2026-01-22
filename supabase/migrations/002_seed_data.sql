-- =====================
-- SEED DATA: Categories and Problems
-- =====================

-- Insert Categories
INSERT INTO categories (id, name, icon, order_index) VALUES
  ('a1b2c3d4-0001-4000-8000-000000000001', 'Arrays & Hashing', '📦', 0),
  ('a1b2c3d4-0002-4000-8000-000000000002', 'Two Pointers', '👆', 1),
  ('a1b2c3d4-0003-4000-8000-000000000003', 'Sliding Window', '🪟', 2),
  ('a1b2c3d4-0004-4000-8000-000000000004', 'Stack', '📚', 3),
  ('a1b2c3d4-0005-4000-8000-000000000005', 'Binary Search', '🔍', 4),
  ('a1b2c3d4-0006-4000-8000-000000000006', 'Linked List', '🔗', 5),
  ('a1b2c3d4-0007-4000-8000-000000000007', 'Trees', '🌳', 6),
  ('a1b2c3d4-0008-4000-8000-000000000008', 'Tries', '🔤', 7),
  ('a1b2c3d4-0009-4000-8000-000000000009', 'Heap / Priority Queue', '⛰️', 8),
  ('a1b2c3d4-0010-4000-8000-000000000010', 'Backtracking', '🔙', 9),
  ('a1b2c3d4-0011-4000-8000-000000000011', 'Graphs', '🕸️', 10),
  ('a1b2c3d4-0012-4000-8000-000000000012', 'Advanced Graphs', '🗺️', 11),
  ('a1b2c3d4-0013-4000-8000-000000000013', '1-D Dynamic Programming', '📊', 12),
  ('a1b2c3d4-0014-4000-8000-000000000014', '2-D Dynamic Programming', '🧮', 13),
  ('a1b2c3d4-0015-4000-8000-000000000015', 'Greedy', '🤑', 14),
  ('a1b2c3d4-0016-4000-8000-000000000016', 'Intervals', '📐', 15),
  ('a1b2c3d4-0017-4000-8000-000000000017', 'Math & Geometry', '🔢', 16),
  ('a1b2c3d4-0018-4000-8000-000000000018', 'Bit Manipulation', '💻', 17);

-- Arrays & Hashing Problems
INSERT INTO problems (category_id, title, difficulty, leetcode_number, is_default, order_index) VALUES
  ('a1b2c3d4-0001-4000-8000-000000000001', 'Two Sum', 'Easy', 1, true, 0),
  ('a1b2c3d4-0001-4000-8000-000000000001', 'Contains Duplicate', 'Easy', 217, true, 1),
  ('a1b2c3d4-0001-4000-8000-000000000001', 'Valid Anagram', 'Easy', 242, true, 2),
  ('a1b2c3d4-0001-4000-8000-000000000001', 'Group Anagrams', 'Medium', 49, true, 3),
  ('a1b2c3d4-0001-4000-8000-000000000001', 'Top K Frequent Elements', 'Medium', 347, true, 4),
  ('a1b2c3d4-0001-4000-8000-000000000001', 'Product of Array Except Self', 'Medium', 238, true, 5),
  ('a1b2c3d4-0001-4000-8000-000000000001', 'Valid Sudoku', 'Medium', 36, true, 6),
  ('a1b2c3d4-0001-4000-8000-000000000001', 'Encode and Decode Strings', 'Medium', 271, true, 7),
  ('a1b2c3d4-0001-4000-8000-000000000001', 'Longest Consecutive Sequence', 'Medium', 128, true, 8);

-- Two Pointers Problems
INSERT INTO problems (category_id, title, difficulty, leetcode_number, is_default, order_index) VALUES
  ('a1b2c3d4-0002-4000-8000-000000000002', 'Valid Palindrome', 'Easy', 125, true, 0),
  ('a1b2c3d4-0002-4000-8000-000000000002', 'Two Sum II', 'Medium', 167, true, 1),
  ('a1b2c3d4-0002-4000-8000-000000000002', '3Sum', 'Medium', 15, true, 2),
  ('a1b2c3d4-0002-4000-8000-000000000002', 'Container With Most Water', 'Medium', 11, true, 3),
  ('a1b2c3d4-0002-4000-8000-000000000002', 'Trapping Rain Water', 'Hard', 42, true, 4);

-- Sliding Window Problems
INSERT INTO problems (category_id, title, difficulty, leetcode_number, is_default, order_index) VALUES
  ('a1b2c3d4-0003-4000-8000-000000000003', 'Best Time to Buy and Sell Stock', 'Easy', 121, true, 0),
  ('a1b2c3d4-0003-4000-8000-000000000003', 'Longest Substring Without Repeating Characters', 'Medium', 3, true, 1),
  ('a1b2c3d4-0003-4000-8000-000000000003', 'Longest Repeating Character Replacement', 'Medium', 424, true, 2),
  ('a1b2c3d4-0003-4000-8000-000000000003', 'Permutation in String', 'Medium', 567, true, 3),
  ('a1b2c3d4-0003-4000-8000-000000000003', 'Minimum Window Substring', 'Hard', 76, true, 4),
  ('a1b2c3d4-0003-4000-8000-000000000003', 'Sliding Window Maximum', 'Hard', 239, true, 5);

-- Stack Problems
INSERT INTO problems (category_id, title, difficulty, leetcode_number, is_default, order_index) VALUES
  ('a1b2c3d4-0004-4000-8000-000000000004', 'Valid Parentheses', 'Easy', 20, true, 0),
  ('a1b2c3d4-0004-4000-8000-000000000004', 'Min Stack', 'Medium', 155, true, 1),
  ('a1b2c3d4-0004-4000-8000-000000000004', 'Evaluate Reverse Polish Notation', 'Medium', 150, true, 2),
  ('a1b2c3d4-0004-4000-8000-000000000004', 'Generate Parentheses', 'Medium', 22, true, 3),
  ('a1b2c3d4-0004-4000-8000-000000000004', 'Daily Temperatures', 'Medium', 739, true, 4),
  ('a1b2c3d4-0004-4000-8000-000000000004', 'Car Fleet', 'Medium', 853, true, 5),
  ('a1b2c3d4-0004-4000-8000-000000000004', 'Largest Rectangle in Histogram', 'Hard', 84, true, 6);

-- Binary Search Problems
INSERT INTO problems (category_id, title, difficulty, leetcode_number, is_default, order_index) VALUES
  ('a1b2c3d4-0005-4000-8000-000000000005', 'Binary Search', 'Easy', 704, true, 0),
  ('a1b2c3d4-0005-4000-8000-000000000005', 'Search a 2D Matrix', 'Medium', 74, true, 1),
  ('a1b2c3d4-0005-4000-8000-000000000005', 'Koko Eating Bananas', 'Medium', 875, true, 2),
  ('a1b2c3d4-0005-4000-8000-000000000005', 'Find Minimum in Rotated Sorted Array', 'Medium', 153, true, 3),
  ('a1b2c3d4-0005-4000-8000-000000000005', 'Search in Rotated Sorted Array', 'Medium', 33, true, 4),
  ('a1b2c3d4-0005-4000-8000-000000000005', 'Time Based Key-Value Store', 'Medium', 981, true, 5),
  ('a1b2c3d4-0005-4000-8000-000000000005', 'Median of Two Sorted Arrays', 'Hard', 4, true, 6);

-- Linked List Problems
INSERT INTO problems (category_id, title, difficulty, leetcode_number, is_default, order_index) VALUES
  ('a1b2c3d4-0006-4000-8000-000000000006', 'Reverse Linked List', 'Easy', 206, true, 0),
  ('a1b2c3d4-0006-4000-8000-000000000006', 'Merge Two Sorted Lists', 'Easy', 21, true, 1),
  ('a1b2c3d4-0006-4000-8000-000000000006', 'Linked List Cycle', 'Easy', 141, true, 2),
  ('a1b2c3d4-0006-4000-8000-000000000006', 'Reorder List', 'Medium', 143, true, 3),
  ('a1b2c3d4-0006-4000-8000-000000000006', 'Remove Nth Node From End', 'Medium', 19, true, 4),
  ('a1b2c3d4-0006-4000-8000-000000000006', 'Copy List with Random Pointer', 'Medium', 138, true, 5),
  ('a1b2c3d4-0006-4000-8000-000000000006', 'Add Two Numbers', 'Medium', 2, true, 6),
  ('a1b2c3d4-0006-4000-8000-000000000006', 'LRU Cache', 'Medium', 146, true, 7),
  ('a1b2c3d4-0006-4000-8000-000000000006', 'Merge k Sorted Lists', 'Hard', 23, true, 8),
  ('a1b2c3d4-0006-4000-8000-000000000006', 'Reverse Nodes in k-Group', 'Hard', 25, true, 9);

-- Trees Problems
INSERT INTO problems (category_id, title, difficulty, leetcode_number, is_default, order_index) VALUES
  ('a1b2c3d4-0007-4000-8000-000000000007', 'Invert Binary Tree', 'Easy', 226, true, 0),
  ('a1b2c3d4-0007-4000-8000-000000000007', 'Maximum Depth of Binary Tree', 'Easy', 104, true, 1),
  ('a1b2c3d4-0007-4000-8000-000000000007', 'Diameter of Binary Tree', 'Easy', 543, true, 2),
  ('a1b2c3d4-0007-4000-8000-000000000007', 'Balanced Binary Tree', 'Easy', 110, true, 3),
  ('a1b2c3d4-0007-4000-8000-000000000007', 'Same Tree', 'Easy', 100, true, 4),
  ('a1b2c3d4-0007-4000-8000-000000000007', 'Subtree of Another Tree', 'Easy', 572, true, 5),
  ('a1b2c3d4-0007-4000-8000-000000000007', 'Lowest Common Ancestor of BST', 'Medium', 235, true, 6),
  ('a1b2c3d4-0007-4000-8000-000000000007', 'Binary Tree Level Order Traversal', 'Medium', 102, true, 7),
  ('a1b2c3d4-0007-4000-8000-000000000007', 'Binary Tree Right Side View', 'Medium', 199, true, 8),
  ('a1b2c3d4-0007-4000-8000-000000000007', 'Count Good Nodes in Binary Tree', 'Medium', 1448, true, 9),
  ('a1b2c3d4-0007-4000-8000-000000000007', 'Validate Binary Search Tree', 'Medium', 98, true, 10),
  ('a1b2c3d4-0007-4000-8000-000000000007', 'Kth Smallest Element in BST', 'Medium', 230, true, 11),
  ('a1b2c3d4-0007-4000-8000-000000000007', 'Construct Binary Tree from Preorder and Inorder', 'Medium', 105, true, 12),
  ('a1b2c3d4-0007-4000-8000-000000000007', 'Binary Tree Maximum Path Sum', 'Hard', 124, true, 13),
  ('a1b2c3d4-0007-4000-8000-000000000007', 'Serialize and Deserialize Binary Tree', 'Hard', 297, true, 14);

-- Tries Problems
INSERT INTO problems (category_id, title, difficulty, leetcode_number, is_default, order_index) VALUES
  ('a1b2c3d4-0008-4000-8000-000000000008', 'Implement Trie (Prefix Tree)', 'Medium', 208, true, 0),
  ('a1b2c3d4-0008-4000-8000-000000000008', 'Design Add and Search Words Data Structure', 'Medium', 211, true, 1),
  ('a1b2c3d4-0008-4000-8000-000000000008', 'Word Search II', 'Hard', 212, true, 2);

-- Heap / Priority Queue Problems
INSERT INTO problems (category_id, title, difficulty, leetcode_number, is_default, order_index) VALUES
  ('a1b2c3d4-0009-4000-8000-000000000009', 'Kth Largest Element in a Stream', 'Easy', 703, true, 0),
  ('a1b2c3d4-0009-4000-8000-000000000009', 'Last Stone Weight', 'Easy', 1046, true, 1),
  ('a1b2c3d4-0009-4000-8000-000000000009', 'K Closest Points to Origin', 'Medium', 973, true, 2),
  ('a1b2c3d4-0009-4000-8000-000000000009', 'Kth Largest Element in an Array', 'Medium', 215, true, 3),
  ('a1b2c3d4-0009-4000-8000-000000000009', 'Task Scheduler', 'Medium', 621, true, 4),
  ('a1b2c3d4-0009-4000-8000-000000000009', 'Design Twitter', 'Medium', 355, true, 5),
  ('a1b2c3d4-0009-4000-8000-000000000009', 'Find Median from Data Stream', 'Hard', 295, true, 6);

-- Backtracking Problems
INSERT INTO problems (category_id, title, difficulty, leetcode_number, is_default, order_index) VALUES
  ('a1b2c3d4-0010-4000-8000-000000000010', 'Subsets', 'Medium', 78, true, 0),
  ('a1b2c3d4-0010-4000-8000-000000000010', 'Combination Sum', 'Medium', 39, true, 1),
  ('a1b2c3d4-0010-4000-8000-000000000010', 'Permutations', 'Medium', 46, true, 2),
  ('a1b2c3d4-0010-4000-8000-000000000010', 'Subsets II', 'Medium', 90, true, 3),
  ('a1b2c3d4-0010-4000-8000-000000000010', 'Combination Sum II', 'Medium', 40, true, 4),
  ('a1b2c3d4-0010-4000-8000-000000000010', 'Word Search', 'Medium', 79, true, 5),
  ('a1b2c3d4-0010-4000-8000-000000000010', 'Palindrome Partitioning', 'Medium', 131, true, 6),
  ('a1b2c3d4-0010-4000-8000-000000000010', 'Letter Combinations of a Phone Number', 'Medium', 17, true, 7),
  ('a1b2c3d4-0010-4000-8000-000000000010', 'N-Queens', 'Hard', 51, true, 8);

-- Graphs Problems
INSERT INTO problems (category_id, title, difficulty, leetcode_number, is_default, order_index) VALUES
  ('a1b2c3d4-0011-4000-8000-000000000011', 'Number of Islands', 'Medium', 200, true, 0),
  ('a1b2c3d4-0011-4000-8000-000000000011', 'Clone Graph', 'Medium', 133, true, 1),
  ('a1b2c3d4-0011-4000-8000-000000000011', 'Max Area of Island', 'Medium', 695, true, 2),
  ('a1b2c3d4-0011-4000-8000-000000000011', 'Pacific Atlantic Water Flow', 'Medium', 417, true, 3),
  ('a1b2c3d4-0011-4000-8000-000000000011', 'Surrounded Regions', 'Medium', 130, true, 4),
  ('a1b2c3d4-0011-4000-8000-000000000011', 'Rotting Oranges', 'Medium', 994, true, 5),
  ('a1b2c3d4-0011-4000-8000-000000000011', 'Walls and Gates', 'Medium', 286, true, 6),
  ('a1b2c3d4-0011-4000-8000-000000000011', 'Course Schedule', 'Medium', 207, true, 7),
  ('a1b2c3d4-0011-4000-8000-000000000011', 'Course Schedule II', 'Medium', 210, true, 8),
  ('a1b2c3d4-0011-4000-8000-000000000011', 'Redundant Connection', 'Medium', 684, true, 9),
  ('a1b2c3d4-0011-4000-8000-000000000011', 'Number of Connected Components', 'Medium', 323, true, 10),
  ('a1b2c3d4-0011-4000-8000-000000000011', 'Graph Valid Tree', 'Medium', 261, true, 11),
  ('a1b2c3d4-0011-4000-8000-000000000011', 'Word Ladder', 'Hard', 127, true, 12);

-- Advanced Graphs Problems
INSERT INTO problems (category_id, title, difficulty, leetcode_number, is_default, order_index) VALUES
  ('a1b2c3d4-0012-4000-8000-000000000012', 'Reconstruct Itinerary', 'Hard', 332, true, 0),
  ('a1b2c3d4-0012-4000-8000-000000000012', 'Min Cost to Connect All Points', 'Medium', 1584, true, 1),
  ('a1b2c3d4-0012-4000-8000-000000000012', 'Network Delay Time', 'Medium', 743, true, 2),
  ('a1b2c3d4-0012-4000-8000-000000000012', 'Swim in Rising Water', 'Hard', 778, true, 3),
  ('a1b2c3d4-0012-4000-8000-000000000012', 'Alien Dictionary', 'Hard', 269, true, 4),
  ('a1b2c3d4-0012-4000-8000-000000000012', 'Cheapest Flights Within K Stops', 'Medium', 787, true, 5);

-- 1-D Dynamic Programming Problems
INSERT INTO problems (category_id, title, difficulty, leetcode_number, is_default, order_index) VALUES
  ('a1b2c3d4-0013-4000-8000-000000000013', 'Climbing Stairs', 'Easy', 70, true, 0),
  ('a1b2c3d4-0013-4000-8000-000000000013', 'Min Cost Climbing Stairs', 'Easy', 746, true, 1),
  ('a1b2c3d4-0013-4000-8000-000000000013', 'House Robber', 'Medium', 198, true, 2),
  ('a1b2c3d4-0013-4000-8000-000000000013', 'House Robber II', 'Medium', 213, true, 3),
  ('a1b2c3d4-0013-4000-8000-000000000013', 'Longest Palindromic Substring', 'Medium', 5, true, 4),
  ('a1b2c3d4-0013-4000-8000-000000000013', 'Palindromic Substrings', 'Medium', 647, true, 5),
  ('a1b2c3d4-0013-4000-8000-000000000013', 'Decode Ways', 'Medium', 91, true, 6),
  ('a1b2c3d4-0013-4000-8000-000000000013', 'Coin Change', 'Medium', 322, true, 7),
  ('a1b2c3d4-0013-4000-8000-000000000013', 'Maximum Product Subarray', 'Medium', 152, true, 8),
  ('a1b2c3d4-0013-4000-8000-000000000013', 'Word Break', 'Medium', 139, true, 9),
  ('a1b2c3d4-0013-4000-8000-000000000013', 'Longest Increasing Subsequence', 'Medium', 300, true, 10),
  ('a1b2c3d4-0013-4000-8000-000000000013', 'Partition Equal Subset Sum', 'Medium', 416, true, 11);

-- 2-D Dynamic Programming Problems
INSERT INTO problems (category_id, title, difficulty, leetcode_number, is_default, order_index) VALUES
  ('a1b2c3d4-0014-4000-8000-000000000014', 'Unique Paths', 'Medium', 62, true, 0),
  ('a1b2c3d4-0014-4000-8000-000000000014', 'Longest Common Subsequence', 'Medium', 1143, true, 1),
  ('a1b2c3d4-0014-4000-8000-000000000014', 'Best Time to Buy and Sell Stock with Cooldown', 'Medium', 309, true, 2),
  ('a1b2c3d4-0014-4000-8000-000000000014', 'Coin Change II', 'Medium', 518, true, 3),
  ('a1b2c3d4-0014-4000-8000-000000000014', 'Target Sum', 'Medium', 494, true, 4),
  ('a1b2c3d4-0014-4000-8000-000000000014', 'Interleaving String', 'Medium', 97, true, 5),
  ('a1b2c3d4-0014-4000-8000-000000000014', 'Longest Increasing Path in a Matrix', 'Hard', 329, true, 6),
  ('a1b2c3d4-0014-4000-8000-000000000014', 'Distinct Subsequences', 'Hard', 115, true, 7),
  ('a1b2c3d4-0014-4000-8000-000000000014', 'Edit Distance', 'Medium', 72, true, 8),
  ('a1b2c3d4-0014-4000-8000-000000000014', 'Burst Balloons', 'Hard', 312, true, 9),
  ('a1b2c3d4-0014-4000-8000-000000000014', 'Regular Expression Matching', 'Hard', 10, true, 10);

-- Greedy Problems
INSERT INTO problems (category_id, title, difficulty, leetcode_number, is_default, order_index) VALUES
  ('a1b2c3d4-0015-4000-8000-000000000015', 'Maximum Subarray', 'Medium', 53, true, 0),
  ('a1b2c3d4-0015-4000-8000-000000000015', 'Jump Game', 'Medium', 55, true, 1),
  ('a1b2c3d4-0015-4000-8000-000000000015', 'Jump Game II', 'Medium', 45, true, 2),
  ('a1b2c3d4-0015-4000-8000-000000000015', 'Gas Station', 'Medium', 134, true, 3),
  ('a1b2c3d4-0015-4000-8000-000000000015', 'Hand of Straights', 'Medium', 846, true, 4),
  ('a1b2c3d4-0015-4000-8000-000000000015', 'Merge Triplets to Form Target Triplet', 'Medium', 1899, true, 5),
  ('a1b2c3d4-0015-4000-8000-000000000015', 'Partition Labels', 'Medium', 763, true, 6),
  ('a1b2c3d4-0015-4000-8000-000000000015', 'Valid Parenthesis String', 'Medium', 678, true, 7);

-- Intervals Problems
INSERT INTO problems (category_id, title, difficulty, leetcode_number, is_default, order_index) VALUES
  ('a1b2c3d4-0016-4000-8000-000000000016', 'Insert Interval', 'Medium', 57, true, 0),
  ('a1b2c3d4-0016-4000-8000-000000000016', 'Merge Intervals', 'Medium', 56, true, 1),
  ('a1b2c3d4-0016-4000-8000-000000000016', 'Non-overlapping Intervals', 'Medium', 435, true, 2),
  ('a1b2c3d4-0016-4000-8000-000000000016', 'Meeting Rooms', 'Easy', 252, true, 3),
  ('a1b2c3d4-0016-4000-8000-000000000016', 'Meeting Rooms II', 'Medium', 253, true, 4),
  ('a1b2c3d4-0016-4000-8000-000000000016', 'Minimum Interval to Include Each Query', 'Hard', 1851, true, 5);

-- Math & Geometry Problems
INSERT INTO problems (category_id, title, difficulty, leetcode_number, is_default, order_index) VALUES
  ('a1b2c3d4-0017-4000-8000-000000000017', 'Rotate Image', 'Medium', 48, true, 0),
  ('a1b2c3d4-0017-4000-8000-000000000017', 'Spiral Matrix', 'Medium', 54, true, 1),
  ('a1b2c3d4-0017-4000-8000-000000000017', 'Set Matrix Zeroes', 'Medium', 73, true, 2),
  ('a1b2c3d4-0017-4000-8000-000000000017', 'Happy Number', 'Easy', 202, true, 3),
  ('a1b2c3d4-0017-4000-8000-000000000017', 'Plus One', 'Easy', 66, true, 4),
  ('a1b2c3d4-0017-4000-8000-000000000017', 'Pow(x, n)', 'Medium', 50, true, 5),
  ('a1b2c3d4-0017-4000-8000-000000000017', 'Multiply Strings', 'Medium', 43, true, 6),
  ('a1b2c3d4-0017-4000-8000-000000000017', 'Detect Squares', 'Medium', 2013, true, 7);

-- Bit Manipulation Problems
INSERT INTO problems (category_id, title, difficulty, leetcode_number, is_default, order_index) VALUES
  ('a1b2c3d4-0018-4000-8000-000000000018', 'Single Number', 'Easy', 136, true, 0),
  ('a1b2c3d4-0018-4000-8000-000000000018', 'Number of 1 Bits', 'Easy', 191, true, 1),
  ('a1b2c3d4-0018-4000-8000-000000000018', 'Counting Bits', 'Easy', 338, true, 2),
  ('a1b2c3d4-0018-4000-8000-000000000018', 'Reverse Bits', 'Easy', 190, true, 3),
  ('a1b2c3d4-0018-4000-8000-000000000018', 'Missing Number', 'Easy', 268, true, 4),
  ('a1b2c3d4-0018-4000-8000-000000000018', 'Sum of Two Integers', 'Medium', 371, true, 5),
  ('a1b2c3d4-0018-4000-8000-000000000018', 'Reverse Integer', 'Medium', 7, true, 6);
