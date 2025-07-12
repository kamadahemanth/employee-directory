# 📁 Employee Directory Web App

A complete Employee Management System built with **Vanilla JavaScript**, **HTML**, **CSS**, and **Freemarker templates**, as part of the [Ajackus](https://www.ajackus.com) Frontend Assignment.

---

## ✨ Features

### 📋 Dashboard
- 🧾 **Employee Cards** – View ID, First Name, Last Name, Email, Department, Role  
- 🔍 **Search** – Real-time search by name or email  
- 🎯 **Filters** – Filter employees by department and role  
- 🔃 **Sorting** – Sort by first name or department  
- 📄 **Pagination** – Supports 10, 25, 50, or 100 items per page  
- 🛠️ **Actions** – Edit and Delete functionality for each employee  

### ➕ Add / Edit Page
- ✅ **Form Validation** – Client-side validation for required fields  
- 📧 **Email Validation** – Checks for valid email format  
- 📱 **Responsive Design** – Clean form UI across all screen sizes  
- 🔁 **Cancel/Save Buttons** – Smooth navigation between pages  

### ⚙️ Technical Stack
- 🌐 **Responsive Layout** – Desktop, tablet & mobile friendly  
- 💾 **Local Storage** – Persistent storage for employee data  
- 🧩 **Freemarker Templates** – Separated views for dashboard and form pages  
- ✨ **Modern UI** – Minimal, clean design with transitions  
- 🗑️ **Modal Dialogs** – Confirmation on delete  

---

## 🚀 Getting Started

### 🖥 Option 1: Direct Browser Access
1. Clone or download the repository  
2. Open `DashBoard.html` in any modern browser  
3. Click **"Launch Dashboard"** to begin  

### 💻 Option 2: Freemarker Template with Backend
1. Set up a Freemarker-enabled server (e.g. Spring Boot)  
2. Configure:
   - Templates directory → `/templates`  
   - Static resources → `/static`  
3. Access the dashboard via the backend route

---

## 🧑‍💼 Usage Guide

### 🔎 Dashboard
- **Search** by typing a name or email  
- **Filter** using Department and Role dropdowns  
- **Sort** via dropdown options  
- **Pagination** for smooth navigation  
- **Edit/Delete** employee records  

### ➕ Add New Employee
1. Click **"Add New Employee"**  
2. Fill all required fields marked with `*`  
3. Click **Save Employee** or **Cancel**  

### 📝 Edit Existing Employee
1. Click **Edit** on a card  
2. Update the form  
3. Save or Cancel changes  

---

## 🗃️ Data Management

- 📦 **Mock Data** – Includes 15 sample employees  
- 🔁 **Live Updates** – All changes saved automatically to local storage  
- 🧠 **Persistence** – Data stays across browser sessions  
- 🛡 **Validation** – All inputs are strictly validated on the client side  

---

## 📱 Responsive Design

- **Desktop (≥ 768px)** – Multi-column grid  
- **Tablet (480px - 768px)** – Adaptive layout  
- **Mobile (< 480px)** – Single column, stacked elements  

---

## 🌍 Browser Compatibility

- ✅ Chrome (latest)  
- ✅ Firefox (latest)  
- ✅ Safari (latest)  
- ✅ Edge (latest)  

---

## 🛠 Developer Notes

### 📐 CSS Architecture
- Mobile-first approach  
- Flexbox + CSS Grid layout  
- CSS custom properties for consistent theming  

### 📜 JavaScript Features
- ES6+ syntax  
- Class-based structure  
- Event delegation  
- Local Storage API  

### 📄 Freemarker Integration
- Semantic HTML  
- Template inheritance  
- Server-side rendering support  

---

## 📈 Future Enhancements

- 📤 Export to CSV/Excel  
- 🔍 Advanced multi-criteria search  
- 🖼️ Employee photos/avatars  
- 📊 Department-wise reports  
- 📧 Email alerts  
- 🖨️ Print support  
- 🌙 Dark mode toggle  

---

## ⚙️ Project Setup

### 📦 Local Development Setup

```bash
# Step 1: Clone the repo or download the ZIP
git clone https://github.com/yourusername/employee-directory.git

# Step 2: Navigate to the project folder
cd employee-directory

# Step 3: Install dependencies (if needed)
npm install

# Step 4: Start a local server
npx serve . -p 3000  # You can change the port if needed
