const departments = [
    { id: 1, name: "Sales", subDepts: [6, 7, 8] },
    { id: 2, name: "Human Resources", subDepts: [] },
    { id: 3, name: "Legal", subDepts: [] },
    { id: 4, name: "Customer Support", subDepts: [9, 10, 11] },
    { id: 5, name: "Facilites", subDepts: [] },
    { id: 6, name: "Direct Sales", subDepts: [] },
    { id: 7, name: "Support Sales", subDepts: [] },
    { id: 8, name: "Enterprise", subDepts: [] },
    { id: 9, name: "Warthogs", subDepts: [] },
    { id: 10, name: "Bison", subDepts: [] },
    { id: 11, name: "Phoenix", subDepts: [12, 13] },
    { id: 12, name: "Fire Phoenix", subDepts: [] },
    { id: 13, name: "Ice Phoenix", subDepts: [] },
    { id: 14, name: "Product Dev", subDepts: [15, 16] },
    { id: 15, name: "Development", subDepts: [""] },
    { id: 16, name: "Support", subDepts: [""] },
];

function findDepartmentById(id, departments) {
    return departments.find((dept) => dept.id === id) || null;
}

/**
 *
 * @param id
 * @param departments
 * @param level Current level of recursiojn
 */
function getChildDepartments(id, departments) {
    const parent = findDepartmentById(id, departments);
    if (!parent) return null;

    parent.subDepts = parent.subDepts.map((subId) => getChildDepartments(subId, departments));
    return parent;
}

function displayAllHierarchies(departments) {
    const rootDepartments = departments.filter(
        (department) => !departments.some((dept) => dept.subDepts.includes(department.id))
    );

    return rootDepartments.map((root) => getChildDepartments(root.id, departments));
}

// Example: Display the hierarchy for all departments
console.log(JSON.stringify(displayAllHierarchies(departments), null, 2));
