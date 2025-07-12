<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Employee Directory</title>
    <link rel="stylesheet" href="/employee-directory/src/main/resources/static/css/style.css">
</head>
<body>
    <div class="container-fluid">
        <header class="header">
            <h1>Employee Directory</h1>
            <div class="header-right">
                <input type="text" id="searchInput" placeholder="Search by name or email" class="search-input">
                <button class="filter-btn">Filter</button>
            </div>
        </header>

        <div class="controls">
            <div class="controls-left">
                <span>Sort:</span>
                <select id="sortBy">
                    <option value="firstName">--Select--</option>
                    <option value="firstName">First Name</option>
                    <option value="department">Department</option>
                </select>
                <span>Show:</span>
                <select id="itemsPerPage">
                    <option value="10">10</option>
                    <option value="25">25</option>
                    <option value="50">50</option>
                    <option value="100">100</option>
                </select>
            </div>
            
            <div class="controls-right">
                <a href="add-edit.ftlh" class="btn-add">Add Employee</a>
            </div>
        </div>

        <div class="employee-grid" id="employeeGrid">
            <!-- Employee cards will be dynamically generated here -->
        </div>

        <div class="pagination-controls">
            <div class="pagination-info">
                <span id="totalEmployees">Total: 0 employees</span>
            </div>
            
            <div class="pagination-nav">
                <button id="prevBtn" disabled>Previous</button>
                <span id="pageInfo">Page 1 of 1</span>
                <button id="nextBtn" disabled>Next</button>
            </div>
        </div>

        <footer class="footer">
            © 2025 Employee Directory App. All rights reserved.
        </footer>
    </div>

    <!-- Filter Modal -->
    <div id="filterModal" class="modal">
        <div class="modal-content">
            <h3>Filter Options</h3>
            <div class="form-group">
                <label for="departmentFilter">Department:</label>
                <select id="departmentFilter">
                    <option value="">All Departments</option>
                    <option value="Engineering">Engineering</option>
                    <option value="Marketing">Marketing</option>
                    <option value="Sales">Sales</option>
                    <option value="HR">HR</option>
                    <option value="Finance">Finance</option>
                </select>
            </div>
            
            <div class="form-group">
                <label for="roleFilter">Role:</label>
                <select id="roleFilter">
                    <option value="">All Roles</option>
                    <option value="Developer">Developer</option>
                    <option value="Manager">Manager</option>
                    <option value="Designer">Designer</option>
                    <option value="Analyst">Analyst</option>
                    <option value="Coordinator">Coordinator</option>
                </select>
            </div>
            
            <div class="modal-actions">
                <button id="applyFilters" class="btn-primary">Apply</button>
                <button id="clearFilters" class="btn-secondary">Clear</button>
                <button id="closeFilters" class="btn-secondary">Close</button>
            </div>
        </div>
    </div>

    <!-- Delete Confirmation Modal -->
    <div id="deleteModal" class="modal">
        <div class="modal-content">
            <h3>Confirm Delete</h3>
            <p>Are you sure you want to delete this employee?</p>
            <div class="modal-actions">
                <button id="confirmDelete" class="btn-danger">Delete</button>
                <button id="cancelDelete" class="btn-secondary">Cancel</button>
            </div>
        </div>
    </div>

    <script src="/employee-directory/src/main/resources/static/js/app.js"></script>
    <script src="/employee-directory/src/main/resources/static/js/data.js"></script>
</body>
</html>