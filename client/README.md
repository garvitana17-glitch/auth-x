# Auth-X Frontend

This is the **frontend client** for **Auth-X**, a complete MERN stack authentication system. It provides user interfaces for login, registration, email verification, and password reset using **React.js**.

## 🚀 Features

- Register with email confirmation
- Login with JWT
- Forgot and reset password flow
- Email verification UI
- Token-based protected routes
- Alert notifications for actions
- React Router for routing

## ⚙️ Tech Stack

- **React.js**
- **Axios**
- **React Router DOM**
- **Tailwind CSS** 
- **Shad CN** (For modern UI)
- **Toast Notifications** ( react-hot-toast )

## 🛠️ Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/Harshit-Parmar555/Auth-X-Frontend.git
cd frontend
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Environment Variables

Create a `.env` file in the root directory:

```env
VITE_MODE = development
VITE_BACKEND_URL = your_backend_url
```

Adjust the URL based on your backend's deployment.

### 4. Start the Frontend

```bash
npm run dev
```

App will be available at `http://localhost:5173`.

## 🧭 Pages

- `/` - Land Page
- `/register` – Create new account
- `/verify` – Email verification
- `/login` – Login to account
- `/forgotpassword` – Request password reset
- `/resetpassword/:token` – Enter new password
- `/dashboard` – Protected route after login
- `/terms` - Terms page for Auth-X
- `/privacy` - Privacy policy page for Auth-X
- `/*` - Error 404 page 

## 🔐 Protected Routes

Routes like `/dashboard` are protected using JWT stored in cookies and validated via middleware.

---

## ✨ Contributing

Feel free to contribute by opening a **Pull Request** or **Issue**!

---

## 🛡️ License

💡 Have suggestions or found a bug? Open a pull request or create an issue — contributions are always welcome!

---

Happy Coding! 🚀
