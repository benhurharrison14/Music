package main.java.threeFour;

class Solution {
    public int[] searchRange(int[] arr, int target) {
        int h = arr.length - 1;
        int[] ans = {-1, -1};
        int first = firstOccurence(arr, 0, h, target);
        if (first == -1) {
            return ans;
        }
        int last = lastOccurence(arr, first, h, target);
        ans[0] = first;
        ans[1] = last;

        for(int i: ans){
            System.out.println(i);
        }
        return ans;
    }
    private int firstOccurence(int[] arr, int l, int h, int target) {
        int first = -1;
        while (l <= h) {
            int mid = l + (h - l) / 2;
            if (target == arr[mid]) {
                first = mid;
                h = mid - 1; 
            } else if (target < arr[mid]) {
                h = mid - 1;
            } else {
                l = mid + 1;
            }
        }

        return first;
    }
    private int lastOccurence(int[] arr, int l, int h, int target) {
        int last = -1;
        while (l <= h) {
            int mid = l + (h - l) / 2;
            if (target == arr[mid]) {
                last = mid;
                l = mid + 1; 
            } else if (target < arr[mid]) {
                h = mid - 1;
            } else {
                l = mid + 1;
            }
        }
        return last;
    }
}
