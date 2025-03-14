package main.java.twoThree;

public class Main {
    public static void main(String[] args) {
        Solution solution = new Solution();

        // Example linked lists
        ListNode list1 = new ListNode(1);
        list1.next = new ListNode(4);
        list1.next.next = new ListNode(5);

        ListNode list2 = new ListNode(1);
        list2.next = new ListNode(3);
        list2.next.next = new ListNode(4);

        ListNode list3 = new ListNode(2);
        list3.next = new ListNode(6);

        // Create an array of linked lists
        ListNode[] lists = {list1, list2, list3};

        // Call the mergeKLists method
        ListNode result = solution.mergeKLists(lists);

        // Print the merged list
        while (result != null) {
            System.out.print(result.val + " ");
            result = result.next;
        }
    }
}