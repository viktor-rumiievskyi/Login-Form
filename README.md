
# 🔐 Login Form

A sleek and responsive login form built with **HTML**, **CSS**, and **JavaScript**. Designed for authentication pages with user-friendly features and easy integration into any web project.

## 🔍 Key Features

- 📋 Clean login form with username/email and password fields
- ✅ Client-side form validation (empty fields, input formats)
- 🔒 Password masking with optional show/hide toggle
- 🧠 Remember Me checkbox (UI-ready)
- 📱 Fully responsive layout (mobile-friendly)
- 🧩 Easy to integrate into existing projects

## 🌟 Optional Enhancements (Ideas for Expansion)

These are not yet included, but easy to implement for practice:

- 🔐 Backend integration (e.g., PHP, Node.js)
- 📡 API-based authentication (e.g., JWT, Firebase)
- 🛑 Error messages on incorrect login attempts
- 🔁 "Forgot Password?" link
- ✨ Dark mode toggle
- 🌐 Multilanguage support (i18n)

## 💡 Technologies Used

- HTML5
- CSS3 (Flexbox/Grid)
- JavaScript (Vanilla)

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/viktor-rumiievskyi/Login-Form.git
cd Login-Form
```

### 2. Open in Browser

Simply open `index.html` in your browser.

### Optional: Run on Localhost

```bash
# Using Python 3
python -m http.server
```

Then visit `http://localhost:8000`.

## 📁 Project Structure

```
Login-Form/
│
├── index.html       # Main login form HTML
├── style.css        # CSS styles and layout
├── script.js        # JavaScript for validation and interaction
└── README.md        # Project documentation
```



## 🔧 Sample Validation Logic

```javascript
const form = document.querySelector("form");
form.addEventListener("submit", function(e) {
  const username = document.querySelector("#username").value.trim();
  const password = document.querySelector("#password").value.trim();
  if (!username || !password) {
    alert("Please fill in all fields.");
    e.preventDefault(); // prevent form submission
  }
});
```

## 👨‍💻 Author

**Viktor Rumiievskyi**  
- GitHub: [@viktor-rumiievskyi](https://github.com/viktor-rumiievskyi)

## 📄 License

This project is licensed under the MIT License.

---

![GitHub repo size](https://img.shields.io/github/repo-size/viktor-rumiievskyi/Login-Form)
![GitHub last commit](https://img.shields.io/github/last-commit/viktor-rumiievskyi/Login-Form)
![GitHub license](https://img.shields.io/github/license/viktor-rumiievskyi/Login-Form)
