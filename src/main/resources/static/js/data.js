// Mock Employee Data
let mockEmployees = [
    {
        id: 1,
        firstName: "Alice",
        lastName: "Smith",
        email: "alice@example.com",
        department: "HR",
        role: "Manager"
    },
    {
        id: 2,
        firstName: "Bob",
        lastName: "Johnson",
        email: "bob@example.com",
        department: "IT",
        role: "Developer"
    },
    {
        id: 3,
        firstName: "Charlie",
        lastName: "Lee",
        email: "charlie@example.com",
        department: "Finance",
        role: "Analyst"
    },
    {
        id: 4,
        firstName: "Diana",
        lastName: "Wilson",
        email: "diana@example.com",
        department: "Marketing",
        role: "Manager"
    },
    {
        id: 5,
        firstName: "Edward",
        lastName: "Brown",
        email: "edward@example.com",
        department: "Engineering",
        role: "Developer"
    },
    {
        id: 6,
        firstName: "Fiona",
        lastName: "Davis",
        email: "fiona@example.com",
        department: "Sales",
        role: "Coordinator"
    },
    {
        id: 7,
        firstName: "George",
        lastName: "Martinez",
        email: "george@example.com",
        department: "HR",
        role: "Analyst"
    },
    {
        id: 8,
        firstName: "Helen",
        lastName: "Anderson",
        email: "helen@example.com",
        department: "IT",
        role: "Manager"
    },
    {
        id: 9,
        firstName: "Ian",
        lastName: "Taylor",
        email: "ian@example.com",
        department: "Finance",
        role: "Coordinator"
    },
    {
        id: 10,
        firstName: "Julia",
        lastName: "Thomas",
        email: "julia@example.com",
        department: "Marketing",
        role: "Designer"
    }
];

// Initialize data from localStorage if available
function initializeData() {
    const savedEmployees = localStorage.getItem('employees');
    if (savedEmployees) {
        mockEmployees = JSON.parse(savedEmployees);
    } else {
        // Save initial data to localStorage
        localStorage.setItem('employees', JSON.stringify(mockEmployees));
    }
}

// Save data to localStorage
function saveEmployeesToStorage() {
    localStorage.setItem('employees', JSON.stringify(mockEmployees));
}

// Initialize data when script loads
initializeData();