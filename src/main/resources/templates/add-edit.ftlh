<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Add Employee - Employee Directory</title>
    <link rel="stylesheet" href="/employee-directory/src/main/resources/static/css/style.css">
</head>
<body>
    <div class="container">
        <div class="form-container">
            <div class="form-header">
                <h1 id="pageTitle">Add Employee</h1>
            </div>
            
            <div class="form-content">
                <form id="employeeForm" novalidate>
                    <div class="form-group">
                        <label for="firstName">First name</label>
                        <input type="text" id="firstName" name="firstName" required>
                        <span class="error-message" id="firstNameError"></span>
                    </div>

                    <div class="form-group">
                        <label for="lastName">Last name</label>
                        <input type="text" id="lastName" name="lastName" required>
                        <span class="error-message" id="lastNameError"></span>
                    </div>

                    <div class="form-row">
                        <div class="form-group">
                            <label for="email">Email</label>
                            <input type="email" id="email" name="email" required>
                            <span class="error-message" id="emailError"></span>
                        </div>

                        <div class="form-group">
                            <label for="department">Department</label>
                            <select id="department" name="department" required>
                                <option value="">Select Department</option>
                                <option value="Engineering">Engineering</option>
                                <option value="Marketing">Marketing</option>
                                <option value="Sales">Sales</option>
                                <option value="HR">HR</option>
                                <option value="Finance">Finance</option>
                            </select>
                            <span class="error-message" id="departmentError"></span>
                        </div>
                    </div>

                    <div class="form-group">
                        <label for="role">Role</label>
                        <select id="role" name="role" required>
                            <option value="">Select Role</option>
                            <option value="Developer">Developer</option>
                            <option value="Manager">Manager</option>
                            <option value="Designer">Designer</option>
                            <option value="Analyst">Analyst</option>
                            <option value="Coordinator">Coordinator</option>
                        </select>
                        <span class="error-message" id="roleError"></span>
                    </div>

                    <div class="form-actions">
                        <button type="button" class="btn-secondary" onclick="window.location.href='dashboard.ftlh'">Cancel</button>
                        <button type="submit" class="btn-primary">Add</button>
                    </div>
                </form>
            </div>
        </div>
    </div>

    <script src="/employee-directory/src/main/resources/static/js/data.js"></script>
    <script src="/employee-directory/src/main/resources/static/js/app.js"></script>

</body>
</html>