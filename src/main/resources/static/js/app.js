// Employee Directory App
class EmployeeDirectory {
    constructor() {
        this.currentPage = 1;
        this.itemsPerPage = 10;
        this.filteredEmployees = [...mockEmployees];
        this.currentEmployeeToDelete = null;
        this.currentFilters = {
            search: '',
            department: '',
            role: ''
        };

        this.init();
    }

    init() {
        this.setupEventListeners();
        this.renderEmployees();
        this.updatePagination();
    }

    setupEventListeners() {
        // Search functionality
        const searchInput = document.getElementById('searchInput');
        if (searchInput) {
            searchInput.addEventListener('input', (e) => {
                this.currentFilters.search = e.target.value;
                this.handleSearch();
            });
        }

        // Filter button
        const filterBtn = document.querySelector('.filter-btn');
        if (filterBtn) {
            filterBtn.addEventListener('click', () => {
                this.showFilterModal();
            });
        }

        // Sort functionality
        const sortBy = document.getElementById('sortBy');
        if (sortBy) {
            sortBy.addEventListener('change', () => this.applyFilters());
        }

        // Items per page
        const itemsPerPageSelect = document.getElementById('itemsPerPage');
        if (itemsPerPageSelect) {
            itemsPerPageSelect.addEventListener('change', (e) => {
                this.itemsPerPage = parseInt(e.target.value);
                this.currentPage = 1;
                this.renderEmployees();
                this.updatePagination();
            });
        }

        // Pagination buttons
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');

        if (prevBtn) {
            prevBtn.addEventListener('click', () => this.previousPage());
        }

        if (nextBtn) {
            nextBtn.addEventListener('click', () => this.nextPage());
        }

        // Filter modal functionality
        const filterModal = document.getElementById('filterModal');
        const applyFilters = document.getElementById('applyFilters');
        const clearFilters = document.getElementById('clearFilters');
        const closeFilters = document.getElementById('closeFilters');

        if (applyFilters) {
            applyFilters.addEventListener('click', () => this.applyFilterModal());
        }

        if (clearFilters) {
            clearFilters.addEventListener('click', () => this.clearFilterModal());
        }

        if (closeFilters) {
            closeFilters.addEventListener('click', () => this.closeFilterModal());
        }

        // Close filter modal when clicking outside
        if (filterModal) {
            filterModal.addEventListener('click', (e) => {
                if (e.target === filterModal) {
                    this.closeFilterModal();
                }
            });
        }

        // Delete modal functionality
        const deleteModal = document.getElementById('deleteModal');
        const confirmDelete = document.getElementById('confirmDelete');
        const cancelDelete = document.getElementById('cancelDelete');

        if (confirmDelete) {
            confirmDelete.addEventListener('click', () => this.confirmDeleteEmployee());
        }

        if (cancelDelete) {
            cancelDelete.addEventListener('click', () => this.closeDeleteModal());
        }

        // Close delete modal when clicking outside
        if (deleteModal) {
            deleteModal.addEventListener('click', (e) => {
                if (e.target === deleteModal) {
                    this.closeDeleteModal();
                }
            });
        }
    }

    handleSearch() {
        this.currentPage = 1;
        this.applyFilters();
    }

    showFilterModal() {
        const modal = document.getElementById('filterModal');
        if (modal) {
            document.getElementById('departmentFilter').value = this.currentFilters.department;
            document.getElementById('roleFilter').value = this.currentFilters.role;
            modal.style.display = 'block';
        }
    }

    closeFilterModal() {
        const modal = document.getElementById('filterModal');
        if (modal) {
            modal.style.display = 'none';
        }
    }

    applyFilterModal() {
        this.currentFilters.department = document.getElementById('departmentFilter').value;
        this.currentFilters.role = document.getElementById('roleFilter').value;
        this.applyFilters();
        this.closeFilterModal();
    }

    clearFilterModal() {
        document.getElementById('departmentFilter').value = '';
        document.getElementById('roleFilter').value = '';
        this.currentFilters.department = '';
        this.currentFilters.role = '';
        this.applyFilters();
        this.closeFilterModal();
    }

