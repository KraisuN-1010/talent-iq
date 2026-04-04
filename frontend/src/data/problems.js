export const PROBLEMS = {
  "best-time-to-buy-and-sell-stock": {
    id: "best-time-to-buy-and-sell-stock",
    title: "Best Time to Buy and Sell Stock",
    difficulty: "Easy",
    category: "Array • Greedy",
    description: {
      text: "You are given an array prices where prices[i] is the price of a given stock on the ith day. You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.",
      notes: [
        "Return the maximum profit you can achieve from this transaction.",
        "If you cannot achieve any profit, return 0.",
      ],
    },
    examples: [
      {
        input: "prices = [7,1,5,3,6,4]",
        output: "5",
        explanation: "Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6 - 1 = 5.",
      },
      {
        input: "prices = [7,6,4,3,1]",
        output: "0",
        explanation: "In this case, no transactions are done and the max profit = 0.",
      },
    ],
    constraints: ["1 ≤ prices.length ≤ 10⁵", "0 ≤ prices[i] ≤ 10⁴"],
    starterCode: {
      javascript: `function maxProfit(prices) {
  // Write your solution here

}

// Test cases
console.log(maxProfit([7,1,5,3,6,4])); // Expected: 5
console.log(maxProfit([7,6,4,3,1]));   // Expected: 0`,
      python: `def maxProfit(prices):
    # Write your solution here
    pass

# Test cases
print(maxProfit([7,1,5,3,6,4]))  # Expected: 5
print(maxProfit([7,6,4,3,1]))    # Expected: 0`,
      java: `class Solution {
    public static int maxProfit(int[] prices) {
        // Write your solution here
        return 0;
    }

    public static void main(String[] args) {
        System.out.println(maxProfit(new int[]{7,1,5,3,6,4})); // Expected: 5
        System.out.println(maxProfit(new int[]{7,6,4,3,1}));   // Expected: 0
    }
}`,
      c: `#include <stdio.h>

int maxProfit(int* prices, int pricesSize) {
    // Write your solution here
    return 0;
}

int main() {
    int p1[] = {7,1,5,3,6,4};
    printf("%d\\n", maxProfit(p1, 6)); // Expected: 5
    int p2[] = {7,6,4,3,1};
    printf("%d\\n", maxProfit(p2, 5)); // Expected: 0
    return 0;
}`,
      cpp: `#include <iostream>
#include <vector>
using namespace std;

int maxProfit(vector<int>& prices) {
    // Write your solution here
    return 0;
}

int main() {
    vector<int> p1 = {7,1,5,3,6,4};
    cout << maxProfit(p1) << endl; // Expected: 5
    vector<int> p2 = {7,6,4,3,1};
    cout << maxProfit(p2) << endl; // Expected: 0
    return 0;
}`,
    },
    expectedOutput: {
      javascript: "5\n0",
      python: "5\n0",
      java: "5\n0",
      c: "5\n0",
      cpp: "5\n0",
    },
  },

  "contains-duplicate": {
    id: "contains-duplicate",
    title: "Contains Duplicate",
    difficulty: "Easy",
    category: "Array • Hash Table",
    description: {
      text: "Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.",
      notes: [],
    },
    examples: [
      { input: "nums = [1,2,3,1]", output: "true" },
      { input: "nums = [1,2,3,4]", output: "false" },
      { input: "nums = [1,1,1,3,3,4,3,2,4,2]", output: "true" },
    ],
    constraints: ["1 ≤ nums.length ≤ 10⁵", "-10⁹ ≤ nums[i] ≤ 10⁹"],
    starterCode: {
      javascript: `function containsDuplicate(nums) {
  // Write your solution here

}

// Test cases
console.log(containsDuplicate([1,2,3,1]));            // Expected: true
console.log(containsDuplicate([1,2,3,4]));            // Expected: false
console.log(containsDuplicate([1,1,1,3,3,4,3,2,4,2])); // Expected: true`,
      python: `def containsDuplicate(nums):
    # Write your solution here
    pass

# Test cases
print(containsDuplicate([1,2,3,1]))              # Expected: True
print(containsDuplicate([1,2,3,4]))              # Expected: False
print(containsDuplicate([1,1,1,3,3,4,3,2,4,2])) # Expected: True`,
      java: `import java.util.*;

class Solution {
    public static boolean containsDuplicate(int[] nums) {
        // Write your solution here
        return false;
    }

    public static void main(String[] args) {
        System.out.println(containsDuplicate(new int[]{1,2,3,1}));                  // Expected: true
        System.out.println(containsDuplicate(new int[]{1,2,3,4}));                  // Expected: false
        System.out.println(containsDuplicate(new int[]{1,1,1,3,3,4,3,2,4,2}));     // Expected: true
    }
}`,
      c: `#include <stdio.h>
#include <stdbool.h>

bool containsDuplicate(int* nums, int numsSize) {
    // Write your solution here
    return false;
}

int main() {
    int a[] = {1,2,3,1};
    printf("%s\\n", containsDuplicate(a, 4) ? "true" : "false"); // Expected: true
    int b[] = {1,2,3,4};
    printf("%s\\n", containsDuplicate(b, 4) ? "true" : "false"); // Expected: false
    int c[] = {1,1,1,3,3,4,3,2,4,2};
    printf("%s\\n", containsDuplicate(c, 10) ? "true" : "false"); // Expected: true
    return 0;
}`,
      cpp: `#include <iostream>
#include <vector>
using namespace std;

bool containsDuplicate(vector<int>& nums) {
    // Write your solution here
    return false;
}

int main() {
    vector<int> a = {1,2,3,1};
    cout << (containsDuplicate(a) ? "true" : "false") << endl; // Expected: true
    vector<int> b = {1,2,3,4};
    cout << (containsDuplicate(b) ? "true" : "false") << endl; // Expected: false
    vector<int> c = {1,1,1,3,3,4,3,2,4,2};
    cout << (containsDuplicate(c) ? "true" : "false") << endl; // Expected: true
    return 0;
}`,
    },
    expectedOutput: {
      javascript: "true\nfalse\ntrue",
      python: "True\nFalse\nTrue",
      java: "true\nfalse\ntrue",
      c: "true\nfalse\ntrue",
      cpp: "true\nfalse\ntrue",
    },
  },

  "merge-sorted-array": {
    id: "merge-sorted-array",
    title: "Merge Sorted Array",
    difficulty: "Easy",
    category: "Array • Two Pointers",
    description: {
      text: "You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.",
      notes: [
        "Merge nums1 and nums2 into a single array sorted in non-decreasing order.",
        "The final sorted array should not be returned by the function, but instead be stored inside the array nums1.",
        "To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored.",
      ],
    },
    examples: [
      {
        input: "nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3",
        output: "[1,2,2,3,5,6]",
        explanation: "The arrays we are merging are [1,2,3] and [2,5,6]. The result of the merge is [1,2,2,3,5,6].",
      },
      { input: "nums1 = [1], m = 1, nums2 = [], n = 0", output: "[1]" },
      { input: "nums1 = [0], m = 0, nums2 = [1], n = 1", output: "[1]" },
    ],
    constraints: [
      "nums1.length == m + n",
      "nums2.length == n",
      "0 ≤ m, n ≤ 200",
      "1 ≤ m + n ≤ 200",
      "-10⁹ ≤ nums1[i], nums2[j] ≤ 10⁹",
    ],
    starterCode: {
      javascript: `function merge(nums1, m, nums2, n) {
  // Write your solution here

}

// Test cases
let a = [1,2,3,0,0,0];
merge(a, 3, [2,5,6], 3);
console.log(a); // Expected: [1,2,2,3,5,6]

let b = [1];
merge(b, 1, [], 0);
console.log(b); // Expected: [1]

let c = [0];
merge(c, 0, [1], 1);
console.log(c); // Expected: [1]`,
      python: `def merge(nums1, m, nums2, n):
    # Write your solution here
    pass

# Test cases
a = [1,2,3,0,0,0]
merge(a, 3, [2,5,6], 3)
print(a)  # Expected: [1, 2, 2, 3, 5, 6]

b = [1]
merge(b, 1, [], 0)
print(b)  # Expected: [1]

c = [0]
merge(c, 0, [1], 1)
print(c)  # Expected: [1]`,
      java: `import java.util.*;

class Solution {
    public static void merge(int[] nums1, int m, int[] nums2, int n) {
        // Write your solution here
    }

    public static void main(String[] args) {
        int[] a = {1,2,3,0,0,0};
        merge(a, 3, new int[]{2,5,6}, 3);
        System.out.println(Arrays.toString(a)); // Expected: [1, 2, 2, 3, 5, 6]

        int[] b = {1};
        merge(b, 1, new int[]{}, 0);
        System.out.println(Arrays.toString(b)); // Expected: [1]

        int[] c = {0};
        merge(c, 0, new int[]{1}, 1);
        System.out.println(Arrays.toString(c)); // Expected: [1]
    }
}`,
      c: `#include <stdio.h>

void merge(int* nums1, int m, int* nums2, int n) {
    // Write your solution here
}

void printArray(int* arr, int size) {
    printf("[");
    for (int i = 0; i < size; i++) {
        printf("%d%s", arr[i], i < size - 1 ? "," : "");
    }
    printf("]\\n");
}

int main() {
    int a[] = {1,2,3,0,0,0};
    int b[] = {2,5,6};
    merge(a, 3, b, 3);
    printArray(a, 6); // Expected: [1,2,2,3,5,6]

    int c[] = {1};
    merge(c, 1, NULL, 0);
    printArray(c, 1); // Expected: [1]

    int d[] = {0};
    int e[] = {1};
    merge(d, 0, e, 1);
    printArray(d, 1); // Expected: [1]
    return 0;
}`,
      cpp: `#include <iostream>
#include <vector>
using namespace std;

void merge(vector<int>& nums1, int m, vector<int>& nums2, int n) {
    // Write your solution here
}

void printVec(vector<int>& v) {
    cout << "[";
    for (int i = 0; i < v.size(); i++)
        cout << v[i] << (i < v.size()-1 ? "," : "");
    cout << "]" << endl;
}

int main() {
    vector<int> a = {1,2,3,0,0,0}, b = {2,5,6};
    merge(a, 3, b, 3);
    printVec(a); // Expected: [1,2,2,3,5,6]

    vector<int> c = {1}, d = {};
    merge(c, 1, d, 0);
    printVec(c); // Expected: [1]

    vector<int> e = {0}, f = {1};
    merge(e, 0, f, 1);
    printVec(e); // Expected: [1]
    return 0;
}`,
    },
    expectedOutput: {
      javascript: "[1,2,2,3,5,6]\n[1]\n[1]",
      python: "[1, 2, 2, 3, 5, 6]\n[1]\n[1]",
      java: "[1, 2, 2, 3, 5, 6]\n[1]\n[1]",
      c: "[1,2,2,3,5,6]\n[1]\n[1]",
      cpp: "[1,2,2,3,5,6]\n[1]\n[1]",
    },
  },

  "climbing-stairs": {
    id: "climbing-stairs",
    title: "Climbing Stairs",
    difficulty: "Easy",
    category: "Dynamic Programming • Math",
    description: {
      text: "You are climbing a staircase. It takes n steps to reach the top. Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?",
      notes: [],
    },
    examples: [
      { input: "n = 2", output: "2", explanation: "There are two ways to climb to the top: 1. 1 step + 1 step  2. 2 steps" },
      { input: "n = 3", output: "3", explanation: "There are three ways: 1. 1+1+1  2. 1+2  3. 2+1" },
    ],
    constraints: ["1 ≤ n ≤ 45"],
    starterCode: {
      javascript: `function climbStairs(n) {
  // Write your solution here

}

// Test cases
console.log(climbStairs(2)); // Expected: 2
console.log(climbStairs(3)); // Expected: 3
console.log(climbStairs(5)); // Expected: 8`,
      python: `def climbStairs(n):
    # Write your solution here
    pass

# Test cases
print(climbStairs(2))  # Expected: 2
print(climbStairs(3))  # Expected: 3
print(climbStairs(5))  # Expected: 8`,
      java: `class Solution {
    public static int climbStairs(int n) {
        // Write your solution here
        return 0;
    }

    public static void main(String[] args) {
        System.out.println(climbStairs(2)); // Expected: 2
        System.out.println(climbStairs(3)); // Expected: 3
        System.out.println(climbStairs(5)); // Expected: 8
    }
}`,
      c: `#include <stdio.h>

int climbStairs(int n) {
    // Write your solution here
    return 0;
}

int main() {
    printf("%d\\n", climbStairs(2)); // Expected: 2
    printf("%d\\n", climbStairs(3)); // Expected: 3
    printf("%d\\n", climbStairs(5)); // Expected: 8
    return 0;
}`,
      cpp: `#include <iostream>
using namespace std;

int climbStairs(int n) {
    // Write your solution here
    return 0;
}

int main() {
    cout << climbStairs(2) << endl; // Expected: 2
    cout << climbStairs(3) << endl; // Expected: 3
    cout << climbStairs(5) << endl; // Expected: 8
    return 0;
}`,
    },
    expectedOutput: {
      javascript: "2\n3\n8",
      python: "2\n3\n8",
      java: "2\n3\n8",
      c: "2\n3\n8",
      cpp: "2\n3\n8",
    },
  },

  "valid-parentheses": {
    id: "valid-parentheses",
    title: "Valid Parentheses",
    difficulty: "Easy",
    category: "Stack • String",
    description: {
      text: "Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.",
      notes: [
        "An input string is valid if: open brackets must be closed by the same type of brackets, and open brackets must be closed in the correct order.",
        "Every close bracket has a corresponding open bracket of the same type.",
      ],
    },
    examples: [
      { input: 's = "()"', output: "true" },
      { input: 's = "()[]{}"', output: "true" },
      { input: 's = "(]"', output: "false" },
    ],
    constraints: ["1 ≤ s.length ≤ 10⁴", "s consists of parentheses only '()[]{}'"],
    starterCode: {
      javascript: `function isValid(s) {
  // Write your solution here

}

// Test cases
console.log(isValid("()"));     // Expected: true
console.log(isValid("()[]{}")); // Expected: true
console.log(isValid("(]"));     // Expected: false`,
      python: `def isValid(s):
    # Write your solution here
    pass

# Test cases
print(isValid("()"))      # Expected: True
print(isValid("()[]{}"))  # Expected: True
print(isValid("(]"))      # Expected: False`,
      java: `class Solution {
    public static boolean isValid(String s) {
        // Write your solution here
        return false;
    }

    public static void main(String[] args) {
        System.out.println(isValid("()"));     // Expected: true
        System.out.println(isValid("()[]{}")); // Expected: true
        System.out.println(isValid("(]"));     // Expected: false
    }
}`,
      c: `#include <stdio.h>
#include <stdbool.h>
#include <string.h>

bool isValid(char* s) {
    // Write your solution here
    return false;
}

int main() {
    printf("%s\\n", isValid("()") ? "true" : "false");     // Expected: true
    printf("%s\\n", isValid("()[]{}") ? "true" : "false"); // Expected: true
    printf("%s\\n", isValid("(]") ? "true" : "false");     // Expected: false
    return 0;
}`,
      cpp: `#include <iostream>
#include <string>
using namespace std;

bool isValid(string s) {
    // Write your solution here
    return false;
}

int main() {
    cout << (isValid("()") ? "true" : "false") << endl;     // Expected: true
    cout << (isValid("()[]{}") ? "true" : "false") << endl; // Expected: true
    cout << (isValid("(]") ? "true" : "false") << endl;     // Expected: false
    return 0;
}`,
    },
    expectedOutput: {
      javascript: "true\ntrue\nfalse",
      python: "True\nTrue\nFalse",
      java: "true\ntrue\nfalse",
      c: "true\ntrue\nfalse",
      cpp: "true\ntrue\nfalse",
    },
  },

  "palindrome-number": {
    id: "palindrome-number",
    title: "Palindrome Number",
    difficulty: "Easy",
    category: "Math",
    description: {
      text: "Given an integer x, return true if x is a palindrome, and false otherwise.",
      notes: ["An integer is a palindrome when it reads the same forward and backward."],
    },
    examples: [
      { input: "x = 121", output: "true", explanation: "121 reads as 121 from left to right and from right to left." },
      { input: "x = -121", output: "false", explanation: "From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome." },
      { input: "x = 10", output: "false", explanation: "Reads 01 from right to left. Therefore it is not a palindrome." },
    ],
    constraints: ["-2³¹ ≤ x ≤ 2³¹ - 1"],
    starterCode: {
      javascript: `function isPalindrome(x) {
  // Write your solution here

}

// Test cases
console.log(isPalindrome(121));  // Expected: true
console.log(isPalindrome(-121)); // Expected: false
console.log(isPalindrome(10));   // Expected: false`,
      python: `def isPalindrome(x):
    # Write your solution here
    pass

# Test cases
print(isPalindrome(121))   # Expected: True
print(isPalindrome(-121))  # Expected: False
print(isPalindrome(10))    # Expected: False`,
      java: `class Solution {
    public static boolean isPalindrome(int x) {
        // Write your solution here
        return false;
    }

    public static void main(String[] args) {
        System.out.println(isPalindrome(121));  // Expected: true
        System.out.println(isPalindrome(-121)); // Expected: false
        System.out.println(isPalindrome(10));   // Expected: false
    }
}`,
      c: `#include <stdio.h>
#include <stdbool.h>

bool isPalindrome(int x) {
    // Write your solution here
    return false;
}

int main() {
    printf("%s\\n", isPalindrome(121) ? "true" : "false");  // Expected: true
    printf("%s\\n", isPalindrome(-121) ? "true" : "false"); // Expected: false
    printf("%s\\n", isPalindrome(10) ? "true" : "false");   // Expected: false
    return 0;
}`,
      cpp: `#include <iostream>
using namespace std;

bool isPalindrome(int x) {
    // Write your solution here
    return false;
}

int main() {
    cout << (isPalindrome(121) ? "true" : "false") << endl;  // Expected: true
    cout << (isPalindrome(-121) ? "true" : "false") << endl; // Expected: false
    cout << (isPalindrome(10) ? "true" : "false") << endl;   // Expected: false
    return 0;
}`,
    },
    expectedOutput: {
      javascript: "true\nfalse\nfalse",
      python: "True\nFalse\nFalse",
      java: "true\nfalse\nfalse",
      c: "true\nfalse\nfalse",
      cpp: "true\nfalse\nfalse",
    },
  },

  "missing-number": {
    id: "missing-number",
    title: "Missing Number",
    difficulty: "Easy",
    category: "Array • Math • Bit Manipulation",
    description: {
      text: "Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.",
      notes: [],
    },
    examples: [
      { input: "nums = [3,0,1]", output: "2", explanation: "n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number." },
      { input: "nums = [0,1]", output: "2" },
      { input: "nums = [9,6,4,2,3,5,7,0,1]", output: "8" },
    ],
    constraints: ["n == nums.length", "1 ≤ n ≤ 10⁴", "0 ≤ nums[i] ≤ n", "All the numbers of nums are unique"],
    starterCode: {
      javascript: `function missingNumber(nums) {
  // Write your solution here

}

// Test cases
console.log(missingNumber([3,0,1]));            // Expected: 2
console.log(missingNumber([0,1]));              // Expected: 2
console.log(missingNumber([9,6,4,2,3,5,7,0,1])); // Expected: 8`,
      python: `def missingNumber(nums):
    # Write your solution here
    pass

# Test cases
print(missingNumber([3,0,1]))              # Expected: 2
print(missingNumber([0,1]))                # Expected: 2
print(missingNumber([9,6,4,2,3,5,7,0,1])) # Expected: 8`,
      java: `class Solution {
    public static int missingNumber(int[] nums) {
        // Write your solution here
        return 0;
    }

    public static void main(String[] args) {
        System.out.println(missingNumber(new int[]{3,0,1}));                   // Expected: 2
        System.out.println(missingNumber(new int[]{0,1}));                     // Expected: 2
        System.out.println(missingNumber(new int[]{9,6,4,2,3,5,7,0,1}));      // Expected: 8
    }
}`,
      c: `#include <stdio.h>

int missingNumber(int* nums, int numsSize) {
    // Write your solution here
    return 0;
}

int main() {
    int a[] = {3,0,1};
    printf("%d\\n", missingNumber(a, 3)); // Expected: 2
    int b[] = {0,1};
    printf("%d\\n", missingNumber(b, 2)); // Expected: 2
    int c[] = {9,6,4,2,3,5,7,0,1};
    printf("%d\\n", missingNumber(c, 9)); // Expected: 8
    return 0;
}`,
      cpp: `#include <iostream>
#include <vector>
using namespace std;

int missingNumber(vector<int>& nums) {
    // Write your solution here
    return 0;
}

int main() {
    vector<int> a = {3,0,1};
    cout << missingNumber(a) << endl; // Expected: 2
    vector<int> b = {0,1};
    cout << missingNumber(b) << endl; // Expected: 2
    vector<int> c = {9,6,4,2,3,5,7,0,1};
    cout << missingNumber(c) << endl; // Expected: 8
    return 0;
}`,
    },
    expectedOutput: {
      javascript: "2\n2\n8",
      python: "2\n2\n8",
      java: "2\n2\n8",
      c: "2\n2\n8",
      cpp: "2\n2\n8",
    },
  },

  "fizz-buzz": {
    id: "fizz-buzz",
    title: "Fizz Buzz",
    difficulty: "Easy",
    category: "Math • String • Simulation",
    description: {
      text: "Given an integer n, return a string array answer (1-indexed) where: answer[i] == 'FizzBuzz' if i is divisible by 3 and 5, answer[i] == 'Fizz' if i is divisible by 3, answer[i] == 'Buzz' if i is divisible by 5, answer[i] == i (as a string) if none of the above conditions are true.",
      notes: [],
    },
    examples: [
      { input: "n = 3", output: '["1","2","Fizz"]' },
      { input: "n = 5", output: '["1","2","Fizz","4","Buzz"]' },
      { input: "n = 15", output: '["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]' },
    ],
    constraints: ["1 ≤ n ≤ 10⁴"],
    starterCode: {
      javascript: `function fizzBuzz(n) {
  // Write your solution here

}

// Test cases
console.log(fizzBuzz(3));  // Expected: ["1","2","Fizz"]
console.log(fizzBuzz(5));  // Expected: ["1","2","Fizz","4","Buzz"]`,
      python: `def fizzBuzz(n):
    # Write your solution here
    pass

# Test cases
print(fizzBuzz(3))  # Expected: ['1', '2', 'Fizz']
print(fizzBuzz(5))  # Expected: ['1', '2', 'Fizz', '4', 'Buzz']`,
      java: `import java.util.*;

class Solution {
    public static List<String> fizzBuzz(int n) {
        // Write your solution here
        return new ArrayList<>();
    }

    public static void main(String[] args) {
        System.out.println(fizzBuzz(3)); // Expected: [1, 2, Fizz]
        System.out.println(fizzBuzz(5)); // Expected: [1, 2, Fizz, 4, Buzz]
    }
}`,
      c: `#include <stdio.h>

void fizzBuzz(int n) {
    // Write your solution here (print each element on its own line)
}

int main() {
    printf("n=3:\\n"); fizzBuzz(3); // Expected: 1 2 Fizz
    printf("n=5:\\n"); fizzBuzz(5); // Expected: 1 2 Fizz 4 Buzz
    return 0;
}`,
      cpp: `#include <iostream>
#include <vector>
#include <string>
using namespace std;

vector<string> fizzBuzz(int n) {
    // Write your solution here
    return {};
}

int main() {
    for (auto& s : fizzBuzz(3)) cout << s << " "; cout << endl; // Expected: 1 2 Fizz
    for (auto& s : fizzBuzz(5)) cout << s << " "; cout << endl; // Expected: 1 2 Fizz 4 Buzz
    return 0;
}`,
    },
    expectedOutput: {
      javascript: '["1","2","Fizz"]\n["1","2","Fizz","4","Buzz"]',
      python: "['1', '2', 'Fizz']\n['1', '2', 'Fizz', '4', 'Buzz']",
      java: "[1, 2, Fizz]\n[1, 2, Fizz, 4, Buzz]",
      c: "1 2 Fizz\n1 2 Fizz 4 Buzz",
      cpp: "1 2 Fizz\n1 2 Fizz 4 Buzz",
    },
  },

  "longest-common-prefix": {
    id: "longest-common-prefix",
    title: "Longest Common Prefix",
    difficulty: "Easy",
    category: "String • Trie",
    description: {
      text: "Write a function to find the longest common prefix string amongst an array of strings. If there is no common prefix, return an empty string \"\".",
      notes: [],
    },
    examples: [
      { input: 'strs = ["flower","flow","flight"]', output: '"fl"' },
      { input: 'strs = ["dog","racecar","car"]', output: '""', explanation: "There is no common prefix among the input strings." },
    ],
    constraints: ["1 ≤ strs.length ≤ 200", "0 ≤ strs[i].length ≤ 200", "strs[i] consists of only lowercase English letters"],
    starterCode: {
      javascript: `function longestCommonPrefix(strs) {
  // Write your solution here

}

// Test cases
console.log(longestCommonPrefix(["flower","flow","flight"])); // Expected: "fl"
console.log(longestCommonPrefix(["dog","racecar","car"]));    // Expected: ""`,
      python: `def longestCommonPrefix(strs):
    # Write your solution here
    pass

# Test cases
print(longestCommonPrefix(["flower","flow","flight"]))  # Expected: "fl"
print(longestCommonPrefix(["dog","racecar","car"]))     # Expected: ""`,
      java: `class Solution {
    public static String longestCommonPrefix(String[] strs) {
        // Write your solution here
        return "";
    }

    public static void main(String[] args) {
        System.out.println(longestCommonPrefix(new String[]{"flower","flow","flight"})); // Expected: fl
        System.out.println(longestCommonPrefix(new String[]{"dog","racecar","car"}));    // Expected: (empty)
    }
}`,
      c: `#include <stdio.h>
#include <string.h>

char* longestCommonPrefix(char** strs, int strsSize) {
    // Write your solution here
    return "";
}

int main() {
    char* a[] = {"flower","flow","flight"};
    printf("%s\\n", longestCommonPrefix(a, 3)); // Expected: fl
    char* b[] = {"dog","racecar","car"};
    printf("%s\\n", longestCommonPrefix(b, 3)); // Expected: (empty)
    return 0;
}`,
      cpp: `#include <iostream>
#include <vector>
#include <string>
using namespace std;

string longestCommonPrefix(vector<string>& strs) {
    // Write your solution here
    return "";
}

int main() {
    vector<string> a = {"flower","flow","flight"};
    cout << longestCommonPrefix(a) << endl; // Expected: fl
    vector<string> b = {"dog","racecar","car"};
    cout << longestCommonPrefix(b) << endl; // Expected: (empty)
    return 0;
}`,
    },
    expectedOutput: {
      javascript: "fl\n",
      python: "fl\n",
      java: "fl\n",
      c: "fl\n",
      cpp: "fl\n",
    },
  },

  "single-number": {
    id: "single-number",
    title: "Single Number",
    difficulty: "Easy",
    category: "Array • Bit Manipulation",
    description: {
      text: "Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.",
      notes: ["You must implement a solution with a linear runtime complexity and use only constant extra space."],
    },
    examples: [
      { input: "nums = [2,2,1]", output: "1" },
      { input: "nums = [4,1,2,1,2]", output: "4" },
      { input: "nums = [1]", output: "1" },
    ],
    constraints: ["1 ≤ nums.length ≤ 3 * 10⁴", "-3 * 10⁴ ≤ nums[i] ≤ 3 * 10⁴", "Each element in the array appears twice except for one element which appears only once"],
    starterCode: {
      javascript: `function singleNumber(nums) {
  // Write your solution here

}

// Test cases
console.log(singleNumber([2,2,1]));      // Expected: 1
console.log(singleNumber([4,1,2,1,2]));  // Expected: 4
console.log(singleNumber([1]));          // Expected: 1`,
      python: `def singleNumber(nums):
    # Write your solution here
    pass

# Test cases
print(singleNumber([2,2,1]))      # Expected: 1
print(singleNumber([4,1,2,1,2]))  # Expected: 4
print(singleNumber([1]))          # Expected: 1`,
      java: `class Solution {
    public static int singleNumber(int[] nums) {
        // Write your solution here
        return 0;
    }

    public static void main(String[] args) {
        System.out.println(singleNumber(new int[]{2,2,1}));     // Expected: 1
        System.out.println(singleNumber(new int[]{4,1,2,1,2})); // Expected: 4
        System.out.println(singleNumber(new int[]{1}));         // Expected: 1
    }
}`,
      c: `#include <stdio.h>

int singleNumber(int* nums, int numsSize) {
    // Write your solution here
    return 0;
}

int main() {
    int a[] = {2,2,1};
    printf("%d\\n", singleNumber(a, 3)); // Expected: 1
    int b[] = {4,1,2,1,2};
    printf("%d\\n", singleNumber(b, 5)); // Expected: 4
    int c[] = {1};
    printf("%d\\n", singleNumber(c, 1)); // Expected: 1
    return 0;
}`,
      cpp: `#include <iostream>
#include <vector>
using namespace std;

int singleNumber(vector<int>& nums) {
    // Write your solution here
    return 0;
}

int main() {
    vector<int> a = {2,2,1};
    cout << singleNumber(a) << endl; // Expected: 1
    vector<int> b = {4,1,2,1,2};
    cout << singleNumber(b) << endl; // Expected: 4
    vector<int> c = {1};
    cout << singleNumber(c) << endl; // Expected: 1
    return 0;
}`,
    },
    expectedOutput: {
      javascript: "1\n4\n1",
      python: "1\n4\n1",
      java: "1\n4\n1",
      c: "1\n4\n1",
      cpp: "1\n4\n1",
    },
  },

  // ─── MEDIUM ────────────────────────────────────────────────────────────────

  "product-of-array-except-self": {
    id: "product-of-array-except-self",
    title: "Product of Array Except Self",
    difficulty: "Medium",
    category: "Array • Prefix Sum",
    description: {
      text: "Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].",
      notes: [
        "The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.",
        "You must write an algorithm that runs in O(n) time and without using the division operation.",
      ],
    },
    examples: [
      { input: "nums = [1,2,3,4]", output: "[24,12,8,6]" },
      { input: "nums = [-1,1,0,-3,3]", output: "[0,0,9,0,0]" },
    ],
    constraints: ["2 ≤ nums.length ≤ 10⁵", "-30 ≤ nums[i] ≤ 30", "The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer"],
    starterCode: {
      javascript: `function productExceptSelf(nums) {
  // Write your solution here

}

// Test cases
console.log(productExceptSelf([1,2,3,4]));      // Expected: [24,12,8,6]
console.log(productExceptSelf([-1,1,0,-3,3]));  // Expected: [0,0,9,0,0]`,
      python: `def productExceptSelf(nums):
    # Write your solution here
    pass

# Test cases
print(productExceptSelf([1,2,3,4]))      # Expected: [24, 12, 8, 6]
print(productExceptSelf([-1,1,0,-3,3]))  # Expected: [0, 0, 9, 0, 0]`,
      java: `import java.util.*;

class Solution {
    public static int[] productExceptSelf(int[] nums) {
        // Write your solution here
        return new int[0];
    }

    public static void main(String[] args) {
        System.out.println(Arrays.toString(productExceptSelf(new int[]{1,2,3,4})));       // Expected: [24, 12, 8, 6]
        System.out.println(Arrays.toString(productExceptSelf(new int[]{-1,1,0,-3,3})));  // Expected: [0, 0, 9, 0, 0]
    }
}`,
      c: `#include <stdio.h>
#include <stdlib.h>

int* productExceptSelf(int* nums, int numsSize, int* returnSize) {
    // Write your solution here
    *returnSize = numsSize;
    return (int*)calloc(numsSize, sizeof(int));
}

int main() {
    int a[] = {1,2,3,4}, szA;
    int* ra = productExceptSelf(a, 4, &szA);
    for (int i = 0; i < szA; i++) printf("%d%s", ra[i], i<szA-1?",":""); printf("\\n"); // Expected: 24,12,8,6
    free(ra);

    int b[] = {-1,1,0,-3,3}, szB;
    int* rb = productExceptSelf(b, 5, &szB);
    for (int i = 0; i < szB; i++) printf("%d%s", rb[i], i<szB-1?",":""); printf("\\n"); // Expected: 0,0,9,0,0
    free(rb);
    return 0;
}`,
      cpp: `#include <iostream>
#include <vector>
using namespace std;

vector<int> productExceptSelf(vector<int>& nums) {
    // Write your solution here
    return {};
}

int main() {
    vector<int> a = {1,2,3,4};
    for (int x : productExceptSelf(a)) cout << x << " "; cout << endl; // Expected: 24 12 8 6
    vector<int> b = {-1,1,0,-3,3};
    for (int x : productExceptSelf(b)) cout << x << " "; cout << endl; // Expected: 0 0 9 0 0
    return 0;
}`,
    },
    expectedOutput: {
      javascript: "[24,12,8,6]\n[0,0,9,0,0]",
      python: "[24, 12, 8, 6]\n[0, 0, 9, 0, 0]",
      java: "[24, 12, 8, 6]\n[0, 0, 9, 0, 0]",
      c: "24,12,8,6\n0,0,9,0,0",
      cpp: "24 12 8 6\n0 0 9 0 0",
    },
  },

  "find-minimum-in-rotated-sorted-array": {
    id: "find-minimum-in-rotated-sorted-array",
    title: "Find Minimum in Rotated Sorted Array",
    difficulty: "Medium",
    category: "Array • Binary Search",
    description: {
      text: "Suppose an array of length n sorted in ascending order is rotated between 1 and n times. Given the sorted rotated array nums of unique elements, return the minimum element of this array.",
      notes: ["You must write an algorithm that runs in O(log n) time."],
    },
    examples: [
      { input: "nums = [3,4,5,1,2]", output: "1", explanation: "The original array was [1,2,3,4,5] rotated 3 times." },
      { input: "nums = [4,5,6,7,0,1,2]", output: "0", explanation: "The original array was [0,1,2,4,5,6,7] rotated 4 times." },
      { input: "nums = [11,13,15,17]", output: "11", explanation: "The original array was [11,13,15,17] rotated 4 times." },
    ],
    constraints: ["n == nums.length", "1 ≤ n ≤ 5000", "-5000 ≤ nums[i] ≤ 5000", "All the integers of nums are unique", "nums is sorted and rotated between 1 and n times"],
    starterCode: {
      javascript: `function findMin(nums) {
  // Write your solution here

}

// Test cases
console.log(findMin([3,4,5,1,2]));     // Expected: 1
console.log(findMin([4,5,6,7,0,1,2])); // Expected: 0
console.log(findMin([11,13,15,17]));   // Expected: 11`,
      python: `def findMin(nums):
    # Write your solution here
    pass

# Test cases
print(findMin([3,4,5,1,2]))      # Expected: 1
print(findMin([4,5,6,7,0,1,2]))  # Expected: 0
print(findMin([11,13,15,17]))    # Expected: 11`,
      java: `class Solution {
    public static int findMin(int[] nums) {
        // Write your solution here
        return 0;
    }

    public static void main(String[] args) {
        System.out.println(findMin(new int[]{3,4,5,1,2}));     // Expected: 1
        System.out.println(findMin(new int[]{4,5,6,7,0,1,2})); // Expected: 0
        System.out.println(findMin(new int[]{11,13,15,17}));   // Expected: 11
    }
}`,
      c: `#include <stdio.h>

int findMin(int* nums, int numsSize) {
    // Write your solution here
    return 0;
}

int main() {
    int a[] = {3,4,5,1,2};
    printf("%d\\n", findMin(a, 5)); // Expected: 1
    int b[] = {4,5,6,7,0,1,2};
    printf("%d\\n", findMin(b, 7)); // Expected: 0
    int c[] = {11,13,15,17};
    printf("%d\\n", findMin(c, 4)); // Expected: 11
    return 0;
}`,
      cpp: `#include <iostream>
#include <vector>
using namespace std;

int findMin(vector<int>& nums) {
    // Write your solution here
    return 0;
}

int main() {
    vector<int> a = {3,4,5,1,2};
    cout << findMin(a) << endl; // Expected: 1
    vector<int> b = {4,5,6,7,0,1,2};
    cout << findMin(b) << endl; // Expected: 0
    vector<int> c = {11,13,15,17};
    cout << findMin(c) << endl; // Expected: 11
    return 0;
}`,
    },
    expectedOutput: {
      javascript: "1\n0\n11",
      python: "1\n0\n11",
      java: "1\n0\n11",
      c: "1\n0\n11",
      cpp: "1\n0\n11",
    },
  },

  "longest-substring-without-repeating-characters": {
    id: "longest-substring-without-repeating-characters",
    title: "Longest Substring Without Repeating Characters",
    difficulty: "Medium",
    category: "Hash Table • String • Sliding Window",
    description: {
      text: "Given a string s, find the length of the longest substring without repeating characters.",
      notes: [],
    },
    examples: [
      { input: 's = "abcabcbb"', output: "3", explanation: 'The answer is "abc", with the length of 3.' },
      { input: 's = "bbbbb"', output: "1", explanation: 'The answer is "b", with the length of 1.' },
      { input: 's = "pwwkew"', output: "3", explanation: 'The answer is "wke", with the length of 3.' },
    ],
    constraints: ["0 ≤ s.length ≤ 5 * 10⁴", "s consists of English letters, digits, symbols and spaces"],
    starterCode: {
      javascript: `function lengthOfLongestSubstring(s) {
  // Write your solution here

}

// Test cases
console.log(lengthOfLongestSubstring("abcabcbb")); // Expected: 3
console.log(lengthOfLongestSubstring("bbbbb"));    // Expected: 1
console.log(lengthOfLongestSubstring("pwwkew"));   // Expected: 3`,
      python: `def lengthOfLongestSubstring(s):
    # Write your solution here
    pass

# Test cases
print(lengthOfLongestSubstring("abcabcbb"))  # Expected: 3
print(lengthOfLongestSubstring("bbbbb"))     # Expected: 1
print(lengthOfLongestSubstring("pwwkew"))    # Expected: 3`,
      java: `class Solution {
    public static int lengthOfLongestSubstring(String s) {
        // Write your solution here
        return 0;
    }

    public static void main(String[] args) {
        System.out.println(lengthOfLongestSubstring("abcabcbb")); // Expected: 3
        System.out.println(lengthOfLongestSubstring("bbbbb"));    // Expected: 1
        System.out.println(lengthOfLongestSubstring("pwwkew"));   // Expected: 3
    }
}`,
      c: `#include <stdio.h>
#include <string.h>

int lengthOfLongestSubstring(char* s) {
    // Write your solution here
    return 0;
}

int main() {
    printf("%d\\n", lengthOfLongestSubstring("abcabcbb")); // Expected: 3
    printf("%d\\n", lengthOfLongestSubstring("bbbbb"));    // Expected: 1
    printf("%d\\n", lengthOfLongestSubstring("pwwkew"));   // Expected: 3
    return 0;
}`,
      cpp: `#include <iostream>
#include <string>
using namespace std;

int lengthOfLongestSubstring(string s) {
    // Write your solution here
    return 0;
}

int main() {
    cout << lengthOfLongestSubstring("abcabcbb") << endl; // Expected: 3
    cout << lengthOfLongestSubstring("bbbbb") << endl;    // Expected: 1
    cout << lengthOfLongestSubstring("pwwkew") << endl;   // Expected: 3
    return 0;
}`,
    },
    expectedOutput: {
      javascript: "3\n1\n3",
      python: "3\n1\n3",
      java: "3\n1\n3",
      c: "3\n1\n3",
      cpp: "3\n1\n3",
    },
  },

  "3sum": {
    id: "3sum",
    title: "3Sum",
    difficulty: "Medium",
    category: "Array • Two Pointers • Sorting",
    description: {
      text: "Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, j != k, and nums[i] + nums[j] + nums[k] == 0.",
      notes: ["The solution set must not contain duplicate triplets."],
    },
    examples: [
      { input: "nums = [-1,0,1,2,-1,-4]", output: "[[-1,-1,2],[-1,0,1]]" },
      { input: "nums = [0,1,1]", output: "[]" },
      { input: "nums = [0,0,0]", output: "[[0,0,0]]" },
    ],
    constraints: ["3 ≤ nums.length ≤ 3000", "-10⁵ ≤ nums[i] ≤ 10⁵"],
    starterCode: {
      javascript: `function threeSum(nums) {
  // Write your solution here

}

// Test cases
console.log(JSON.stringify(threeSum([-1,0,1,2,-1,-4]))); // Expected: [[-1,-1,2],[-1,0,1]]
console.log(JSON.stringify(threeSum([0,1,1])));           // Expected: []
console.log(JSON.stringify(threeSum([0,0,0])));           // Expected: [[0,0,0]]`,
      python: `def threeSum(nums):
    # Write your solution here
    pass

# Test cases
print(threeSum([-1,0,1,2,-1,-4]))  # Expected: [[-1,-1,2],[-1,0,1]]
print(threeSum([0,1,1]))            # Expected: []
print(threeSum([0,0,0]))            # Expected: [[0,0,0]]`,
      java: `import java.util.*;

class Solution {
    public static List<List<Integer>> threeSum(int[] nums) {
        // Write your solution here
        return new ArrayList<>();
    }

    public static void main(String[] args) {
        System.out.println(threeSum(new int[]{-1,0,1,2,-1,-4})); // Expected: [[-1,-1,2],[-1,0,1]]
        System.out.println(threeSum(new int[]{0,1,1}));           // Expected: []
        System.out.println(threeSum(new int[]{0,0,0}));           // Expected: [[0,0,0]]
    }
}`,
      c: `#include <stdio.h>
#include <stdlib.h>

// Returns a flat array of triplets; *returnSize = number of triplets
int** threeSum(int* nums, int numsSize, int* returnSize, int** returnColumnSizes) {
    // Write your solution here
    *returnSize = 0;
    return NULL;
}

int main() {
    // For C, implement and print your triplets manually
    printf("See your output above\\n");
    return 0;
}`,
      cpp: `#include <iostream>
#include <vector>
using namespace std;

vector<vector<int>> threeSum(vector<int>& nums) {
    // Write your solution here
    return {};
}

int main() {
    vector<int> a = {-1,0,1,2,-1,-4};
    for (auto& t : threeSum(a)) {
        cout << "[" << t[0] << "," << t[1] << "," << t[2] << "]";
    }
    cout << endl; // Expected: [-1,-1,2][-1,0,1]

    vector<int> b = {0,0,0};
    for (auto& t : threeSum(b)) {
        cout << "[" << t[0] << "," << t[1] << "," << t[2] << "]";
    }
    cout << endl; // Expected: [0,0,0]
    return 0;
}`,
    },
    expectedOutput: {
      javascript: '[[-1,-1,2],[-1,0,1]]\n[]\n[[0,0,0]]',
      python: "[[-1, -1, 2], [-1, 0, 1]]\n[]\n[[0, 0, 0]]",
      java: "[[-1, -1, 2], [-1, 0, 1]]\n[]\n[[0, 0, 0]]",
      c: "",
      cpp: "[-1,-1,2][-1,0,1]\n[0,0,0]",
    },
  },

  "group-anagrams": {
    id: "group-anagrams",
    title: "Group Anagrams",
    difficulty: "Medium",
    category: "Array • Hash Table • String • Sorting",
    description: {
      text: "Given an array of strings strs, group the anagrams together. You can return the answer in any order.",
      notes: ["An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, using all the original letters exactly once."],
    },
    examples: [
      { input: 'strs = ["eat","tea","tan","ate","nat","bat"]', output: '[["bat"],["nat","tan"],["ate","eat","tea"]]' },
      { input: 'strs = [""]', output: '[[""]]' },
      { input: 'strs = ["a"]', output: '[["a"]]' },
    ],
    constraints: ["1 ≤ strs.length ≤ 10⁴", "0 ≤ strs[i].length ≤ 100", "strs[i] consists of lowercase English letters"],
    starterCode: {
      javascript: `function groupAnagrams(strs) {
  // Write your solution here

}

// Test cases
console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]));
console.log(groupAnagrams([""]));
console.log(groupAnagrams(["a"]));`,
      python: `def groupAnagrams(strs):
    # Write your solution here
    pass

# Test cases
print(groupAnagrams(["eat","tea","tan","ate","nat","bat"]))
print(groupAnagrams([""]))
print(groupAnagrams(["a"]))`,
      java: `import java.util.*;

class Solution {
    public static List<List<String>> groupAnagrams(String[] strs) {
        // Write your solution here
        return new ArrayList<>();
    }

    public static void main(String[] args) {
        System.out.println(groupAnagrams(new String[]{"eat","tea","tan","ate","nat","bat"}));
        System.out.println(groupAnagrams(new String[]{""}));
        System.out.println(groupAnagrams(new String[]{"a"}));
    }
}`,
      c: `#include <stdio.h>
// Note: C does not have built-in hash maps.
// Consider using sorted keys to group anagrams.

void groupAnagrams(char** strs, int strsSize) {
    // Write your solution here (print groups)
}

int main() {
    char* a[] = {"eat","tea","tan","ate","nat","bat"};
    groupAnagrams(a, 6);
    return 0;
}`,
      cpp: `#include <iostream>
#include <vector>
#include <string>
#include <unordered_map>
#include <algorithm>
using namespace std;

vector<vector<string>> groupAnagrams(vector<string>& strs) {
    // Write your solution here
    return {};
}

int main() {
    vector<string> a = {"eat","tea","tan","ate","nat","bat"};
    for (auto& g : groupAnagrams(a)) {
        for (auto& s : g) cout << s << " ";
        cout << endl;
    }
    return 0;
}`,
    },
    expectedOutput: {
      javascript: "[['bat'],['nat','tan'],['ate','eat','tea']]\n[['']]\n[['a']]",
      python: "[['bat'], ['nat', 'tan'], ['ate', 'eat', 'tea']]\n[['']]\n[['a']]",
      java: "[[bat], [nat, tan], [ate, eat, tea]]\n[[]]\n[[a]]",
      c: "",
      cpp: "",
    },
  },

  "coin-change": {
    id: "coin-change",
    title: "Coin Change",
    difficulty: "Medium",
    category: "Array • Dynamic Programming • BFS",
    description: {
      text: "You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money. Return the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.",
      notes: ["You may assume that you have an infinite number of each kind of coin."],
    },
    examples: [
      { input: "coins = [1,5,11,25], amount = 36", output: "3", explanation: "36 = 25 + 11" },
      { input: "coins = [1,2,5], amount = 11", output: "3", explanation: "11 = 5 + 5 + 1" },
      { input: "coins = [2], amount = 3", output: "-1" },
    ],
    constraints: ["1 ≤ coins.length ≤ 12", "1 ≤ coins[i] ≤ 2³¹ - 1", "0 ≤ amount ≤ 10⁴"],
    starterCode: {
      javascript: `function coinChange(coins, amount) {
  // Write your solution here

}

// Test cases
console.log(coinChange([1,5,11,25], 36)); // Expected: 3
console.log(coinChange([1,2,5], 11));     // Expected: 3
console.log(coinChange([2], 3));          // Expected: -1`,
      python: `def coinChange(coins, amount):
    # Write your solution here
    pass

# Test cases
print(coinChange([1,5,11,25], 36))  # Expected: 3
print(coinChange([1,2,5], 11))      # Expected: 3
print(coinChange([2], 3))           # Expected: -1`,
      java: `class Solution {
    public static int coinChange(int[] coins, int amount) {
        // Write your solution here
        return 0;
    }

    public static void main(String[] args) {
        System.out.println(coinChange(new int[]{1,5,11,25}, 36)); // Expected: 3
        System.out.println(coinChange(new int[]{1,2,5}, 11));     // Expected: 3
        System.out.println(coinChange(new int[]{2}, 3));          // Expected: -1
    }
}`,
      c: `#include <stdio.h>

int coinChange(int* coins, int coinsSize, int amount) {
    // Write your solution here
    return 0;
}

int main() {
    int a[] = {1,5,11,25};
    printf("%d\\n", coinChange(a, 4, 36)); // Expected: 3
    int b[] = {1,2,5};
    printf("%d\\n", coinChange(b, 3, 11)); // Expected: 3
    int c[] = {2};
    printf("%d\\n", coinChange(c, 1, 3));  // Expected: -1
    return 0;
}`,
      cpp: `#include <iostream>
#include <vector>
using namespace std;

int coinChange(vector<int>& coins, int amount) {
    // Write your solution here
    return 0;
}

int main() {
    vector<int> a = {1,5,11,25};
    cout << coinChange(a, 36) << endl; // Expected: 3
    vector<int> b = {1,2,5};
    cout << coinChange(b, 11) << endl; // Expected: 3
    vector<int> c = {2};
    cout << coinChange(c, 3) << endl;  // Expected: -1
    return 0;
}`,
    },
    expectedOutput: {
      javascript: "3\n3\n-1",
      python: "3\n3\n-1",
      java: "3\n3\n-1",
      c: "3\n3\n-1",
      cpp: "3\n3\n-1",
    },
  },

  "number-of-islands": {
    id: "number-of-islands",
    title: "Number of Islands",
    difficulty: "Medium",
    category: "Array • DFS • BFS • Matrix",
    description: {
      text: "Given an m x n 2D binary grid which represents a map of '1's (land) and '0's (water), return the number of islands.",
      notes: ["An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically."],
    },
    examples: [
      {
        input: 'grid = [["1","1","1","1","0"],["1","1","0","1","0"],["1","1","0","0","0"],["0","0","0","0","0"]]',
        output: "1",
      },
      {
        input: 'grid = [["1","1","0","0","0"],["1","1","0","0","0"],["0","0","1","0","0"],["0","0","0","1","1"]]',
        output: "3",
      },
    ],
    constraints: ["m == grid.length", "n == grid[i].length", "1 ≤ m, n ≤ 300", "grid[i][j] is '0' or '1'"],
    starterCode: {
      javascript: `function numIslands(grid) {
  // Write your solution here

}

// Test cases
console.log(numIslands([["1","1","1","1","0"],["1","1","0","1","0"],["1","1","0","0","0"],["0","0","0","0","0"]])); // Expected: 1
console.log(numIslands([["1","1","0","0","0"],["1","1","0","0","0"],["0","0","1","0","0"],["0","0","0","1","1"]])); // Expected: 3`,
      python: `def numIslands(grid):
    # Write your solution here
    pass

# Test cases
print(numIslands([["1","1","1","1","0"],["1","1","0","1","0"],["1","1","0","0","0"],["0","0","0","0","0"]]))  # Expected: 1
print(numIslands([["1","1","0","0","0"],["1","1","0","0","0"],["0","0","1","0","0"],["0","0","0","1","1"]]))  # Expected: 3`,
      java: `class Solution {
    public static int numIslands(char[][] grid) {
        // Write your solution here
        return 0;
    }

    public static void main(String[] args) {
        System.out.println(numIslands(new char[][]{{'1','1','1','1','0'},{'1','1','0','1','0'},{'1','1','0','0','0'},{'0','0','0','0','0'}})); // Expected: 1
        System.out.println(numIslands(new char[][]{{'1','1','0','0','0'},{'1','1','0','0','0'},{'0','0','1','0','0'},{'0','0','0','1','1'}})); // Expected: 3
    }
}`,
      c: `#include <stdio.h>

int numIslands(char** grid, int gridSize, int* gridColSize) {
    // Write your solution here
    return 0;
}

int main() {
    char row1_1[] = "11110", row1_2[] = "11010", row1_3[] = "11000", row1_4[] = "00000";
    char* g1[] = {row1_1, row1_2, row1_3, row1_4};
    int cols1[] = {5,5,5,5};
    printf("%d\\n", numIslands(g1, 4, cols1)); // Expected: 1

    char row2_1[] = "11000", row2_2[] = "11000", row2_3[] = "00100", row2_4[] = "00011";
    char* g2[] = {row2_1, row2_2, row2_3, row2_4};
    int cols2[] = {5,5,5,5};
    printf("%d\\n", numIslands(g2, 4, cols2)); // Expected: 3
    return 0;
}`,
      cpp: `#include <iostream>
#include <vector>
using namespace std;

int numIslands(vector<vector<char>>& grid) {
    // Write your solution here
    return 0;
}

int main() {
    vector<vector<char>> g1 = {{'1','1','1','1','0'},{'1','1','0','1','0'},{'1','1','0','0','0'},{'0','0','0','0','0'}};
    cout << numIslands(g1) << endl; // Expected: 1

    vector<vector<char>> g2 = {{'1','1','0','0','0'},{'1','1','0','0','0'},{'0','0','1','0','0'},{'0','0','0','1','1'}};
    cout << numIslands(g2) << endl; // Expected: 3
    return 0;
}`,
    },
    expectedOutput: {
      javascript: "1\n3",
      python: "1\n3",
      java: "1\n3",
      c: "1\n3",
      cpp: "1\n3",
    },
  },

  "search-in-rotated-sorted-array": {
    id: "search-in-rotated-sorted-array",
    title: "Search in Rotated Sorted Array",
    difficulty: "Medium",
    category: "Array • Binary Search",
    description: {
      text: "Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.",
      notes: ["You must write an algorithm with O(log n) runtime complexity.", "There is an integer array nums sorted in ascending order (with distinct values) that has possibly been rotated at an unknown pivot."],
    },
    examples: [
      { input: "nums = [4,5,6,7,0,1,2], target = 0", output: "4" },
      { input: "nums = [4,5,6,7,0,1,2], target = 3", output: "-1" },
      { input: "nums = [1], target = 0", output: "-1" },
    ],
    constraints: ["1 ≤ nums.length ≤ 5000", "-10⁴ ≤ nums[i] ≤ 10⁴", "All values of nums are unique", "-10⁴ ≤ target ≤ 10⁴"],
    starterCode: {
      javascript: `function search(nums, target) {
  // Write your solution here

}

// Test cases
console.log(search([4,5,6,7,0,1,2], 0)); // Expected: 4
console.log(search([4,5,6,7,0,1,2], 3)); // Expected: -1
console.log(search([1], 0));             // Expected: -1`,
      python: `def search(nums, target):
    # Write your solution here
    pass

# Test cases
print(search([4,5,6,7,0,1,2], 0))  # Expected: 4
print(search([4,5,6,7,0,1,2], 3))  # Expected: -1
print(search([1], 0))               # Expected: -1`,
      java: `class Solution {
    public static int search(int[] nums, int target) {
        // Write your solution here
        return -1;
    }

    public static void main(String[] args) {
        System.out.println(search(new int[]{4,5,6,7,0,1,2}, 0)); // Expected: 4
        System.out.println(search(new int[]{4,5,6,7,0,1,2}, 3)); // Expected: -1
        System.out.println(search(new int[]{1}, 0));              // Expected: -1
    }
}`,
      c: `#include <stdio.h>

int search(int* nums, int numsSize, int target) {
    // Write your solution here
    return -1;
}

int main() {
    int a[] = {4,5,6,7,0,1,2};
    printf("%d\\n", search(a, 7, 0)); // Expected: 4
    printf("%d\\n", search(a, 7, 3)); // Expected: -1
    int b[] = {1};
    printf("%d\\n", search(b, 1, 0)); // Expected: -1
    return 0;
}`,
      cpp: `#include <iostream>
#include <vector>
using namespace std;

int search(vector<int>& nums, int target) {
    // Write your solution here
    return -1;
}

int main() {
    vector<int> a = {4,5,6,7,0,1,2};
    cout << search(a, 0) << endl; // Expected: 4
    cout << search(a, 3) << endl; // Expected: -1
    vector<int> b = {1};
    cout << search(b, 0) << endl; // Expected: -1
    return 0;
}`,
    },
    expectedOutput: {
      javascript: "4\n-1\n-1",
      python: "4\n-1\n-1",
      java: "4\n-1\n-1",
      c: "4\n-1\n-1",
      cpp: "4\n-1\n-1",
    },
  },

  "top-k-frequent-elements": {
    id: "top-k-frequent-elements",
    title: "Top K Frequent Elements",
    difficulty: "Medium",
    category: "Array • Hash Table • Sorting • Heap",
    description: {
      text: "Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.",
      notes: ["You must solve it in better than O(n log n) time complexity."],
    },
    examples: [
      { input: "nums = [1,1,1,2,2,3], k = 2", output: "[1,2]" },
      { input: "nums = [1], k = 1", output: "[1]" },
    ],
    constraints: ["1 ≤ nums.length ≤ 10⁵", "-10⁴ ≤ nums[i] ≤ 10⁴", "k is in the range [1, the number of unique elements in the array]", "It is guaranteed that the answer is unique"],
    starterCode: {
      javascript: `function topKFrequent(nums, k) {
  // Write your solution here

}

// Test cases
console.log(topKFrequent([1,1,1,2,2,3], 2)); // Expected: [1,2]
console.log(topKFrequent([1], 1));            // Expected: [1]`,
      python: `def topKFrequent(nums, k):
    # Write your solution here
    pass

# Test cases
print(topKFrequent([1,1,1,2,2,3], 2))  # Expected: [1, 2]
print(topKFrequent([1], 1))             # Expected: [1]`,
      java: `import java.util.*;

class Solution {
    public static int[] topKFrequent(int[] nums, int k) {
        // Write your solution here
        return new int[0];
    }

    public static void main(String[] args) {
        System.out.println(Arrays.toString(topKFrequent(new int[]{1,1,1,2,2,3}, 2))); // Expected: [1, 2]
        System.out.println(Arrays.toString(topKFrequent(new int[]{1}, 1)));            // Expected: [1]
    }
}`,
      c: `#include <stdio.h>
#include <stdlib.h>

int* topKFrequent(int* nums, int numsSize, int k, int* returnSize) {
    // Write your solution here
    *returnSize = k;
    return (int*)calloc(k, sizeof(int));
}

int main() {
    int a[] = {1,1,1,2,2,3}, szA;
    int* ra = topKFrequent(a, 6, 2, &szA);
    for (int i = 0; i < szA; i++) printf("%d ", ra[i]); printf("\\n"); // Expected: 1 2
    free(ra);
    return 0;
}`,
      cpp: `#include <iostream>
#include <vector>
using namespace std;

vector<int> topKFrequent(vector<int>& nums, int k) {
    // Write your solution here
    return {};
}

int main() {
    vector<int> a = {1,1,1,2,2,3};
    for (int x : topKFrequent(a, 2)) cout << x << " "; cout << endl; // Expected: 1 2
    vector<int> b = {1};
    for (int x : topKFrequent(b, 1)) cout << x << " "; cout << endl; // Expected: 1
    return 0;
}`,
    },
    expectedOutput: {
      javascript: "[1,2]\n[1]",
      python: "[1, 2]\n[1]",
      java: "[1, 2]\n[1]",
      c: "1 2\n1",
      cpp: "1 2\n1",
    },
  },

  "jump-game": {
    id: "jump-game",
    title: "Jump Game",
    difficulty: "Medium",
    category: "Array • Dynamic Programming • Greedy",
    description: {
      text: "You are given an integer array nums. You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position. Return true if you can reach the last index, or false otherwise.",
      notes: [],
    },
    examples: [
      { input: "nums = [2,3,1,1,4]", output: "true", explanation: "Jump 1 step from index 0 to 1, then 3 steps to the last index." },
      { input: "nums = [3,2,1,0,4]", output: "false", explanation: "You will always arrive at index 3 no matter what. Its maximum jump length is 0, which makes it impossible to reach the last index." },
    ],
    constraints: ["1 ≤ nums.length ≤ 10⁴", "0 ≤ nums[i] ≤ 10⁵"],
    starterCode: {
      javascript: `function canJump(nums) {
  // Write your solution here

}

// Test cases
console.log(canJump([2,3,1,1,4])); // Expected: true
console.log(canJump([3,2,1,0,4])); // Expected: false`,
      python: `def canJump(nums):
    # Write your solution here
    pass

# Test cases
print(canJump([2,3,1,1,4]))  # Expected: True
print(canJump([3,2,1,0,4]))  # Expected: False`,
      java: `class Solution {
    public static boolean canJump(int[] nums) {
        // Write your solution here
        return false;
    }

    public static void main(String[] args) {
        System.out.println(canJump(new int[]{2,3,1,1,4})); // Expected: true
        System.out.println(canJump(new int[]{3,2,1,0,4})); // Expected: false
    }
}`,
      c: `#include <stdio.h>
#include <stdbool.h>

bool canJump(int* nums, int numsSize) {
    // Write your solution here
    return false;
}

int main() {
    int a[] = {2,3,1,1,4};
    printf("%s\\n", canJump(a, 5) ? "true" : "false"); // Expected: true
    int b[] = {3,2,1,0,4};
    printf("%s\\n", canJump(b, 5) ? "true" : "false"); // Expected: false
    return 0;
}`,
      cpp: `#include <iostream>
#include <vector>
using namespace std;

bool canJump(vector<int>& nums) {
    // Write your solution here
    return false;
}

int main() {
    vector<int> a = {2,3,1,1,4};
    cout << (canJump(a) ? "true" : "false") << endl; // Expected: true
    vector<int> b = {3,2,1,0,4};
    cout << (canJump(b) ? "true" : "false") << endl; // Expected: false
    return 0;
}`,
    },
    expectedOutput: {
      javascript: "true\nfalse",
      python: "True\nFalse",
      java: "true\nfalse",
      c: "true\nfalse",
      cpp: "true\nfalse",
    },
  },

  "rotate-image": {
    id: "rotate-image",
    title: "Rotate Image",
    difficulty: "Medium",
    category: "Array • Math • Matrix",
    description: {
      text: "You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).",
      notes: ["You have to rotate the image in-place, which means you have to modify the input 2D matrix directly.", "DO NOT allocate another 2D matrix and do the rotation."],
    },
    examples: [
      { input: "matrix = [[1,2,3],[4,5,6],[7,8,9]]", output: "[[7,4,1],[8,5,2],[9,6,3]]" },
      { input: "matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]", output: "[[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]" },
    ],
    constraints: ["n == matrix.length == matrix[i].length", "1 ≤ n ≤ 20", "-1000 ≤ matrix[i][j] ≤ 1000"],
    starterCode: {
      javascript: `function rotate(matrix) {
  // Write your solution here (in-place)

}

// Test cases
let m1 = [[1,2,3],[4,5,6],[7,8,9]];
rotate(m1);
console.log(m1); // Expected: [[7,4,1],[8,5,2],[9,6,3]]

let m2 = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]];
rotate(m2);
console.log(m2); // Expected: [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]`,
      python: `def rotate(matrix):
    # Write your solution here (in-place)
    pass

# Test cases
m1 = [[1,2,3],[4,5,6],[7,8,9]]
rotate(m1)
print(m1)  # Expected: [[7,4,1],[8,5,2],[9,6,3]]

m2 = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]
rotate(m2)
print(m2)  # Expected: [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]`,
      java: `import java.util.*;

class Solution {
    public static void rotate(int[][] matrix) {
        // Write your solution here (in-place)
    }

    public static void main(String[] args) {
        int[][] m1 = {{1,2,3},{4,5,6},{7,8,9}};
        rotate(m1);
        System.out.println(Arrays.deepToString(m1)); // Expected: [[7, 4, 1], [8, 5, 2], [9, 6, 3]]

        int[][] m2 = {{5,1,9,11},{2,4,8,10},{13,3,6,7},{15,14,12,16}};
        rotate(m2);
        System.out.println(Arrays.deepToString(m2)); // Expected: [[15, 13, 2, 5], [14, 3, 4, 1], [12, 6, 8, 9], [16, 7, 10, 11]]
    }
}`,
      c: `#include <stdio.h>

void rotate(int** matrix, int matrixSize, int* matrixColSize) {
    // Write your solution here (in-place)
}

void printMatrix(int** m, int n) {
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < n; j++) printf("%d ", m[i][j]);
        printf("\\n");
    }
}

int main() {
    int r1[] = {1,2,3}, r2[] = {4,5,6}, r3[] = {7,8,9};
    int* m1[] = {r1,r2,r3};
    int cols1[] = {3,3,3};
    rotate((int**)m1, 3, cols1);
    printMatrix((int**)m1, 3); // Expected: 7 4 1 / 8 5 2 / 9 6 3
    return 0;
}`,
      cpp: `#include <iostream>
#include <vector>
using namespace std;

void rotate(vector<vector<int>>& matrix) {
    // Write your solution here (in-place)
}

int main() {
    vector<vector<int>> m1 = {{1,2,3},{4,5,6},{7,8,9}};
    rotate(m1);
    for (auto& row : m1) { for (int x : row) cout << x << " "; cout << endl; }
    // Expected: 7 4 1 / 8 5 2 / 9 6 3

    vector<vector<int>> m2 = {{5,1,9,11},{2,4,8,10},{13,3,6,7},{15,14,12,16}};
    rotate(m2);
    for (auto& row : m2) { for (int x : row) cout << x << " "; cout << endl; }
    // Expected: 15 13 2 5 / 14 3 4 1 / 12 6 8 9 / 16 7 10 11
    return 0;
}`,
    },
    expectedOutput: {
      javascript: "[[7,4,1],[8,5,2],[9,6,3]]\n[[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]",
      python: "[[7, 4, 1], [8, 5, 2], [9, 6, 3]]\n[[15, 13, 2, 5], [14, 3, 4, 1], [12, 6, 8, 9], [16, 7, 10, 11]]",
      java: "[[7, 4, 1], [8, 5, 2], [9, 6, 3]]\n[[15, 13, 2, 5], [14, 3, 4, 1], [12, 6, 8, 9], [16, 7, 10, 11]]",
      c: "7 4 1\n8 5 2\n9 6 3",
      cpp: "7 4 1\n8 5 2\n9 6 3",
    },
  },

  // ─── HARD ──────────────────────────────────────────────────────────────────

  "trapping-rain-water": {
    id: "trapping-rain-water",
    title: "Trapping Rain Water",
    difficulty: "Hard",
    category: "Array • Two Pointers • Dynamic Programming • Stack",
    description: {
      text: "Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.",
      notes: [],
    },
    examples: [
      { input: "height = [0,1,0,2,1,0,1,3,2,1,2,1]", output: "6", explanation: "The elevation map is represented by the above array. 6 units of rain water are being trapped." },
      { input: "height = [4,2,0,3,2,5]", output: "9" },
    ],
    constraints: ["n == height.length", "1 ≤ n ≤ 2 * 10⁴", "0 ≤ height[i] ≤ 10⁵"],
    starterCode: {
      javascript: `function trap(height) {
  // Write your solution here

}

// Test cases
console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1])); // Expected: 6
console.log(trap([4,2,0,3,2,5]));              // Expected: 9`,
      python: `def trap(height):
    # Write your solution here
    pass

# Test cases
print(trap([0,1,0,2,1,0,1,3,2,1,2,1]))  # Expected: 6
print(trap([4,2,0,3,2,5]))               # Expected: 9`,
      java: `class Solution {
    public static int trap(int[] height) {
        // Write your solution here
        return 0;
    }

    public static void main(String[] args) {
        System.out.println(trap(new int[]{0,1,0,2,1,0,1,3,2,1,2,1})); // Expected: 6
        System.out.println(trap(new int[]{4,2,0,3,2,5}));              // Expected: 9
    }
}`,
      c: `#include <stdio.h>

int trap(int* height, int heightSize) {
    // Write your solution here
    return 0;
}

int main() {
    int a[] = {0,1,0,2,1,0,1,3,2,1,2,1};
    printf("%d\\n", trap(a, 12)); // Expected: 6
    int b[] = {4,2,0,3,2,5};
    printf("%d\\n", trap(b, 6));  // Expected: 9
    return 0;
}`,
      cpp: `#include <iostream>
#include <vector>
using namespace std;

int trap(vector<int>& height) {
    // Write your solution here
    return 0;
}

int main() {
    vector<int> a = {0,1,0,2,1,0,1,3,2,1,2,1};
    cout << trap(a) << endl; // Expected: 6
    vector<int> b = {4,2,0,3,2,5};
    cout << trap(b) << endl; // Expected: 9
    return 0;
}`,
    },
    expectedOutput: {
      javascript: "6\n9",
      python: "6\n9",
      java: "6\n9",
      c: "6\n9",
      cpp: "6\n9",
    },
  },

  "median-of-two-sorted-arrays": {
    id: "median-of-two-sorted-arrays",
    title: "Median of Two Sorted Arrays",
    difficulty: "Hard",
    category: "Array • Binary Search • Divide and Conquer",
    description: {
      text: "Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.",
      notes: ["The overall run time complexity should be O(log (m+n))."],
    },
    examples: [
      { input: "nums1 = [1,3], nums2 = [2]", output: "2.00000", explanation: "merged array = [1,2,3] and median is 2." },
      { input: "nums1 = [1,2], nums2 = [3,4]", output: "2.50000", explanation: "merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5." },
    ],
    constraints: ["nums1.length == m", "nums2.length == n", "0 ≤ m ≤ 1000", "0 ≤ n ≤ 1000", "1 ≤ m + n ≤ 2000", "-10⁶ ≤ nums1[i], nums2[i] ≤ 10⁶"],
    starterCode: {
      javascript: `function findMedianSortedArrays(nums1, nums2) {
  // Write your solution here

}

// Test cases
console.log(findMedianSortedArrays([1,3], [2]));   // Expected: 2.00000
console.log(findMedianSortedArrays([1,2], [3,4])); // Expected: 2.50000`,
      python: `def findMedianSortedArrays(nums1, nums2):
    # Write your solution here
    pass

# Test cases
print(findMedianSortedArrays([1,3], [2]))    # Expected: 2.0
print(findMedianSortedArrays([1,2], [3,4]))  # Expected: 2.5`,
      java: `class Solution {
    public static double findMedianSortedArrays(int[] nums1, int[] nums2) {
        // Write your solution here
        return 0.0;
    }

    public static void main(String[] args) {
        System.out.println(findMedianSortedArrays(new int[]{1,3}, new int[]{2}));   // Expected: 2.0
        System.out.println(findMedianSortedArrays(new int[]{1,2}, new int[]{3,4})); // Expected: 2.5
    }
}`,
      c: `#include <stdio.h>

double findMedianSortedArrays(int* nums1, int nums1Size, int* nums2, int nums2Size) {
    // Write your solution here
    return 0.0;
}

int main() {
    int a[] = {1,3}, b[] = {2};
    printf("%.1f\\n", findMedianSortedArrays(a, 2, b, 1)); // Expected: 2.0
    int c[] = {1,2}, d[] = {3,4};
    printf("%.1f\\n", findMedianSortedArrays(c, 2, d, 2)); // Expected: 2.5
    return 0;
}`,
      cpp: `#include <iostream>
#include <vector>
using namespace std;

double findMedianSortedArrays(vector<int>& nums1, vector<int>& nums2) {
    // Write your solution here
    return 0.0;
}

int main() {
    vector<int> a = {1,3}, b = {2};
    cout << findMedianSortedArrays(a, b) << endl; // Expected: 2
    vector<int> c = {1,2}, d = {3,4};
    cout << findMedianSortedArrays(c, d) << endl; // Expected: 2.5
    return 0;
}`,
    },
    expectedOutput: {
      javascript: "2\n2.5",
      python: "2.0\n2.5",
      java: "2.0\n2.5",
      c: "2.0\n2.5",
      cpp: "2\n2.5",
    },
  },

  "word-search": {
    id: "word-search",
    title: "Word Search",
    difficulty: "Hard",
    category: "Array • Backtracking • Matrix",
    description: {
      text: "Given an m x n grid of characters board and a string word, return true if word exists in the grid. The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring.",
      notes: ["The same letter cell may not be used more than once."],
    },
    examples: [
      { input: 'board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"', output: "true" },
      { input: 'board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "SEE"', output: "true" },
      { input: 'board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCB"', output: "false" },
    ],
    constraints: ["m == board.length", "n = board[i].length", "1 ≤ m, n ≤ 6", "1 ≤ word.length ≤ 15", "board and word consists of only lowercase and uppercase English letters"],
    starterCode: {
      javascript: `function exist(board, word) {
  // Write your solution here

}

// Test cases
let board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]];
console.log(exist(board, "ABCCED")); // Expected: true
console.log(exist(board, "SEE"));    // Expected: true
console.log(exist(board, "ABCB"));   // Expected: false`,
      python: `def exist(board, word):
    # Write your solution here
    pass

# Test cases
board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]]
print(exist(board, "ABCCED"))  # Expected: True
print(exist(board, "SEE"))     # Expected: True
print(exist(board, "ABCB"))    # Expected: False`,
      java: `class Solution {
    public static boolean exist(char[][] board, String word) {
        // Write your solution here
        return false;
    }

    public static void main(String[] args) {
        char[][] board = {{'A','B','C','E'},{'S','F','C','S'},{'A','D','E','E'}};
        System.out.println(exist(board, "ABCCED")); // Expected: true
        System.out.println(exist(board, "SEE"));    // Expected: true
        System.out.println(exist(board, "ABCB"));   // Expected: false
    }
}`,
      c: `#include <stdio.h>
#include <stdbool.h>
#include <string.h>

bool exist(char** board, int boardSize, int* boardColSize, char* word) {
    // Write your solution here
    return false;
}

int main() {
    char r1[] = "ABCE", r2[] = "SFCS", r3[] = "ADEE";
    char* board[] = {r1, r2, r3};
    int cols[] = {4,4,4};
    printf("%s\\n", exist(board, 3, cols, "ABCCED") ? "true" : "false"); // Expected: true
    printf("%s\\n", exist(board, 3, cols, "SEE") ? "true" : "false");    // Expected: true
    printf("%s\\n", exist(board, 3, cols, "ABCB") ? "true" : "false");   // Expected: false
    return 0;
}`,
      cpp: `#include <iostream>
#include <vector>
#include <string>
using namespace std;

bool exist(vector<vector<char>>& board, string word) {
    // Write your solution here
    return false;
}

int main() {
    vector<vector<char>> board = {{'A','B','C','E'},{'S','F','C','S'},{'A','D','E','E'}};
    cout << (exist(board, "ABCCED") ? "true" : "false") << endl; // Expected: true
    cout << (exist(board, "SEE") ? "true" : "false") << endl;    // Expected: true
    cout << (exist(board, "ABCB") ? "true" : "false") << endl;   // Expected: false
    return 0;
}`,
    },
    expectedOutput: {
      javascript: "true\ntrue\nfalse",
      python: "True\nTrue\nFalse",
      java: "true\ntrue\nfalse",
      c: "true\ntrue\nfalse",
      cpp: "true\ntrue\nfalse",
    },
  },

  "longest-increasing-subsequence": {
    id: "longest-increasing-subsequence",
    title: "Longest Increasing Subsequence",
    difficulty: "Medium",
    category: "Array • Binary Search • Dynamic Programming",
    description: {
      text: "Given an integer array nums, return the length of the longest strictly increasing subsequence.",
      notes: [],
    },
    examples: [
      { input: "nums = [10,9,2,5,3,7,101,18]", output: "4", explanation: "The longest increasing subsequence is [2,3,7,101], therefore the length is 4." },
      { input: "nums = [0,1,0,3,2,3]", output: "4" },
      { input: "nums = [7,7,7,7,7,7,7]", output: "1" },
    ],
    constraints: ["1 ≤ nums.length ≤ 2500", "-10⁴ ≤ nums[i] ≤ 10⁴"],
    starterCode: {
      javascript: `function lengthOfLIS(nums) {
  // Write your solution here

}

// Test cases
console.log(lengthOfLIS([10,9,2,5,3,7,101,18])); // Expected: 4
console.log(lengthOfLIS([0,1,0,3,2,3]));          // Expected: 4
console.log(lengthOfLIS([7,7,7,7,7,7,7]));        // Expected: 1`,
      python: `def lengthOfLIS(nums):
    # Write your solution here
    pass

# Test cases
print(lengthOfLIS([10,9,2,5,3,7,101,18]))  # Expected: 4
print(lengthOfLIS([0,1,0,3,2,3]))           # Expected: 4
print(lengthOfLIS([7,7,7,7,7,7,7]))         # Expected: 1`,
      java: `class Solution {
    public static int lengthOfLIS(int[] nums) {
        // Write your solution here
        return 0;
    }

    public static void main(String[] args) {
        System.out.println(lengthOfLIS(new int[]{10,9,2,5,3,7,101,18})); // Expected: 4
        System.out.println(lengthOfLIS(new int[]{0,1,0,3,2,3}));          // Expected: 4
        System.out.println(lengthOfLIS(new int[]{7,7,7,7,7,7,7}));        // Expected: 1
    }
}`,
      c: `#include <stdio.h>

int lengthOfLIS(int* nums, int numsSize) {
    // Write your solution here
    return 0;
}

int main() {
    int a[] = {10,9,2,5,3,7,101,18};
    printf("%d\\n", lengthOfLIS(a, 8)); // Expected: 4
    int b[] = {0,1,0,3,2,3};
    printf("%d\\n", lengthOfLIS(b, 6)); // Expected: 4
    int c[] = {7,7,7,7,7,7,7};
    printf("%d\\n", lengthOfLIS(c, 7)); // Expected: 1
    return 0;
}`,
      cpp: `#include <iostream>
#include <vector>
using namespace std;

int lengthOfLIS(vector<int>& nums) {
    // Write your solution here
    return 0;
}

int main() {
    vector<int> a = {10,9,2,5,3,7,101,18};
    cout << lengthOfLIS(a) << endl; // Expected: 4
    vector<int> b = {0,1,0,3,2,3};
    cout << lengthOfLIS(b) << endl; // Expected: 4
    vector<int> c = {7,7,7,7,7,7,7};
    cout << lengthOfLIS(c) << endl; // Expected: 1
    return 0;
}`,
    },
    expectedOutput: {
      javascript: "4\n4\n1",
      python: "4\n4\n1",
      java: "4\n4\n1",
      c: "4\n4\n1",
      cpp: "4\n4\n1",
    },
  },

  "minimum-window-substring": {
    id: "minimum-window-substring",
    title: "Minimum Window Substring",
    difficulty: "Hard",
    category: "Hash Table • String • Sliding Window",
    description: {
      text: "Given two strings s and t of lengths m and n respectively, return the minimum window substring of s such that every character in t (including duplicates) is included in the window. If there is no such substring, return the empty string \"\".",
      notes: ["The testcases will be generated such that the answer is unique."],
    },
    examples: [
      { input: 's = "ADOBECODEBANC", t = "ABC"', output: '"BANC"', explanation: "The minimum window substring BANC includes A, B, and C from string t." },
      { input: 's = "a", t = "a"', output: '"a"' },
      { input: 's = "a", t = "aa"', output: '""', explanation: "Both a's from t must be included in the window. Since the largest window of s only has one a, return empty string." },
    ],
    constraints: ["m == s.length", "n == t.length", "1 ≤ m, n ≤ 10⁵", "s and t consist of uppercase and lowercase English letters"],
    starterCode: {
      javascript: `function minWindow(s, t) {
  // Write your solution here

}

// Test cases
console.log(minWindow("ADOBECODEBANC", "ABC")); // Expected: "BANC"
console.log(minWindow("a", "a"));               // Expected: "a"
console.log(minWindow("a", "aa"));              // Expected: ""`,
      python: `def minWindow(s, t):
    # Write your solution here
    pass

# Test cases
print(minWindow("ADOBECODEBANC", "ABC"))  # Expected: "BANC"
print(minWindow("a", "a"))                # Expected: "a"
print(minWindow("a", "aa"))               # Expected: ""`,
      java: `class Solution {
    public static String minWindow(String s, String t) {
        // Write your solution here
        return "";
    }

    public static void main(String[] args) {
        System.out.println(minWindow("ADOBECODEBANC", "ABC")); // Expected: BANC
        System.out.println(minWindow("a", "a"));               // Expected: a
        System.out.println(minWindow("a", "aa"));              // Expected: (empty)
    }
}`,
      c: `#include <stdio.h>
#include <string.h>

char* minWindow(char* s, char* t) {
    // Write your solution here
    return "";
}

int main() {
    printf("%s\\n", minWindow("ADOBECODEBANC", "ABC")); // Expected: BANC
    printf("%s\\n", minWindow("a", "a"));               // Expected: a
    printf("%s\\n", minWindow("a", "aa"));              // Expected: (empty)
    return 0;
}`,
      cpp: `#include <iostream>
#include <string>
using namespace std;

string minWindow(string s, string t) {
    // Write your solution here
    return "";
}

int main() {
    cout << minWindow("ADOBECODEBANC", "ABC") << endl; // Expected: BANC
    cout << minWindow("a", "a") << endl;               // Expected: a
    cout << minWindow("a", "aa") << endl;              // Expected: (empty)
    return 0;
}`,
    },
    expectedOutput: {
      javascript: "BANC\na\n",
      python: "BANC\na\n",
      java: "BANC\na\n",
      c: "BANC\na\n",
      cpp: "BANC\na\n",
    },
  },
};


export const LANGUAGE_CONFIG = {
  javascript: {
    name: "JavaScript",
    icon: "/javascript.png",
    monacoLang: "javascript",
  },
  python: {
    name: "Python",
    icon: "/python.png",
    monacoLang: "python",
  },
  java: {
    name: "Java",
    icon: "/java.png",
    monacoLang: "java",
  },
  c: {
    name: "C",
    icon: "/c.png",
    monacoLang: "cpp",
  },
  cpp: {
    name: "C++",
    icon: "/cpp.png",
    monacoLang: "cpp",
  },
};