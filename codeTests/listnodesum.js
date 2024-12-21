function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val); // Value of the node
    this.next = (next === undefined ? null : next); // Reference to the next node
}

function makeList(valueArray) {
    let previous = undefined;
    valueArray.reverse().forEach((item) => {
        const node = new ListNode(item, previous);
        previous = node;
    });

    return previous;
}

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 *
 * @return {ListNode|undefined}
 */
var addTwoNumbers = function(l1, l2) {
    let n1 = l1;
    let n2 = l2;
    let start = new ListNode(0);
    let current = start;
    let carry = 0;

    while (n1 || n2 || carry === 1) {
        let sum = (n1?.val || 0) + (n2?.val || 0) + carry;
        carry = (sum > 9) ? 1 : 0;
        current.val = sum % 10;
        if (n1?.next || n2?.next || carry === 1) {
            current.next = new ListNode();
            current = current.next;
        }
        n1 = n1?.next;
        n2 = n2?.next;
    }

    return start;
};

let result;
let list1 = makeList([2,4,9]);
let list2 = makeList([5,6,4]);

result = addTwoNumbers(list1, list2);
console.log(result);

// list1 = makeList([9,8,9]);
// list2 = makeList([5,6,4]);
//
// result = addTwoNumbers(list1, list2);
// console.log(result);