    applyFilters() {
        const sortBy = document.getElementById('sortBy')?.value || 'firstName';

        this.filteredEmployees = mockEmployees.filter(employee => {
            const matchesSearch =
                employee.firstName.toLowerCase().includes(this.currentFilters.search.toLowerCase()) ||
                employee.lastName.toLowerCase().includes(this.currentFilters.search.toLowerCase()) ||
                employee.email.toLowerCase().includes(this.currentFilters.search.toLowerCase());

            const matchesDepartment = !this.currentFilters.department || employee.department === this.currentFilters.department;
            const matchesRole = !this.currentFilters.role || employee.role === this.currentFilters.role;

            return matchesSearch && matchesDepartment && matchesRole;
        });

        this.filteredEmployees.sort((a, b) => {
            if (sortBy === 'firstName') {
                return a.firstName.localeCompare(b.firstName);
            } else if (sortBy === 'department') {
                return a.department.localeCompare(b.department);
            }
            return 0;
        });

        this.currentPage = 1;
        this.renderEmployees();
        this.updatePagination();
    }

    renderEmployees() {
        const employeeGrid = document.getElementById('employeeGrid');
        if (!employeeGrid) return;

        const startIndex = (this.currentPage - 1) * this.itemsPerPage;
        const endIndex = startIndex + this.itemsPerPage;
        const employeesToShow = this.filteredEmployees.slice(startIndex, endIndex);

        if (employeesToShow.length === 0) {
            employeeGrid.innerHTML = '<div style="text-align: center; padding: 40px; color: #666;">No employees found matching your criteria.</div>';
            return;
        }

        employeeGrid.innerHTML = employeesToShow.map(employee => `
            <div class="employee-card">
                <div class="employee-name">${employee.firstName} ${employee.lastName}</div>
                <div class="employee-details">
                    <span><strong>Email:</strong> ${employee.email}</span>
                    <span><strong>Department:</strong> ${employee.department}</span>
                    <span><strong>Role:</strong> ${employee.role}</span>
                </div>
                <div class="employee-actions">
                    <a href="add-edit.html?id=${employee.id}" class="btn btn-edit">Edit</a>
                    <button class="btn btn-delete" onclick="deleteEmployee(${employee.id})">Delete</button>
                </div>
            </div>
        `).join('');
    }

    updatePagination() {
        const totalPages = Math.ceil(this.filteredEmployees.length / this.itemsPerPage);
        const pageInfo = document.getElementById('pageInfo');
        const totalEmployees = document.getElementById('totalEmployees');

        if (pageInfo) {
            pageInfo.textContent = `Page ${this.currentPage} of ${totalPages || 1}`;
        }

        if (totalEmployees) {
            totalEmployees.textContent = `Total: ${this.filteredEmployees.length} employees`;
        }

        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');

        if (prevBtn) {
            prevBtn.disabled = this.currentPage === 1;
        }

        if (nextBtn) {
            nextBtn.disabled = this.currentPage === totalPages || totalPages === 0;
        }
    }

    previousPage() {
        if (this.currentPage > 1) {
            this.currentPage--;
            this.renderEmployees();
            this.updatePagination();
        }
    }

    nextPage() {
        const totalPages = Math.ceil(this.filteredEmployees.length / this.itemsPerPage);
        if (this.currentPage < totalPages) {
            this.currentPage++;
            this.renderEmployees();
            this.updatePagination();
        }
    }

    showDeleteModal(employeeId) {
        this.currentEmployeeToDelete = employeeId;
        const modal = document.getElementById('deleteModal');
        if (modal) {
            modal.style.display = 'block';
        }
    }

    closeDeleteModal() {
        this.currentEmployeeToDelete = null;
        const modal = document.getElementById('deleteModal');
        if (modal) {
            modal.style.display = 'none';
        }
    }

    confirmDeleteEmployee() {
        if (this.currentEmployeeToDelete) {
            const index = mockEmployees.findIndex(emp => emp.id === this.currentEmployeeToDelete);
            if (index !== -1) {
                mockEmployees.splice(index, 1);
                saveEmployeesToStorage();
                this.applyFilters();
            }
        }
        this.closeDeleteModal();
    }
}

