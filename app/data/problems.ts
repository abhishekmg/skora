export type Difficulty = "Easy" | "Medium" | "Hard";

export interface Problem {
  id: string;
  title: string;
  difficulty: Difficulty;
  leetcodeNumber?: number;
  link?: string;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  problems: Problem[];
}

export const roadmapData: Category[] = [
  {
    id: "arrays-hashing",
    name: "Arrays & Hashing",
    icon: "📦",
    problems: [
      { id: "two-sum", title: "Two Sum", difficulty: "Easy", leetcodeNumber: 1 },
      { id: "contains-duplicate", title: "Contains Duplicate", difficulty: "Easy", leetcodeNumber: 217 },
      { id: "valid-anagram", title: "Valid Anagram", difficulty: "Easy", leetcodeNumber: 242 },
      { id: "group-anagrams", title: "Group Anagrams", difficulty: "Medium", leetcodeNumber: 49 },
      { id: "top-k-frequent", title: "Top K Frequent Elements", difficulty: "Medium", leetcodeNumber: 347 },
      { id: "product-except-self", title: "Product of Array Except Self", difficulty: "Medium", leetcodeNumber: 238 },
      { id: "valid-sudoku", title: "Valid Sudoku", difficulty: "Medium", leetcodeNumber: 36 },
      { id: "encode-decode-strings", title: "Encode and Decode Strings", difficulty: "Medium", leetcodeNumber: 271 },
      { id: "longest-consecutive", title: "Longest Consecutive Sequence", difficulty: "Medium", leetcodeNumber: 128 },
    ],
  },
  {
    id: "two-pointers",
    name: "Two Pointers",
    icon: "👆",
    problems: [
      { id: "valid-palindrome", title: "Valid Palindrome", difficulty: "Easy", leetcodeNumber: 125 },
      { id: "two-sum-ii", title: "Two Sum II", difficulty: "Medium", leetcodeNumber: 167 },
      { id: "3sum", title: "3Sum", difficulty: "Medium", leetcodeNumber: 15 },
      { id: "container-water", title: "Container With Most Water", difficulty: "Medium", leetcodeNumber: 11 },
      { id: "trapping-rain", title: "Trapping Rain Water", difficulty: "Hard", leetcodeNumber: 42 },
    ],
  },
  {
    id: "sliding-window",
    name: "Sliding Window",
    icon: "🪟",
    problems: [
      { id: "best-time-buy-sell", title: "Best Time to Buy and Sell Stock", difficulty: "Easy", leetcodeNumber: 121 },
      { id: "longest-substring-no-repeat", title: "Longest Substring Without Repeating Characters", difficulty: "Medium", leetcodeNumber: 3 },
      { id: "longest-repeating-char", title: "Longest Repeating Character Replacement", difficulty: "Medium", leetcodeNumber: 424 },
      { id: "permutation-string", title: "Permutation in String", difficulty: "Medium", leetcodeNumber: 567 },
      { id: "min-window-substring", title: "Minimum Window Substring", difficulty: "Hard", leetcodeNumber: 76 },
      { id: "sliding-window-max", title: "Sliding Window Maximum", difficulty: "Hard", leetcodeNumber: 239 },
    ],
  },
  {
    id: "stack",
    name: "Stack",
    icon: "📚",
    problems: [
      { id: "valid-parentheses", title: "Valid Parentheses", difficulty: "Easy", leetcodeNumber: 20 },
      { id: "min-stack", title: "Min Stack", difficulty: "Medium", leetcodeNumber: 155 },
      { id: "eval-rpn", title: "Evaluate Reverse Polish Notation", difficulty: "Medium", leetcodeNumber: 150 },
      { id: "generate-parentheses", title: "Generate Parentheses", difficulty: "Medium", leetcodeNumber: 22 },
      { id: "daily-temperatures", title: "Daily Temperatures", difficulty: "Medium", leetcodeNumber: 739 },
      { id: "car-fleet", title: "Car Fleet", difficulty: "Medium", leetcodeNumber: 853 },
      { id: "largest-rect-histogram", title: "Largest Rectangle in Histogram", difficulty: "Hard", leetcodeNumber: 84 },
    ],
  },
  {
    id: "binary-search",
    name: "Binary Search",
    icon: "🔍",
    problems: [
      { id: "binary-search", title: "Binary Search", difficulty: "Easy", leetcodeNumber: 704 },
      { id: "search-2d-matrix", title: "Search a 2D Matrix", difficulty: "Medium", leetcodeNumber: 74 },
      { id: "koko-bananas", title: "Koko Eating Bananas", difficulty: "Medium", leetcodeNumber: 875 },
      { id: "find-min-rotated", title: "Find Minimum in Rotated Sorted Array", difficulty: "Medium", leetcodeNumber: 153 },
      { id: "search-rotated", title: "Search in Rotated Sorted Array", difficulty: "Medium", leetcodeNumber: 33 },
      { id: "time-based-kv", title: "Time Based Key-Value Store", difficulty: "Medium", leetcodeNumber: 981 },
      { id: "median-two-sorted", title: "Median of Two Sorted Arrays", difficulty: "Hard", leetcodeNumber: 4 },
    ],
  },
  {
    id: "linked-list",
    name: "Linked List",
    icon: "🔗",
    problems: [
      { id: "reverse-linked-list", title: "Reverse Linked List", difficulty: "Easy", leetcodeNumber: 206 },
      { id: "merge-two-sorted", title: "Merge Two Sorted Lists", difficulty: "Easy", leetcodeNumber: 21 },
      { id: "linked-list-cycle", title: "Linked List Cycle", difficulty: "Easy", leetcodeNumber: 141 },
      { id: "reorder-list", title: "Reorder List", difficulty: "Medium", leetcodeNumber: 143 },
      { id: "remove-nth-node", title: "Remove Nth Node From End", difficulty: "Medium", leetcodeNumber: 19 },
      { id: "copy-list-random", title: "Copy List with Random Pointer", difficulty: "Medium", leetcodeNumber: 138 },
      { id: "add-two-numbers", title: "Add Two Numbers", difficulty: "Medium", leetcodeNumber: 2 },
      { id: "lru-cache", title: "LRU Cache", difficulty: "Medium", leetcodeNumber: 146 },
      { id: "merge-k-sorted", title: "Merge k Sorted Lists", difficulty: "Hard", leetcodeNumber: 23 },
      { id: "reverse-nodes-k", title: "Reverse Nodes in k-Group", difficulty: "Hard", leetcodeNumber: 25 },
    ],
  },
  {
    id: "trees",
    name: "Trees",
    icon: "🌳",
    problems: [
      { id: "invert-binary-tree", title: "Invert Binary Tree", difficulty: "Easy", leetcodeNumber: 226 },
      { id: "max-depth-binary", title: "Maximum Depth of Binary Tree", difficulty: "Easy", leetcodeNumber: 104 },
      { id: "diameter-binary", title: "Diameter of Binary Tree", difficulty: "Easy", leetcodeNumber: 543 },
      { id: "balanced-binary", title: "Balanced Binary Tree", difficulty: "Easy", leetcodeNumber: 110 },
      { id: "same-tree", title: "Same Tree", difficulty: "Easy", leetcodeNumber: 100 },
      { id: "subtree-another", title: "Subtree of Another Tree", difficulty: "Easy", leetcodeNumber: 572 },
      { id: "lowest-common-ancestor", title: "Lowest Common Ancestor of BST", difficulty: "Medium", leetcodeNumber: 235 },
      { id: "level-order-traversal", title: "Binary Tree Level Order Traversal", difficulty: "Medium", leetcodeNumber: 102 },
      { id: "right-side-view", title: "Binary Tree Right Side View", difficulty: "Medium", leetcodeNumber: 199 },
      { id: "count-good-nodes", title: "Count Good Nodes in Binary Tree", difficulty: "Medium", leetcodeNumber: 1448 },
      { id: "validate-bst", title: "Validate Binary Search Tree", difficulty: "Medium", leetcodeNumber: 98 },
      { id: "kth-smallest-bst", title: "Kth Smallest Element in BST", difficulty: "Medium", leetcodeNumber: 230 },
      { id: "construct-preorder-inorder", title: "Construct Binary Tree from Preorder and Inorder", difficulty: "Medium", leetcodeNumber: 105 },
      { id: "max-path-sum", title: "Binary Tree Maximum Path Sum", difficulty: "Hard", leetcodeNumber: 124 },
      { id: "serialize-deserialize", title: "Serialize and Deserialize Binary Tree", difficulty: "Hard", leetcodeNumber: 297 },
    ],
  },
  {
    id: "tries",
    name: "Tries",
    icon: "🔤",
    problems: [
      { id: "implement-trie", title: "Implement Trie (Prefix Tree)", difficulty: "Medium", leetcodeNumber: 208 },
      { id: "add-search-word", title: "Design Add and Search Words Data Structure", difficulty: "Medium", leetcodeNumber: 211 },
      { id: "word-search-ii", title: "Word Search II", difficulty: "Hard", leetcodeNumber: 212 },
    ],
  },
  {
    id: "heap-priority-queue",
    name: "Heap / Priority Queue",
    icon: "⛰️",
    problems: [
      { id: "kth-largest-stream", title: "Kth Largest Element in a Stream", difficulty: "Easy", leetcodeNumber: 703 },
      { id: "last-stone-weight", title: "Last Stone Weight", difficulty: "Easy", leetcodeNumber: 1046 },
      { id: "k-closest-points", title: "K Closest Points to Origin", difficulty: "Medium", leetcodeNumber: 973 },
      { id: "kth-largest-array", title: "Kth Largest Element in an Array", difficulty: "Medium", leetcodeNumber: 215 },
      { id: "task-scheduler", title: "Task Scheduler", difficulty: "Medium", leetcodeNumber: 621 },
      { id: "design-twitter", title: "Design Twitter", difficulty: "Medium", leetcodeNumber: 355 },
      { id: "find-median-stream", title: "Find Median from Data Stream", difficulty: "Hard", leetcodeNumber: 295 },
    ],
  },
  {
    id: "backtracking",
    name: "Backtracking",
    icon: "🔙",
    problems: [
      { id: "subsets", title: "Subsets", difficulty: "Medium", leetcodeNumber: 78 },
      { id: "combination-sum", title: "Combination Sum", difficulty: "Medium", leetcodeNumber: 39 },
      { id: "permutations", title: "Permutations", difficulty: "Medium", leetcodeNumber: 46 },
      { id: "subsets-ii", title: "Subsets II", difficulty: "Medium", leetcodeNumber: 90 },
      { id: "combination-sum-ii", title: "Combination Sum II", difficulty: "Medium", leetcodeNumber: 40 },
      { id: "word-search", title: "Word Search", difficulty: "Medium", leetcodeNumber: 79 },
      { id: "palindrome-partition", title: "Palindrome Partitioning", difficulty: "Medium", leetcodeNumber: 131 },
      { id: "letter-combinations", title: "Letter Combinations of a Phone Number", difficulty: "Medium", leetcodeNumber: 17 },
      { id: "n-queens", title: "N-Queens", difficulty: "Hard", leetcodeNumber: 51 },
    ],
  },
  {
    id: "graphs",
    name: "Graphs",
    icon: "🕸️",
    problems: [
      { id: "num-islands", title: "Number of Islands", difficulty: "Medium", leetcodeNumber: 200 },
      { id: "clone-graph", title: "Clone Graph", difficulty: "Medium", leetcodeNumber: 133 },
      { id: "max-area-island", title: "Max Area of Island", difficulty: "Medium", leetcodeNumber: 695 },
      { id: "pacific-atlantic", title: "Pacific Atlantic Water Flow", difficulty: "Medium", leetcodeNumber: 417 },
      { id: "surrounded-regions", title: "Surrounded Regions", difficulty: "Medium", leetcodeNumber: 130 },
      { id: "rotting-oranges", title: "Rotting Oranges", difficulty: "Medium", leetcodeNumber: 994 },
      { id: "walls-gates", title: "Walls and Gates", difficulty: "Medium", leetcodeNumber: 286 },
      { id: "course-schedule", title: "Course Schedule", difficulty: "Medium", leetcodeNumber: 207 },
      { id: "course-schedule-ii", title: "Course Schedule II", difficulty: "Medium", leetcodeNumber: 210 },
      { id: "redundant-connection", title: "Redundant Connection", difficulty: "Medium", leetcodeNumber: 684 },
      { id: "num-connected-components", title: "Number of Connected Components", difficulty: "Medium", leetcodeNumber: 323 },
      { id: "graph-valid-tree", title: "Graph Valid Tree", difficulty: "Medium", leetcodeNumber: 261 },
      { id: "word-ladder", title: "Word Ladder", difficulty: "Hard", leetcodeNumber: 127 },
    ],
  },
  {
    id: "advanced-graphs",
    name: "Advanced Graphs",
    icon: "🗺️",
    problems: [
      { id: "reconstruct-itinerary", title: "Reconstruct Itinerary", difficulty: "Hard", leetcodeNumber: 332 },
      { id: "min-cost-connect-points", title: "Min Cost to Connect All Points", difficulty: "Medium", leetcodeNumber: 1584 },
      { id: "network-delay-time", title: "Network Delay Time", difficulty: "Medium", leetcodeNumber: 743 },
      { id: "swim-rising-water", title: "Swim in Rising Water", difficulty: "Hard", leetcodeNumber: 778 },
      { id: "alien-dictionary", title: "Alien Dictionary", difficulty: "Hard", leetcodeNumber: 269 },
      { id: "cheapest-flights", title: "Cheapest Flights Within K Stops", difficulty: "Medium", leetcodeNumber: 787 },
    ],
  },
  {
    id: "1d-dp",
    name: "1-D Dynamic Programming",
    icon: "📊",
    problems: [
      { id: "climbing-stairs", title: "Climbing Stairs", difficulty: "Easy", leetcodeNumber: 70 },
      { id: "min-cost-climbing", title: "Min Cost Climbing Stairs", difficulty: "Easy", leetcodeNumber: 746 },
      { id: "house-robber", title: "House Robber", difficulty: "Medium", leetcodeNumber: 198 },
      { id: "house-robber-ii", title: "House Robber II", difficulty: "Medium", leetcodeNumber: 213 },
      { id: "longest-palindromic", title: "Longest Palindromic Substring", difficulty: "Medium", leetcodeNumber: 5 },
      { id: "palindromic-substrings", title: "Palindromic Substrings", difficulty: "Medium", leetcodeNumber: 647 },
      { id: "decode-ways", title: "Decode Ways", difficulty: "Medium", leetcodeNumber: 91 },
      { id: "coin-change", title: "Coin Change", difficulty: "Medium", leetcodeNumber: 322 },
      { id: "max-product-subarray", title: "Maximum Product Subarray", difficulty: "Medium", leetcodeNumber: 152 },
      { id: "word-break", title: "Word Break", difficulty: "Medium", leetcodeNumber: 139 },
      { id: "longest-increasing-sub", title: "Longest Increasing Subsequence", difficulty: "Medium", leetcodeNumber: 300 },
      { id: "partition-equal-subset", title: "Partition Equal Subset Sum", difficulty: "Medium", leetcodeNumber: 416 },
    ],
  },
  {
    id: "2d-dp",
    name: "2-D Dynamic Programming",
    icon: "🧮",
    problems: [
      { id: "unique-paths", title: "Unique Paths", difficulty: "Medium", leetcodeNumber: 62 },
      { id: "longest-common-sub", title: "Longest Common Subsequence", difficulty: "Medium", leetcodeNumber: 1143 },
      { id: "best-time-cooldown", title: "Best Time to Buy and Sell Stock with Cooldown", difficulty: "Medium", leetcodeNumber: 309 },
      { id: "coin-change-ii", title: "Coin Change II", difficulty: "Medium", leetcodeNumber: 518 },
      { id: "target-sum", title: "Target Sum", difficulty: "Medium", leetcodeNumber: 494 },
      { id: "interleaving-string", title: "Interleaving String", difficulty: "Medium", leetcodeNumber: 97 },
      { id: "longest-increasing-path", title: "Longest Increasing Path in a Matrix", difficulty: "Hard", leetcodeNumber: 329 },
      { id: "distinct-subsequences", title: "Distinct Subsequences", difficulty: "Hard", leetcodeNumber: 115 },
      { id: "edit-distance", title: "Edit Distance", difficulty: "Medium", leetcodeNumber: 72 },
      { id: "burst-balloons", title: "Burst Balloons", difficulty: "Hard", leetcodeNumber: 312 },
      { id: "regex-matching", title: "Regular Expression Matching", difficulty: "Hard", leetcodeNumber: 10 },
    ],
  },
  {
    id: "greedy",
    name: "Greedy",
    icon: "🤑",
    problems: [
      { id: "max-subarray", title: "Maximum Subarray", difficulty: "Medium", leetcodeNumber: 53 },
      { id: "jump-game", title: "Jump Game", difficulty: "Medium", leetcodeNumber: 55 },
      { id: "jump-game-ii", title: "Jump Game II", difficulty: "Medium", leetcodeNumber: 45 },
      { id: "gas-station", title: "Gas Station", difficulty: "Medium", leetcodeNumber: 134 },
      { id: "hand-of-straights", title: "Hand of Straights", difficulty: "Medium", leetcodeNumber: 846 },
      { id: "merge-triplets", title: "Merge Triplets to Form Target Triplet", difficulty: "Medium", leetcodeNumber: 1899 },
      { id: "partition-labels", title: "Partition Labels", difficulty: "Medium", leetcodeNumber: 763 },
      { id: "valid-parenthesis-string", title: "Valid Parenthesis String", difficulty: "Medium", leetcodeNumber: 678 },
    ],
  },
  {
    id: "intervals",
    name: "Intervals",
    icon: "📐",
    problems: [
      { id: "insert-interval", title: "Insert Interval", difficulty: "Medium", leetcodeNumber: 57 },
      { id: "merge-intervals", title: "Merge Intervals", difficulty: "Medium", leetcodeNumber: 56 },
      { id: "non-overlapping", title: "Non-overlapping Intervals", difficulty: "Medium", leetcodeNumber: 435 },
      { id: "meeting-rooms", title: "Meeting Rooms", difficulty: "Easy", leetcodeNumber: 252 },
      { id: "meeting-rooms-ii", title: "Meeting Rooms II", difficulty: "Medium", leetcodeNumber: 253 },
      { id: "min-interval-query", title: "Minimum Interval to Include Each Query", difficulty: "Hard", leetcodeNumber: 1851 },
    ],
  },
  {
    id: "math-geometry",
    name: "Math & Geometry",
    icon: "📐",
    problems: [
      { id: "rotate-image", title: "Rotate Image", difficulty: "Medium", leetcodeNumber: 48 },
      { id: "spiral-matrix", title: "Spiral Matrix", difficulty: "Medium", leetcodeNumber: 54 },
      { id: "set-matrix-zeroes", title: "Set Matrix Zeroes", difficulty: "Medium", leetcodeNumber: 73 },
      { id: "happy-number", title: "Happy Number", difficulty: "Easy", leetcodeNumber: 202 },
      { id: "plus-one", title: "Plus One", difficulty: "Easy", leetcodeNumber: 66 },
      { id: "pow-x-n", title: "Pow(x, n)", difficulty: "Medium", leetcodeNumber: 50 },
      { id: "multiply-strings", title: "Multiply Strings", difficulty: "Medium", leetcodeNumber: 43 },
      { id: "detect-squares", title: "Detect Squares", difficulty: "Medium", leetcodeNumber: 2013 },
    ],
  },
  {
    id: "bit-manipulation",
    name: "Bit Manipulation",
    icon: "🔢",
    problems: [
      { id: "single-number", title: "Single Number", difficulty: "Easy", leetcodeNumber: 136 },
      { id: "number-1-bits", title: "Number of 1 Bits", difficulty: "Easy", leetcodeNumber: 191 },
      { id: "counting-bits", title: "Counting Bits", difficulty: "Easy", leetcodeNumber: 338 },
      { id: "reverse-bits", title: "Reverse Bits", difficulty: "Easy", leetcodeNumber: 190 },
      { id: "missing-number", title: "Missing Number", difficulty: "Easy", leetcodeNumber: 268 },
      { id: "sum-two-integers", title: "Sum of Two Integers", difficulty: "Medium", leetcodeNumber: 371 },
      { id: "reverse-integer", title: "Reverse Integer", difficulty: "Medium", leetcodeNumber: 7 },
    ],
  },
];

// Helper to get total problem count
export const getTotalProblems = (): number => {
  return roadmapData.reduce((acc, category) => acc + category.problems.length, 0);
};

// Helper to get a flat list of all problems
export const getAllProblems = (): (Problem & { categoryId: string; categoryName: string })[] => {
  return roadmapData.flatMap((category) =>
    category.problems.map((problem) => ({
      ...problem,
      categoryId: category.id,
      categoryName: category.name,
    }))
  );
};
