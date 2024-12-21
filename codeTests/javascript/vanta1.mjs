/*
Test for looping over training data, and checking for completion, and overdue

If an employee starts on day x, they need to take a training course by day y, by z days into their employment
If an HR person needs checks they need to e if a person is out of schedule, and by how many days.

Start day 100

checkOverdue(100, 10, null, 8)
checkOverdue(100, 10, null, 12)
checkOverdue(100, 5, 4, 9)
checkOverdue(100, 5, 7, 9)
checkOverdue(100, 10, 20, 13)

Output should be:
 Pending, not overdue
 Overdue by 2 days
 Completed
 Completed
 Overdue by 3 days.
 */

function checkOverdue(start, window, completed, check) {
    const overdueDay = start + window;
    const completedDay = (completed) ? start + completed : null;
    const checkDay = start + check;

    if (completedDay && completedDay <= checkDay) return "Completed"
    if (overdueDay < checkDay) return "Overdue by " + (checkDay - overdueDay);

    return "Pending, not overdue";
}

console.log(checkOverdue(100, 10, null, 8))
console.log(checkOverdue(100, 10, null, 12))
console.log(checkOverdue(100, 5, 4, 9))
console.log(checkOverdue(100, 5, 7, 9))
console.log(checkOverdue(100, 10, 20, 13))