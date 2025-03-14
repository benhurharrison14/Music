package main.java.twoTwoSevenFour;

import java.util.Arrays;

public class Solution {
    public int maxConsecutive(int bottom, int top, int[] special) {
        Arrays.sort(special);
        int result = 0;
        result = Math.max(result, special[0] - bottom);
        for (int i = 1; i < special.length; i++) {
            int gap = special[i] - special[i - 1] - 1;
            result = Math.max(result, gap);
        }
        result = Math.max(result, top - special[special.length - 1]);
        return result;
    }
}
