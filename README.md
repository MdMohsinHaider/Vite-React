# Vite React App with React Router

This is a simple project setup using [Vite](https://vitejs.dev/) as the build tool, [React](https://reactjs.org/) as the frontend library, and [React Router](https://reactrouter.com/) for routing.

## Features

- ⚡ Lightning-fast build and hot module replacement with Vite
- ⚛️ Component-based architecture with React
- 🚦 Routing capabilities with React Router

## Prerequisites

Make sure you have the following installed:

- Node.js (v14 or higher)
- npm (v6 or higher) or Yarn

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/your-repo.git
cd your-repo
```

### 2. Install dependencies

Using npm:

```bash
npm install
```

Or using Yarn:

```bash
yarn install
```

### 3. Start the development server

```bash
npm run dev
```

Or with Yarn:

```bash
yarn dev
```

The app will be available at [http://localhost:5173](http://localhost:5173).

## Project Structure

```
.
├── public            # Static assets
├── src
│   ├── components    # Reusable React components
│   ├── pages         # Page components for routing
│   ├── App.jsx       # Main App component
│   ├── main.jsx      # Entry point
│   └── router.js     # React Router configuration
├── package.json      # Project dependencies and scripts
└── vite.config.js    # Vite configuration
```

## Scripts

- `dev`: Starts the development server
- `build`: Builds the project for production
- `preview`: Serves the production build for preview
- `lint`: Runs ESLint to check for code quality issues
- `host`: Starts the development server with hosting enabled

## Setting Up React Router

React Router is pre-configured in this project. The `src/App.jsx` file now includes the routing logic:

```javascript
import Navbar from "./components/Navbar";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contacts from "./pages/Contact";
import NotFound from "./pages/NotFound";
import './App.css';

const App = () => {
    return (
        <div className="app-container">
            {/* Creating Routes using React Router */}
            <BrowserRouter>
                <Navbar/><hr />
                <Routes>
                    {/* Defining the route paths and their respective components */}
                    <Route path="/" element={<Home/>}/>
                    <Route path="/about" element={<About/>} />
                    <Route path="/services" element={<Services/>} />
                    <Route path="/contacts" element={<Contacts/>} />
                    <Route path="*" element={<NotFound/>} />
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default App;
```

## Entry Point

The application starts from the `src/main.jsx` file, which renders the root React component:

```javascript
import {createRoot} from "react-dom/client";
import App from "./App";

// Attaching the root React component to the DOM
createRoot(document.getElementById("root")).render(<App/>);
```

## Navbar Component

The `src/components/Navbar.jsx` file defines a styled navigation bar:

```javascript
import { Link } from "react-router-dom";

const Navbar = () => {
    const navStyle = {
        display: "flex",
        justifyContent: "space-between", // Layout adjustments for alignment
        alignItems: "center",
        padding: "10px 20px",
        backgroundColor: "#282c34",
        color: "#fff",
        boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)", // Shadow effect for visual enhancement
    };

    const linkStyle = {
        textDecoration: "none",
        color: "#61dafb",
        fontSize: "18px",
        padding: "10px 15px",
        transition: "all 0.3s ease", // Smooth hover effects
    };

    const linkHoverStyle = {
        color: "#ffffff", // Hover color change
        backgroundColor: "#61dafb", // Hover background color
        borderRadius: "5px", // Rounded corners for hover effect
    };

    return (
        <nav style={navStyle}>
            <div style={{ display: "flex", gap: "20px" }}>
                {/* Navigation links */}
                <Link to="/" style={linkStyle}>Home</Link>
                <Link to="/services" style={linkStyle}>Services</Link>
                <Link to="/about" style={linkStyle}>About</Link>
                <Link to="/contacts" style={linkStyle}>Contacts</Link>
            </div>
        </nav>
    );
};

export default Navbar;
```

## Dependencies

The `package.json` file includes the following dependencies and scripts:

```json
{
  "name": "browserrouter",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint .",
    "preview": "vite preview",
    "host":"vite --host"
  },
  "dependencies": {
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-router-dom": "^7.1.1"
  },
  "devDependencies": {
    "@eslint/js": "^9.17.0",
    "@types/react": "^18.3.18",
    "@types/react-dom": "^18.3.5",
    "@vitejs/plugin-react": "^4.3.4",
    "eslint": "^9.17.0",
    "eslint-plugin-react": "^7.37.2",
    "eslint-plugin-react-hooks": "^5.0.0",
    "eslint-plugin-react-refresh": "^0.4.16",
    "globals": "^15.14.0",
    "vite": "^6.0.5"
  }
}
```

## Building for Production

To build the app for production, run:

```bash
npm run build
```

Or with Yarn:

```bash
yarn build
```

The production-ready files will be in the `dist` folder.

## Deploying

You can deploy the contents of the `dist` folder to any static hosting service, such as:

- [Vercel](https://vercel.com/)
- [Netlify](https://www.netlify.com/)
- [GitHub Pages](https://pages.github.com/)

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.

---

Happy coding! 🚀
