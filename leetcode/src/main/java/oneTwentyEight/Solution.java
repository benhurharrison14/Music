package main.java.oneTwentyEight;

import java.util.Set;
import java.util.TreeSet;

public class Solution {
    public int longestConsecutive(int[] nums) {
        Set<Integer> numsList = new TreeSet<Integer>();
        for (int i = 0; i < nums.length; i++) {
            numsList.add(nums[i]);
        }
        int result = 0;
        for (int i : numsList) {
            if (!numsList.contains(i - 1)) {
                int length = 0;
                while (numsList.contains((length + i))) {
                    length++;
                }
                result = Math.max(result, length);
            }
        }
        return result;
    }
}