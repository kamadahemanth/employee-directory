# Employee Directory Web App

A complete employee management system built with vanilla JavaScript, HTML, CSS, and Freemarker templates as per the AJACKUS frontend assignment requirements.

## Features

### Dashboard Page
- **Employee Cards**: Display employee information (ID, First Name, Last Name, Email, Department, Role)
- **Search**: Real-time search functionality by name or email
- **Filters**: Filter employees by department and role
- **Sorting**: Sort employees by first name or department
- **Pagination**: Customizable pagination (10, 25, 50, 100 items per page)
- **Actions**: Edit and delete buttons for each employee

### Add/Edit Page
- **Form Validation**: Client-side validation for all required fields
- **Email Validation**: Proper email format validation
- **Responsive Form**: Clean, accessible form design
- **Cancel/Save**: Easy navigation between pages

### Technical Features
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Local Storage**: Persistent data storage using browser's local storage
- **Freemarker Templates**: Separate template files for dashboard and add/edit pages
- **Modern UI**: Clean, professional design with hover effects and animations
- **Modal Dialogs**: Confirmation modal for delete operations

## Getting Started

### Option 1: Direct Browser Access
1. Clone or download the project files
2. Open `DashBoard.html` in your web browser
3. Click "Launch Dashboard" to start using the application

### Option 2: With Freemarker Backend
1. Set up a Freemarker-enabled server (Spring Boot, etc.)
2. Configure templates directory to point to `/templates`
3. Configure static resources to point to `/static`
4. Access the dashboard template through your server

## Usage

### Dashboard Navigation
- **Search**: Type in the search bar to filter employees by name or email
- **Filters**: Use dropdown menus to filter by department or role
- **Sorting**: Select sort criteria from the dropdown
- **Pagination**: Choose items per page and navigate with Previous/Next buttons
- **Actions**: Click Edit to modify employee or Delete to remove (with confirmation)

### Adding New Employees
1. Click "Add New Employee" on the dashboard
2. Fill in all required fields (marked with *)
3. Click "Save Employee" to add to the directory
4. Click "Cancel" to return without saving

### Editing Employees
1. Click "Edit" on any employee card
2. Modify the information in the form
3. Click "Save Employee" to update
4. Click "Cancel" to return without changes

## Data Management

- **Mock Data**: Includes 15 sample employees across different departments
- **Local Storage**: All changes are automatically saved to browser storage
- **Data Persistence**: Changes persist between browser sessions
- **Validation**: All forms include comprehensive client-side validation

## Responsive Design

The application is fully responsive with breakpoints for:
- **Desktop**: > 768px (Multi-column grid layout)
- **Tablet**: 768px - 480px (Responsive grid and navigation)
- **Mobile**: < 480px (Single column layout, stacked elements)

## Browser Compatibility

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Development

### CSS Architecture
- **Mobile-first approach**: Base styles for mobile with media queries for larger screens
- **Flexbox**: Modern layout system for responsive design
- **CSS Grid**: Employee card layout with auto-fit columns
- **Custom Properties**: Consistent color scheme and spacing

### JavaScript Features
- **ES6+ Syntax**: Modern JavaScript features
- **Class-based Architecture**: Organized code structure
- **Event Delegation**: Efficient event handling
- **Local Storage API**: Data persistence

### Freemarker Templates
- **Semantic HTML**: Clean, accessible markup
- **Template Inheritance**: Reusable template structure
- **Dynamic Content**: Server-side template rendering capability

## Future Enhancements

- Export employee data to CSV/Excel
- Advanced search with multiple criteria
- Employee photos/avatars
- Department-wise reporting
- Email integration
- Print functionality
- Dark mode toggle