// Global delete button handler
function deleteEmployee(id) {
    if (window.employeeDirectory) {
        window.employeeDirectory.showDeleteModal(id);
    }
}

// Initialize EmployeeDirectory on DOM ready
document.addEventListener('DOMContentLoaded', function () {
    window.employeeDirectory = new EmployeeDirectory();
});

// Initialize Form Page
document.addEventListener('DOMContentLoaded', function () {
    const urlParams = new URLSearchParams(window.location.search);
    const employeeId = urlParams.get('id');

    if (employeeId) {
        document.getElementById('pageTitle').textContent = 'Edit Employee';
        document.querySelector('.btn-primary').textContent = 'Save';
        loadEmployeeData(employeeId);
    }

    const form = document.getElementById('employeeForm');
    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            if (validateForm()) {
                saveEmployee(employeeId);
            }
        });

        document.getElementById('firstName').addEventListener('input', function () {
            const value = this.value.trim();
            document.getElementById('firstNameError').textContent = value ? '' : 'First name is required';
        });

        document.getElementById('lastName').addEventListener('input', function () {
            const value = this.value.trim();
            document.getElementById('lastNameError').textContent = value ? '' : 'Last name is required';
        });

        document.getElementById('email').addEventListener('input', function () {
            const value = this.value.trim();
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!value) {
                document.getElementById('emailError').textContent = 'Email is required';
            } else if (!emailRegex.test(value)) {
                document.getElementById('emailError').textContent = 'Please enter a valid email address';
            } else {
                document.getElementById('emailError').textContent = '';
            }
        });

        document.getElementById('department').addEventListener('input', function () {
            document.getElementById('departmentError').textContent = this.value ? '' : 'Department is required';
        });

        document.getElementById('role').addEventListener('input', function () {
            document.getElementById('roleError').textContent = this.value ? '' : 'Role is required';
        });
    }
});

function loadEmployeeData(id) {
    const employee = mockEmployees.find(emp => emp.id === parseInt(id));
    if (employee) {
        document.getElementById('firstName').value = employee.firstName;
        document.getElementById('lastName').value = employee.lastName;
        document.getElementById('email').value = employee.email;
        document.getElementById('department').value = employee.department;
        document.getElementById('role').value = employee.role;
    }
}

function validateForm() {
    let isValid = true;
    document.querySelectorAll('.error-message').forEach(el => el.textContent = '');

    const firstName = document.getElementById('firstName').value.trim();
    if (!firstName) {
        document.getElementById('firstNameError').textContent = 'First name is required';
        isValid = false;
    }

    const lastName = document.getElementById('lastName').value.trim();
    if (!lastName) {
        document.getElementById('lastNameError').textContent = 'Last name is required';
        isValid = false;
    }

    const email = document.getElementById('email').value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
        document.getElementById('emailError').textContent = 'Email is required';
        isValid = false;
    } else if (!emailRegex.test(email)) {
        document.getElementById('emailError').textContent = 'Please enter a valid email address';
        isValid = false;
    }

    const department = document.getElementById('department').value;
    if (!department) {
        document.getElementById('departmentError').textContent = 'Department is required';
        isValid = false;
    }

    const role = document.getElementById('role').value;
    if (!role) {
        document.getElementById('roleError').textContent = 'Role is required';
        isValid = false;
    }

    return isValid;
}

function saveEmployee(editId) {
    const formData = {
        firstName: document.getElementById('firstName').value.trim(),
        lastName: document.getElementById('lastName').value.trim(),
        email: document.getElementById('email').value.trim(),
        department: document.getElementById('department').value,
        role: document.getElementById('role').value
    };

    if (editId) {
        const index = mockEmployees.findIndex(emp => emp.id === parseInt(editId));
        if (index !== -1) {
            mockEmployees[index] = { ...mockEmployees[index], ...formData };
        }
    } else {
        const newEmployee = {
            id: Math.max(...mockEmployees.map(emp => emp.id)) + 1,
            ...formData
        };
        mockEmployees.push(newEmployee);
    }

    localStorage.setItem('employees', JSON.stringify(mockEmployees));
    window.location.href = 'dashboard.html';
}
